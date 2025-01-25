import React from "react";

const commentData = [
  {
    name: "Arun Kumar",
    text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
    replies: [
      {
        name: "Arun Kumar",
        text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
        replies: [],
      },
      {
        name: "Arun Kumar",
        text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
        replies: [],
      },
    ],
  },
  {
    name: "Arun Kumar",
    text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
    replies: [],
  },
  {
    name: "Arun Kumar",
    text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
    replies: [
      {
        name: "Arun Kumar",
        text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
        replies: [],
      },
      {
        name: "Arun Kumar",
        text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
        replies: [
          {
            name: "Arun Kumar",
            text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
            replies: [],
          },
          {
            name: "Arun Kumar",
            text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
            replies: [],
          },
          {
            name: "Arun Kumar",
            text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
            replies: [
              {
                name: "Arun Kumar",
                text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
                replies: [],
              },
              {
                name: "Arun Kumar",
                text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Arun Kumar",
        text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
        replies: [],
      },
    ],
  },
  {
    name: "Arun Kumar",
    text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
    replies: [],
  },
  {
    name: "Arun Kumar",
    text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
    replies: [],
  },
  {
    name: "Arun Kumar",
    text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
    replies: [],
  },
  {
    name: "Arun Kumar",
    text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
    replies: [
      {
        name: "Arun Kumar",
        text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
        replies: [],
      },
      {
        name: "Arun Kumar",
        text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
        replies: [],
      },
      {
        name: "Arun Kumar",
        text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
        replies: [
          {
            name: "Arun Kumar",
            text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
            replies: [],
          },
          {
            name: "Arun Kumar",
            text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
            replies: [],
          },
          {
            name: "Arun Kumar",
            text: "lorem lorem10 lorem lorem10lorem lorem10lorem lorem10lorem lorem10lorem lorem10",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm p-2 rounded-md my-3 bg-gray-100">
      <img
        className="w-12 h-12"
        src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-8">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
