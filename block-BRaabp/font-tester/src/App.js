import React from 'react';
import Cards from './Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pixel: 32,
    };
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  handlepixel = (event) => {
    this.setState({
      pixel: event.target.value,
    });
  };
  render() {
    let inputText = this.state.text;
    let size = this.state.pixel;
    return (
      <div className='app'>
        <div className='header'>
          <input
            onChange={this.handleChange}
            type='text'
            placeholder='Type Somthing'
          />

          <span className='pixel'>{size} px</span>
          <input
            onChange={this.handlepixel}
            type='range'
            defaultValue={32}
            min='1'
            max='100'
            class='slider'
            id='myRange'
          />
        </div>
        <div className='main'>
          <Cards data={inputText} size={size} />
        </div>
      </div>
    );
  }
}

export default App;
