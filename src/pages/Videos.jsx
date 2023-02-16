import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    return axios
      .get(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => res.data.items);
  });
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>📛에러 발생📛</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 pt-10 pb-10">
          {videos.map((video) => (
            <VideoLi key={video.id} video={video}></VideoLi>
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
