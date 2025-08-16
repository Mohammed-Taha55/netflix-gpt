import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="px-2 sm:px-6">
      <h1 className="text-lg sm:text-3xl py-2 sm:py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

