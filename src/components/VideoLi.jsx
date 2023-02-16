import React from "react";
import TimeAgo from "./TimeAgo";

const VideoLi = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="rounded-md w-full"
      />
      <p className="font-bold font-sans line-clamp-1">{title}</p>
      <p
        className="text-md opacity-75

"
      >
        {channelTitle}
      </p>
      <p className="opacity-75">{TimeAgo(new Date(publishedAt))}</p>
    </li>
  );
};

export default VideoLi;
