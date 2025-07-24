import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      {/* Main Container
          -Title
          - Description
        SecondoryContainer
          - Cards*n
          */}
    </div>
  );
};

export default Browse;
