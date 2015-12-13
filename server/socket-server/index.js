import io from 'socket.io';

export default function (server) {
  const socketServer = io(server);
  const connections = [];
  let userId = 0;

  socketServer.on('connection', socket => {
    connections.push(socket);
    userId += 1;

    socket.emit('start', {userId});
    
    socket.on('message', data => {
      connections.forEach(connectedSocket => {
        if (connectedSocket !== socket) {
          connectedSocket.emit('message', data);
        }
      });
    });

    socket.on('disconnect', () => {
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
  });
}
