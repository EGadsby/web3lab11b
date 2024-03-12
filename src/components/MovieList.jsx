import movies from '../mocks/movie-data.json';
import { SingleMovie } from '.';
import '../css/MovieList.css';

export const MovieList = ({ favorites, setFavorites }) => {
  function renderMovies() {
    return movies.map((movie) => {
      return (
        <SingleMovie key={movie.id} movie={movie} favorites={favorites} setFavorites={setFavorites} />
      );
    });
  }

  return (
    <div>
      <h1>Movie List</h1>
      <ul className="flex-list">
        {renderMovies()}
      </ul>
    </div>
  );
}
