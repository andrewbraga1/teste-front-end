import React from "react";
import VideoItem from "./VideoItem.js";
//import "../styles/video.css";
const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map(video => {
    return (
      <div className="">
        <VideoItem
          key={video.id.videoId}
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};
export default VideoList;
