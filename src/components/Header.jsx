import { FavoriteList } from '.';

export const Header = ({ favorites }) => {
  return (
    <div>
      <FavoriteList favorites={favorites} />
    </div>
  );
}
