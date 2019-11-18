import React from "react";
import "../styles/video.css";
import IconButton from "@material-ui/core/IconButton";
import {
  ArrowBack,
  RemoveRedEye,
  ThumbUp,
  ThumbDown
} from "@material-ui/icons";

const VideoDetail = ({ video, resetVideo, statistics }) => {
  while (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="detail">
      <div className="head">
        <IconButton onClick={resetVideo}>
          <ArrowBack className="arrow" fontSize="inherit" />
        </IconButton>

        <h5 className="ui header">{video.snippet.title}</h5>
      </div>

      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <row>
          <h4 className="ui header data">{video.snippet.channelTitle}</h4>
          <div className="specifics">
            <div className="head arrow">
              <ThumbUp className="arrow" fontSize="inherit" />
              <h5 className="data">{statistics.likeCount}</h5>
            </div>

            <div className="head arrow detail">
              <ThumbDown className="arrow" fontSize="inherit" />
              <h5 className="data">{statistics.dislikeCount}</h5>
            </div>
          </div>
        </row>

        <p className="header">{video.snippet.description}</p>
      </div>
      <div className="head arrow">
        <RemoveRedEye className="arrow" fontSize="inherit" />
        <h5 className="data">{statistics.viewCount}</h5>
      </div>
    </div>
  );
};

export default VideoDetail;
