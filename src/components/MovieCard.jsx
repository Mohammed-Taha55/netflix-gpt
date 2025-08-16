import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="flex-shrink-0 w-32 sm:w-40 md:w-48">
      <img
        alt="movie card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto rounded-lg hover:scale-105 transition"
      />
    </div>
  );
};

export default MovieCard;

