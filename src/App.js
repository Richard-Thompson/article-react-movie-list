import React, { Component } from 'react';
import './App.css';
import MovieListHeader from './components/movie-list-header/MovieListHeader'
import MovieList from './components/movie-list/MovieList'
import AddMovieForm from './components/form/AddMovieForm'

class App extends Component {
  render() {
    return (
      <div className="app">
        <MovieListHeader/>
        <MovieList />
        <AddMovieForm />
      </div>
    );
  }
}
export default App;