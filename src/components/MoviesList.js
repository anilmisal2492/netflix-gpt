import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  const poster = movies?.results;
  console.log("title", title);
  return (
    <div className="pr-9" >
      <p1 className=" text-white" >{title}</p1>
      <div className="flex overflow-x-scroll" >
        <div className="flex gap-2 p-3 ">
          {poster?.map((movie) => (
            <MoviesCard poster={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
