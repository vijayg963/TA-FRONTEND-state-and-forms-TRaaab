import React from 'react';
import questions from './data';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: '',
    };
  }
  handleClick = (q) => {
    this.setState({
      activeQuestion: q,
    });
  };

  render() {
    return (
      <>
        <h1>FAQ</h1>
        <div>
          {questions.map((q) => (
            <ul>
              <li className='question'>
                <h4 onClick={() => this.handleClick(q)}>Question: {q.Q}</h4>
                <h5 className={this.state.activeQuestion === q ? 'active' : ''}>
                  Answer: {q.A}
                </h5>
              </li>
            </ul>
          ))}
        </div>
      </>
    );
  }
}

export default Question;
