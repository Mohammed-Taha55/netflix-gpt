import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // ✅ Fetch all movie categories when Browse mounts
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Navbar/Header */}
      <Header />

      {/* GPT Search or Movie Sections */}
      {showGptSearch ? (
        <div className="pt-24 px-4 sm:px-8">
          <GptSearch />
        </div>
      ) : (
        <>
          {/* Hero Banner / Main Movie */}
          <MainContainer />

          {/* Movie Rows (Now Playing, Popular, Top Rated, etc.) */}
          <div className="relative z-20 px-4 sm:px-8 -mt-12 sm:-mt-20">
            <SecondaryContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;
