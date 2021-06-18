import React, { Component } from "react";
import Axios from "axios";
import { Link, Route } from "react-router-dom";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    title: "",
    name: "",
    release_date: "",
    genres: "",
    overview: "",
    poster_path: "",
    id: "",
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=5367fc2e0407ecbf927661328b6e11c7&language=en-US`
    );
    this.setState({ ...response.data });
    console.log(this.state);
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push("/");
  };

  render() {
    if (!this.state.title) return <p>...Loading</p>;

    return (
      <div className="MovieCard App">
        <div className="MovieCardImage">
          <button type="button" className="Button" onClick={this.handleGoBack}>
            Go back
          </button>
          <img
            className="MovieImage"
            src={`https://image.tmdb.org/t/p/w200/${this.state.poster_path}`}
            alt={this.state.title}
          />
        </div>
        <div className="MovieCardInfo">
          <h1>
            {this.state.title}
            {this.state.name}({this.state.release_date})
          </h1>
          <h2>Overview</h2>
          <p>{this.state.overview}</p>
          <h3>Genres</h3>
          <div className="Genres">
            {this.state.genres.map((genre) => (
              <p className="GenresItem">{genre.name}</p>
            ))}
          </div>

          <div className="AdditionalInfoBox">
            <h4>Additional information</h4>
            <ul className="AdditionalInfo">
              <li className="GenresItem">
                <Link to={`/movies/${this.state.id}/cast`}>
                  <h2 className="AdditionalInfoColor">Cast</h2>
                </Link>
              </li>
              <li className="GenresItem">
                <Link to={`/movies/${this.state.id}/reviews`}>
                  <h2 className="AdditionalInfoColor">Reviews</h2>
                </Link>
              </li>
            </ul>
          </div>

          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
