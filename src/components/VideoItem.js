import React from "react";
import "../styles/video.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div className="video-item item">
      <div className="mb">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div className="content">
          <div>
            <p className="header mb">{video.snippet.title}</p>
          </div>
          <div className="header">{video.snippet.channelTitle}</div>
        </div>
        <div className="desc">
          <h5 className="header">{video.snippet.description}</h5>
          <button onClick={() => handleVideoSelect(video)}>
            Detalhes do vídeo
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
