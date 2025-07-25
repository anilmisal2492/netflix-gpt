import React from "react";
import usePoularMovies from "../hooks/usePopularMovies";
import MoviesList from "./MoviesList";

import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  usePoularMovies();
  const movies = useSelector((store) => store?.movies?.popularMovie);
  // console.log("Title movies", movies?.results[0].title);
  return (
    <div className=" bg-black">
      <div className=" relative z-30 -m-52 ">
        <MoviesList title={movies?.results[0].title} movies={movies} />
        <MoviesList title={movies?.results[0].title} movies={movies} />
        <MoviesList title={movies?.results[0].title} movies={movies} />
        <MoviesList title={movies?.results[0].title} movies={movies} />
        <MoviesList title={movies?.results[0].title} movies={movies} />
        <MoviesList title={movies?.results[0].title} movies={movies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
