import React from 'react';

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      //   username: '',
      //   password2: '',
      error: {
        email: '',
        password: '',
      },
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    // let element = this.state[name];
    let error = this.state.error;
    switch (name) {
      case 'email':
        error.email = this.validateEmail(value) ? '' : 'Email is not valid';
        break;
      case 'password':
        error.password =
          value.length < 6 ? 'Pasword can not be less then 5 characters' : '';
        break;
      default:
        break;
    }
    this.setState({ error, [name]: value });
  };
  handleSubmit = () => {
    // preventDefault();
    alert(this.state.email + ' ' + this.state.password);
  };
  validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  render() {
    let { email, password } = this.state.error;
    return (
      <>
        <form onSubmit={this.handleSubmit} className='form2'>
          <h2>Register With Us</h2>
          <label>
            Username
            <input
              name='username'
              type='text'
              minLength={5}
              placeholder='Enter Username'
              value={this.state.password2}
              onChange={this.handleInput}
            />
          </label>
          <span className='hidden'>Username must be at least 5 characters</span>
          <label>
            Email
            <input
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleInput}
              placeholder='user@gmail.com'
              className={email && 'error'}
            />
          </label>
          <span>{email}</span>
          <label>
            Password
            <input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleInput}
              minLength={6}
              placeholder='Enter password'
              className={password && 'error'}
            />
          </label>
          <span>{password}</span>
          <label>
            Confirm Password
            <input
              //   name='password2'
              type='password'
              //   value={this.state.error.password}
              onChange={this.handleInput}
              placeholder='Enter password again'
            />
          </label>
          <span className='hidden'>Password2 is required </span>
          <input type='submit' value={'Submit'} />
        </form>
      </>
    );
  }
}

export default Validation;
