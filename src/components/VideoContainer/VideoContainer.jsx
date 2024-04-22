import { useEffect } from "react";
import "./videoContainer.css";
import { API_KEY, API_URL } from "../../utils/constant";
import VideoCard from "../VideoCard/VideoCard";
import { updateData } from "../../store/videoDataSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoContainer = () => {
  const videosData = useSelector((store) => store.videosData.videosData);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(API_URL + API_KEY)
      .then((data) => data.json())
      .then((videos) => dispatch(updateData(videos.items)));
  }, []);

  console.log(videosData[0]);
  return (
    <div className="video-container">
      {videosData.map((video) => (
        <VideoCard key={video.id} cardData={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
