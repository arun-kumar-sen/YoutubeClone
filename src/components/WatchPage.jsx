import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const videoKey = searchParams.get("v");

  return (
    <div className="w-full">
      <div className="flex px-5 w-full">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <h1 className="font-bold px-3">Live Chat</h1>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
