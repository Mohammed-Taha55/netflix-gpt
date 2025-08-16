import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="min-w-[120px] sm:min-w-[180px] md:min-w-[200px] pr-3 sm:pr-4">
      <img
        alt="movie card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto rounded-md"
      />
    </div>
  );
};

export default MovieCard;

