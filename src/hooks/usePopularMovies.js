import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/moviesSlice";

const usePoularMovies = () => {
    const dispatch = useDispatch();
  const url = " https://api.themoviedb.org/3/movie/popular";
  const getPopularMovies = async () => {
    try {
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovie(json));
      console.log("json",json)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePoularMovies;
