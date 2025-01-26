import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat?.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 250);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div>
        <div className="w-full h-[600px] overflow-y-scroll p-4 ml-2 border border-black bg-slate-50 rounded-lg flex flex-col-reverse">
          {messages?.map((chat, i) => (
            <ChatMessage key={i} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: generateRandomName(),
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="border border-black w-full p-2 ml-2 mt-2 "
      >
        <input
          className="w-80 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
