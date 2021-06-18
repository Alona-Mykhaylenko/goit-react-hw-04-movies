import React, { Component } from "react";
import Axios from "axios";
import MovieList from "../movieList.js/MovieList";

class MoviesPage extends Component {
  state = {
    searchWord: "",
    foundMovies: [],
  };

  handleChange = (event) => {
    this.setState({ searchWord: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const searchedMovies = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=5367fc2e0407ecbf927661328b6e11c7&query=${this.state.searchWord}&language=en-US&page=1&include_adult=false`
    );

    this.setState({ foundMovies: searchedMovies.data.results });
    console.log(searchedMovies.data.results);
  };

  render() {
    return (
      <div>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.searchWord}
            onChange={this.handleChange}
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
        <div>
          <MovieList
            movies={this.state.foundMovies}
            location={this.props.location}
          />
        </div>
      </div>
    );
  }
}

export default MoviesPage;
