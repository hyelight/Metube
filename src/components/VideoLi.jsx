import React from "react";
import { useNavigate } from "react-router-dom";
import TimeAgo from "./TimeAgo";

const VideoLi = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`videos/watch/${video.id}`, { state: { video } });
      }}
    >
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
