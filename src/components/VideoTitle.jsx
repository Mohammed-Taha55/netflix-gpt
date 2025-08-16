const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[40%] sm:pt-[20%] px-4 sm:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl sm:text-5xl font-bold">{title}</h1>
      <p className="py-4 sm:py-6 text-sm sm:text-lg w-full sm:w-1/3">{overview}</p>
      
      <div className="mb-8 sm:mb-16"> {/* 👈 extra margin at bottom */}
        <button className="bg-white text-black p-2 sm:p-4 px-6 sm:px-12 text-sm sm:text-xl rounded-lg hover:bg-opacity-75">
          ➤ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 sm:p-4 px-6 sm:px-12 text-sm sm:text-xl rounded-lg bg-opacity-70">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;






