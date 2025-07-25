import {useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerMovie } from "../utils/moviesSlice";

const useTrailerMovie = (id) => {
  const dispatch = useDispatch();
  const fetchTrailerMovie = async () => {
    const API_URL = `https://api.themoviedb.org/3/movie/${id.moviesId}/videos`;
    try {
      const response = await fetch(API_URL, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const Trailer = data?.results.filter((video) => video.type === "Trailer");

      dispatch(addTrailerMovie(Trailer[2]));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };
  
  useEffect(() => {
    fetchTrailerMovie();
  }, []);
};

export default useTrailerMovie;
