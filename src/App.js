import { Route, NavLink, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { routes } from "./routes";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";

const HomePage = lazy(() => import("./components/homePage/HomePage.js"));
const MoviesPage = lazy(() => import("./components/moviesPage/MoviesPage.js"));
const MovieDetailsPage = lazy(() =>
  import("./components/movieDetailsPage/MovieDetailsPage.js")
);

function App() {
  return (
    <div>
      <ul className="Searchbar">
        <li className="header--item">
          <NavLink to="/" className="header--item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="header--item">
            Movies
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<h1>...Loading</h1>}>
        <Switch>
          <Route exact path={routes.homePage} component={HomePage} />
          <Route exact path={routes.moviesPage} component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
