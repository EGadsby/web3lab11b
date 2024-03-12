import '../css/SingleMovie.css';

export const SingleMovie = ({ movie, favorites, setFavorites }) => {

  return (
    <li className="">
      <figure><img src={`https://image.tmdb.org/t/p/w300/${movie.poster}`} alt={movie.title} /></figure>
      {movie.title}
      <div className="add-to-fav">
        <button
          onClick={() => {
            let fav = [...favorites]; // creates an array with the values of favorites
            if (!fav.some(f => f.id === movie.id)) {
              fav.push(movie);
              setFavorites(fav);
            }
          }}
        >
          ❤︎
        </button>
      </div>
    </li>
  );
}
