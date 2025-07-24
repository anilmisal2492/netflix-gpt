import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";



const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGVlYjBhOTEzZTU3MjgzNjU3NmFmNDk5NTMzZDBlNCIsIm5iZiI6MTc1MzMzNTkwMS40NTgsInN1YiI6IjY4ODFjODVkNjMwOTIyMmZlZTcyZGI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z2c4gh3iAi2hr5QOkOSKLm1EPl0J0m8MZoEeN8p0ZNk",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log("Now Playing Movies:", data?.results);
      dispatch(addPlayingMovies(data?.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
    // Call the function
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
