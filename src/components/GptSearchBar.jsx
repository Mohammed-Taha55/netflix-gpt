import { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS, BG_URL } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // 🔍 Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // 🎬 Handle GPT + TMDB Search
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". Only give me names of 6 movies, comma separated like this: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, Krish";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies =
      gptResults.choices?.[0]?.message?.content.split(",") || [];

    // Fetch all TMDB results in parallel
    const promiseArray = gptMovies.map((movie) =>
      searchMovieTMDB(movie.trim())
    );
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen px-4"
      style={{
        backgroundImage: `url(${BG_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        className="flex flex-col sm:flex-row w-full max-w-lg sm:max-w-2xl bg-black bg-opacity-70 rounded-lg shadow-lg overflow-hidden"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Input */}
        <input
          ref={searchText}
          type="text"
          className="flex-1 px-4 py-3 text-sm sm:text-base text-black focus:outline-none"
          placeholder={lang[langKey].GptSearchPlaceHolder}
        />
        {/* Button */}
        <button
          className="bg-red-700 hover:bg-red-800 text-white px-4 sm:px-6 py-3 sm:py-2 text-sm sm:text-base transition"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

