import { BG_URL } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_URL}
          alt="bgimage"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground Components */}
      <div className="w-full max-w-2xl px-4">
        <GptSearchBar />
      </div>
      <div className="w-full max-w-4xl px-4 mt-6">
        <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GptSearch
