import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSideBarOpen = useSelector((store) => store?.app?.isSideBarOpen);
  return (
    <>
      {isSideBarOpen && (
        <div className="w-48 shadow-md px-2 m-4">
          <ul className="pt-5">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
          </ul>
          <h1 className="pt-5 font-bold">Subscritions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="pt-5 font-bold">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
