import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchText } from "../features/searchSlice";
import ShowComponent from "./ShowComponent";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    console.log(searchText);
    dispatch(getSearchText(searchText));
  };
  return (
    <div>
      <div>
        
        <input
          className="border border-black p-3 rounded-md"
          placeholder="Enter the text"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="m-5 bg-rose-500 p-3 rounded-md" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div>
        <ShowComponent />
      </div>
    </div>
  );
};

export default SearchComponent;
