import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-evenly items-center px-2 m-4 shadow-md">
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACgCAMAAAAl6U6qAAAAVFBMVEX///8AAAD19fXv7+/o6OhDQ0NJSUkbGxsZGRm+vr4zMzNgYGDJyclzc3MhISGzs7OAgIBYWFiUlJSJiYksLCxqamrd3d07OzucnJxQUFAmJiaioqLwh+goAAABgUlEQVR4nO3b206DUBCFYZCC0FLlICr6/u+ppKlgMgM2vZhF/L8nWNlkn4Y9SQIAAAAAAAD88hBoM1xWNfljlPJl+HxdjVcXabBjtxKvj043KQ9evC462kWe2fGq6GBXJ3tqtNG5ftTm3IhONRusfOfoVLOjtco8RadaqIx80ZmWnneYr4wOtWB93yY61OzNmh8yy7OzQKuvzzoDaO9vMueDwj3AvEdHm7RuvO89OH4T6Z3T1TXhMOZhirbbvoIkWZg/hAMAAABwi+wQZztd1ZyKMOO5W49Yf0RfL8u1+6VEAcEvH0jES9PRCShTH2rNeOr1NZnhcwps6vXd+NLVjP8f97HyqX9f9fmhvr6or886A2jvb/LnA5GA/vlK/nyaqJ/vJ9r3IwAAAAA3kX7fpP0+TPx9nfj7RInygV9AkKkP7bP/Q2b4dvr/Q70/IDrTEv8/7mN9X/X+KPX+MvX1WWeBFu//8PpD5ftr5fuTp/7uXrm/eyLdHw8AAAAAAID/5QsQ+T/cRp0qSQAAAABJRU5ErkJggg=="
          alt="HamBurger Icon"
        />
        <a href={"/"}>
          <img
            className="h-24"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
            alt="Youtube Logo"
          />
        </a>
      </div>
      <div className="ml-96 w-3/4">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="bg-gray-100 border border-gray-400 py-2 px-5 rounded-r-full">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-10"
          src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
          alt="UserIcon"
        />
      </div>
    </div>
  );
};

export default Head;
