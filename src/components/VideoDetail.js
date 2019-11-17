import React from "react";
import "../styles/video.css";

const VideoDetail = ({ video, resetVideo }) => {
  while (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="head">
        <button onClick={resetVideo}>back</button>
        <h4 className="ui header">{video.snippet.title}</h4>
      </div>

      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="header">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
