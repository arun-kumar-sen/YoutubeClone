import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YT_SEARCH, YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { emptyVideosData, videoCardsData } from "../utils/videoCardsSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  /**
   * Point 1 => searchQuery is a const but we are able to change it why ??
   *  because every time it is rendering and its a new variable
   */

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store?.search);
  /**
   * searchCache = {
   *    "iphone":["ihpne 11","iphone 13"]
   * }
   *
   *  searchQuery = iphone
   */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClick = async (searchItem) => {
    setShowSuggestions(false);
    dispatch(emptyVideosData());
    const data = await fetch(YT_SEARCH + searchItem);
    const json = await data.json();
    dispatch(videoCardsData(json.items));
  };

  useEffect(() => {
    /**
     * Make an API call after every key press
     * but if the difference between the 2 API calls is < 200 ms
     * decline the API call
     */
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => make API call after 200 ms
   *
   *
   * key - ip
   * - destroy the component ( i.e call useEffect return method and clears the timer)
   * - re-render the component
   * - useEffect()
   * - start timer => make API call after 200ms but but but its again a new timer
   *
   * setTimeOut(200) - make an API call
   *
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
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
        <div>
          <input
            className="w-1/2 border border-gray-400 px-9 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="bg-gray-100 border border-gray-400 py-2 px-5 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white w-[34rem] border border-gray-100 rounded-lg shadow-lg ">
            <ul>
              {suggestions?.map((item) => (
                <li
                  key={item}
                  className="py-2 px-5 cursor-pointer shadow-sm rounded-md hover:bg-gray-100"
                  onClick={() => handleSearchClick(item)}
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
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
