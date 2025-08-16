import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="py-4">
      <h1 className="text-lg sm:text-2xl md:text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-auto space-x-3 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

