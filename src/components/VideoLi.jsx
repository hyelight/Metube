import React from "react";

const VideoLi = ({ video }) => {
  return <div>{video.snippet.description}</div>;
};

export default VideoLi;
