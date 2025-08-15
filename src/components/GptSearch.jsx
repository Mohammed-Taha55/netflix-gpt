
import { BG_URL } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
         <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                  src={BG_URL}
                  alt="bgimage"
                  className="w-full h-full object-cover"
                />
              </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
