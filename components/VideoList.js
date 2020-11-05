import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    console.log(video);
    return (
      <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
}
export default VideoList;
