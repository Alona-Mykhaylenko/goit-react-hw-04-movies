import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MovieList = ({ movies, location }) => {
  return (
    <ul className="ImageGallery">
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id} className="ImageGalleryItem">
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              className="ImageGalleryItem-image"
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt={title}
            />
            <h2>{title}</h2>
            <h2>{name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};
