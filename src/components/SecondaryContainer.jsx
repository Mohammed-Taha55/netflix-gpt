import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)
  return (
    <div className="bg-black">
      <div className="-mt-52  pl-12 relative z-20"> 
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.TopRated} />
      <MovieList title={"Polular"} movies={movies.PopularMovies} />
      <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
