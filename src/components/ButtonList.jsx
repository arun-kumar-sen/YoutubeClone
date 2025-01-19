import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Live",
  "Songs",
  "Cricket",
  "Politics",
  "Cooking",
  "Romance",
  "PopMusic",
  "Podcasts",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list?.map((item, i) => (
        <Button key={i} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
