import React from "react";
import "../styles/video.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div className=" video-item item">
      <row className="row">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div className="content">
          <h3 className="header">{video.snippet.title}</h3>
          <div className="header">{video.snippet.channelTitle}</div>
          <p className="header">{video.snippet.description}</p>
        </div>
        <button onClick={() => handleVideoSelect(video)} >Detalhes do vídeo</button>
      </row>
    </div>
  );
};
export default VideoItem;
