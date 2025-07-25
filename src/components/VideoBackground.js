import { useSelector } from "react-redux";
import useTrailerMovie from "../hooks/useTrailerMovie";

const VideoBackground = (id) => {
  const backGroundMovie = useSelector((store) => store?.movies?.trailerMovie);
  useTrailerMovie(id);
  return (
    <div>
      <iframe
        className="w-full h-screen"
        src={`https://www.youtube.com/embed/${backGroundMovie?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${backGroundMovie?.key}&modestbranding=1&iv_load_policy=3&rel=0&fs=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
