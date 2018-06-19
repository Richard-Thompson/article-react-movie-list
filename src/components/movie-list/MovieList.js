import React, { Component } from 'react';
import './movieList.css';
import MovieListItem from '../movie-list-item/MovieListItem';
import firebase from '../../firebase.js';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[]
    };
  }
  componentDidMount () {
    const itemsRef = firebase.database().ref('movies');

    itemsRef.on('value', (snapshot) => {

      const movies = Object.values(snapshot.val())

      this.setState({
        movies: movies
      });
    });
  }
  render() {
    return (
      <div className='movie-list'>
        {this.state.movies.map((movie, i) => {
          return(
            <MovieListItem movie={movie} key={i}/>
          )
        })}
    </div>
    );
  }
}
export default MovieList;