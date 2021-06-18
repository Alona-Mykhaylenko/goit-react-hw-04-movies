import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MovieList from "../movieList.js/MovieList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=5367fc2e0407ecbf927661328b6e11c7"
    );

    this.setState({ movies: response.data.results });
    console.log(response.data.results);
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>Trending today</h2>

        <MovieList movies={movies} location={this.props.location} />
      </div>
    );
  }
}

export default withRouter(HomePage);
