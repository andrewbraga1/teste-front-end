import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <li  key={video.id.videoId}><VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
       </li>
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;