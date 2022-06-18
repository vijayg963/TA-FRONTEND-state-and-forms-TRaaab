import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <>
        <div>
          <form>
            <label htmlFor='text'>Text Input</label>
            <input id='text' type='text' onChange={this.handleChange} />
            <label htmlFor='date'>Date Input</label>
            <input id='email' type='date' onChange={this.handleChange} />
            <label htmlFor='file'>File Input</label>
            <input id='file' type='file' />
            <label>
              Read-Only Input
              <input
                type='text'
                placeholder='This can only be copied'
                readOnly={true}
              />
            </label>
            <label htmlFor='disable'>Disabled Input</label>
            <input id='disable' type='text' disabled={true} />
            <label htmlFor='textArea'>Textarea</label>
            <textarea htmlFor='textArea' rows='5'></textarea>
            <label htmlFor='disableArea'>Textarea Disabled</label>
            <textarea
              htmlFor='disableArea'
              disabled={true}
              rows='5'
            ></textarea>{' '}
          </form>
        </div>
      </>
    );
  }
}

export default Input;
