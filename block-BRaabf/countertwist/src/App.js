import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 5,
      max: 15,
    };
  }
  handleIncrement = () => {
    let { step, max, counter } = this.state;
    this.setState({
      counter: counter + step > max ? counter : counter + step,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    let steps = [5, 10, 15];
    let limits = [15, 100, 200];
    return (
      <div className='app'>
        <h1>Counter With Twist APP</h1>
        <h2>{this.state.counter}</h2>
        <h4>Steps</h4>
        <div>
          {steps.map((step) => (
            <button
              onClick={() => {
                this.setState({ step: step });
              }}
              className={this.state.step === step ? 'active' : 'step'}
            >
              {step}
            </button>
          ))}
        </div>
        <div>
          <h4> Max limit to counter</h4>
          {limits.map((max) => (
            <button
              onClick={() => {
                this.setState({ max: max });
              }}
              className={this.state.max === max ? 'active' : 'max'}
            >
              {max}
            </button>
          ))}
        </div>
        <button className='btn' onClick={this.handleIncrement}>
          Increment
        </button>
        <button className='btn' onClick={this.handleDecrement}>
          Decrement
        </button>
        <button className='btn' onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
