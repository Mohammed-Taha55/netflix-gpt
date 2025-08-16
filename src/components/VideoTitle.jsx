const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[40%] sm:pt-[25%] md:pt-[15%] px-4 sm:px-12 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
        {title}
      </h1>

      <p className="py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-2/3 md:w-1/3">
        {overview}
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        <button className="bg-white text-black py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-12 text-sm sm:text-base md:text-xl rounded-lg hover:bg-opacity-75 transition">
          ➤ Play
        </button>

        <button className="bg-gray-500 text-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-12 text-sm sm:text-base md:text-xl rounded-lg bg-opacity-70 hover:bg-opacity-80 transition">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;


