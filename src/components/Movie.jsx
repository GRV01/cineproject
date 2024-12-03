import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const Movie = ({ item }) => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <div
      key={item.id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2"
    >
      <img
        className="object-cover rounded-box w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <div>
          {bookmark ? (
            <FaBookmark className="absolute bottom-4 right-4 text-gray-400 " />
          ) : (
            <FaRegBookmark className="absolute bottom-4 right-4 text-gray-400" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
