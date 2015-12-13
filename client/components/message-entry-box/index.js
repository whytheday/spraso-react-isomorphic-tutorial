import React, {Component} from 'react';
import {} from './style.less';

class MessageEntryBox extends Component {
  render() {
    return (
      <div className='message-entry-box'>
        <textarea
          name='message'
          placeholder='Enter a message'
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}/>
      </div>
    );
  }

  handleChange(ev) {
    this.props.onChange(ev.target.value);
  }

  handleKeyPress(ev) {
    if (ev.which === 13) {
      const trimmedMessage = this.props.value.trim();

      if (trimmedMessage) {
        this.props.onSubmit({
          text: trimmedMessage,
          userId: this.props.userId
        });
      }

      ev.preventDefault();
    }
  }
}

export default MessageEntryBox;
