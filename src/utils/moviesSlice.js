import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
    popularMovie:null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    }
  },
});

export const {addPlayingMovies,addTrailerMovie,addPopularMovie}= moviesSlice.actions;
export default moviesSlice.reducer;