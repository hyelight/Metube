import React from "react";
import TimeAgo from "./TimeAgo";

const VideoLi = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <p>{channelTitle}</p>
      <p>{publishedAt}</p>
      <p>{TimeAgo(new Date(publishedAt))}</p>
    </li>
  );
};

export default VideoLi;
