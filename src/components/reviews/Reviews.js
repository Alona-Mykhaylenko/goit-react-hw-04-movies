import React, { Component } from "react";
import Axios from "axios";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5367fc2e0407ecbf927661328b6e11c7`
    );
    this.setState({ reviews: response.data.results });
  }

  render() {
    if (!this.state.reviews.length)
      return <p>We don't have any reviews for this movie</p>;
    return (
      <div>
        <ul>
          {this.state.reviews.map((review) => (
            <li>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Reviews;
