import { SingleFavorite } from ".";

export const FavoriteList = ({ favorites }) => {
  function renderFavorites() {
    return favorites.map((movie) => {
      return (
        <SingleFavorite key={movie.id} movie={movie} />
      );
    });
  }

  return (
    <div>
      <h1>Favorite List</h1>
      <ul className="flex-list">
        {renderFavorites()}
      </ul>
    </div>
  );
}
