import React from 'react';
import './movieListItem.css'

const MovieListItem = ({movie}) => {
    return (
      <div className='movie-list-item'>
        <img src={movie.image}/>
        <div className='details'>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>
        <hr/>
      </div>
    );
  }

export default MovieListItem;