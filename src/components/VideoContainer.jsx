import React, { useEffect, useState } from "react";
import { YT_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { videoCardsData } from "../utils/videoCardsSlice";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos?.videoCards);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API);
    const json = await data?.json();
    dispatch(videoCardsData(json?.items));
    // setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
