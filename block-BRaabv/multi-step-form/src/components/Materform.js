import React from 'react';

import One from './One';
import Two from './Two';
import Three from './Three';

class Materform extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
    };
  }
  handleNext = () => {
    this.setState({
      step: this.state.step < 3 ? this.state.step + 1 : this.state.step,
    });
  };
  handlePrev = () => {
    this.setState({
      step: this.state.step > 1 ? this.state.step - 1 : this.state.step,
    });
  };
  render() {
    return (
      <>
        <div className='header'>
          <div>
            <span className={this.state.step === 1 ? 'active step' : 'step '}>
              {this.state.step === 1 ? 1 : '✔'}
            </span>
            <span>Sign UP</span>
          </div>
          <div>
            <span className={this.state.step === 2 ? 'active step' : 'step '}>
              {this.state.step <= 2 ? 2 : '✔'}
            </span>
            <span>Message</span>
          </div>
          <div>
            <span className={this.state.step === 3 ? 'active step' : 'step '}>
              3
            </span>
            <span>Checkbox</span>
          </div>
          <hr />
        </div>
        <div>
          <PageRender step={this.state.step} />
        </div>
        <div className='center'>
          <button
            className={this.state.step === 1 ? 'hidden' : 'back'}
            onClick={this.handlePrev}
          >
            <strong>Back</strong>
          </button>
          <button
            className={this.state.step === 3 ? 'hidden' : ''}
            onClick={this.handleNext}
          >
            Next Step
          </button>
          <button
            value='submit'
            className={this.state.step === 3 ? 'submit' : 'hidden'}
            onClick={this.handleClick}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}

const PageRender = (props) => {
  switch (props.step) {
    case 1:
      return <One />;
    case 2:
      return <Two />;
    case 3:
      return <Three />;
    default:
      break;
  }
};

export default Materform;
