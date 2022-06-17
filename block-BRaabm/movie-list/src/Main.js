import React from 'react';
import data from './data';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }
  handleMore = (m) => {
    this.setState({
      active: m,
    });
  };
  handlehide = () => {
    this.setState({
      active: '',
    });
  };
  render() {
    let value = this.state.active;
    let image = value.Images;
    console.log(image);
    return (
      <>
        <div className='movies-box'>
          {data.map((m, key) => (
            <div className='single-movie parent' key={key}>
              <img src={m.Images} alt={m.Title} />
              <h4> {m.Title}</h4>
              <h5>{m.Released === 'N/A' ? 'Coming soon' : m.Released}</h5>
              <div className='hidden'>
                <button onClick={() => this.handleMore(m)}>More Info</button>
              </div>
            </div>
          ))}

          <div className={this.state.active ? 'modal' : 'hidden'}>
            <div className='flex'>
              <h4>{value.Title}</h4>
              <span onClick={this.handlehide}>❌</span>
            </div>
            <h5>{value.Director === 'N/A' ? 'No Info' : value.Director}</h5>
            <p>
              <strong>Released- </strong> {value.Released}
            </p>
            <p>
              <strong>Actors- </strong> {value.Actors}
            </p>
            <p>
              <strong> Awards- </strong> {value.Awards}
            </p>
            <p>
              <strong>Country- </strong> {value.Country}
            </p>
            <p>
              <strong>Director- </strong> {value.Director}
            </p>
            <p>
              <strong> Genre- </strong> {value.Genre}
            </p>
            <p>
              <strong>Language- </strong> {value.Language}
            </p>
            <p>
              <strong>Metascore- </strong> {value.Metascore}
            </p>
            <p>
              <strong> Plot- </strong> {value.Plot}
            </p>
            <p>
              <strong>Poster- </strong> {value.Poster}
            </p>
            <p>
              <strong> Rated- </strong> {value.Rated}
            </p>
            <p>
              <strong>Response- </strong> {value.Response}
            </p>
            <p>
              <strong>Runtime- </strong> {value.Runtime}
            </p>
            <p>
              <strong> Type- </strong> {value.Type}
            </p>
            <p>
              <strong> Year- </strong> {value.Year}
            </p>
            <p>
              <strong>ImdbId- </strong> {value.imdbID}
            </p>
            <p>
              <strong>ImdbRating- </strong> {value.imdbRating}
            </p>
            <p>
              <strong>ImdbVotes- </strong> {value.imdbVotes}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
