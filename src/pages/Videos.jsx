import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoLi from "../components/VideoLi";

const Videos = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return fetch(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>📛에러 발생📛</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoLi key={video.id} video={video}></VideoLi>
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
