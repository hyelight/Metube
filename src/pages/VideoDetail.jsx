import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section>
      <h1 className="hidden">각각의 해당 영상</h1>
      <article>
        <iframe
          id="player"
          title="해당 영상"
          type="text/html"
          width="100%"
          height="650"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder="0"
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={video.id}></RelatedVideos>
      </section>
    </section>
  );
};

export default VideoDetail;
