import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'basketball',
    };
  }
  render() {
    let labels = ['basketball', 'cricket', 'laptop', 'phone', 'pubg', 'tiger'];
    return (
      <>
        <div>
          {labels.map((label) => (
            <button
              className={this.state.active === label ? 'active' : ''}
              onClick={() => {
                this.setState({
                  active: label,
                });
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <img src={`./images/${this.state.active}.jpg`} alt='basketball' />
      </>
    );
  }
}

export default Button;
