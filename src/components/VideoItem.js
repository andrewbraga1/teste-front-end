import React from "react";
import "../styles/video.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className=" video-item item">
      <row className="row">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </row>
    </div>
  );
};
export default VideoItem;
