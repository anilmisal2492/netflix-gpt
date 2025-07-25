import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = useCallback(async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

    try {
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      dispatch(addPlayingMovies(data?.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
