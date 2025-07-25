
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const mainMovie = movies?.[0];

  // If movies haven't loaded yet, don't render anything (or show a loader)
  if (!mainMovie) {
    return <div>Loading main movie...</div>;
  }

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground moviesId={id} />
    </div>
  );
};

export default MainContainer;
