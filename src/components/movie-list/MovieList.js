import React, { Component } from 'react';
import './movieList.css'
import MovieListItem from '../movie-list-item/MovieListItem';

class MovieList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dummyMovies: [{
        title: 'Some movie',
        description: 'Some movie description',
        image: 'https://picsum.photos/300/200/?random'
      }, {
        title: 'Some movie',
        description: 'Some movie description',
        image: 'https://picsum.photos/300/200/?random'
      }, {
        title: 'Some movie',
        description: 'Some movie description',
        image: 'https://picsum.photos/300/200/?random'
      }, {
        title: 'Some movie',
        description: 'Some movie description',
        image: 'https://picsum.photos/300/200/?random'
      }, {
        title: 'Some movie',
        description: 'Some movie description',
        image: 'https://picsum.photos/300/200/?random'
      }]
    }
  }
  render() {
    return (
      <div className='movie-list'>
        {this.state.dummyMovies.map((movie, i) => {
          return(
              <MovieListItem movie={movie} key={i}/>
          )
        })}
    </div>
    );
  }
}
export default MovieList;