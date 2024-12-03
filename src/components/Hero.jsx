import React, { useEffect, useState } from "react";
import requests from "../requests";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    fetch(requests.requestUpcoming)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setMovies(data.results); // Assuming the data contains a `results` array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []); // Empty dependency array to run only on mount

  // console.log(movie); // You should see the data here now
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[680px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[680px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[50%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl md:text-wrap">{movie?.title}</h1>
          <div className="my-4">
            <button className="border btn btn-error py-2 px-5">play</button>
            <button className="border btn btn-outline btn-neutral py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300">
            {truncateString(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
