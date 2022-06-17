import React from 'react';
import menu from './data';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }
  handleAll = () => {
    this.setState({
      active: '',
    });
  };
  handleCategory = (y) => {
    this.setState({
      active: y,
    });
  };
  render() {
    let btn = menu.map((v) => v.category);
    let filterBtn = btn.filter((x, i, a) => a.indexOf(x) === i);
    let data;
    if (this.state.active) {
      data = menu.filter((d) => d.category === this.state.active);
    } else {
      data = menu;
    }
    return (
      <>
        <div className='menu-btn'>
          <button onClick={this.handleAll}>All</button>
          {filterBtn.map((y) => (
            <button key={y} onClick={() => this.handleCategory(y)}>
              {y}
            </button>
          ))}
        </div>
        <div className='container'>
          {data.map((b) => (
            <div key={b.id} className='flex iteam'>
              <div>
                <img src={b.img} alt={b.title} width={300} height={200} />
              </div>
              <div className='details'>
                <div className='flex'>
                  <h3>{b.title}</h3>
                  <h4>Price:- {b.price}</h4>
                </div>
                <h4>{b.category}</h4>
                <h5>{b.desc}</h5>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Menu;
