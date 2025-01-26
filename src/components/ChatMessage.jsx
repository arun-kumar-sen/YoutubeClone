import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md p-2 ">
      <img
        className="w-8 h-8"
        src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
