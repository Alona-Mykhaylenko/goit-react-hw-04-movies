import React, { Component } from "react";
import Axios from "axios";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5367fc2e0407ecbf927661328b6e11c7`
    );
    this.setState({ cast: response.data.cast });
  }

  render() {
    return (
      <div>
        <ul className="Cast">
          {this.state.cast.map((actor) => (
            <li className="CastPhotoBox">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                  alt=""
                />

                <h4>{actor.name}</h4>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
