import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setMovies(data.results); // Assuming the data contains a `results` array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []); // Empty dependency array to run only on mount

  const slideLeft = () => {
    let slider = document.getElementById("Slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("Slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full text-black absolute opacity-50 cursor-pointer hover:opacity-100 z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"Slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full text-black absolute opacity-50 cursor-pointer hover:opacity-100 z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
