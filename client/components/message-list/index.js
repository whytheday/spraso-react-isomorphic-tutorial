import React, {Component} from 'react';
import {} from './style.less';

class MessageList extends Component {
  render(){
    return (
      <ol className='message-list'>
        {this.props.messages.map((message, index) => {
          const messageClass = message.userId !== this.props.userId ? 'is-response' : '';
          return (
            <li key={`message-${index}`} className='message-item'>
              <p className={`message ${messageClass}`}>
                {message.text}
              </p>
            </li>
          );
        })}
      </ol>
    );
  }
}

export default MessageList;
