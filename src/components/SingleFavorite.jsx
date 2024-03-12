export const SingleFavorite = ({ movie }) => {

  return (
    <li>
      <figure><img src={`https://image.tmdb.org/t/p/w92/${movie.poster}`} alt={movie.title} /></figure>
    </li>
  );
}
