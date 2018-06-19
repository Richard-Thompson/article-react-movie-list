import React, { Component } from 'react';
import './addMovieForm.css';

class AddMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description:'',
      image:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className='movie-form'>
          <input 
            name='title' 
            value={this.state.title} 
            onChange={this.handleChange}
            placeholder='title..'
            />
          <input 
            name='description' 
            value={this.state.description} 
            onChange={this.handleChange}
            placeholder='description..'
            />
          <input 
            name='image' 
            value={this.state.image} 
            onChange={this.handleChange}
            placeholder='image..'
            />
          <button type='submit'>Add Movie</button>
      </form>
    );
  }
  handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  onSubmit (event) {
    //This is where the firebase code will
    // go to add data to the database.
  }
}
export default AddMovieForm;