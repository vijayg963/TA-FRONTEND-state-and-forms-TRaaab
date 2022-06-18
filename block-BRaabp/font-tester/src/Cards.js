import React from 'react';
import data from './data';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }
  render() {
    return (
      <>
        {data.map((font) => (
          <div key={font.name} className='card'>
            <h2 style={{ fontFamily: font.name }}>{font.name}</h2>
            <hr />
            <h2
              style={{
                fontSize: this.props.size + 'px',
                fontFamily: font.name,
              }}
            >
              {this.props.data
                ? this.props.data
                : 'Learn React On the other hand'}
            </h2>
          </div>
        ))}
      </>
    );
  }
}

export default Cards;
