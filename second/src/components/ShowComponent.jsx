import React from "react";
import { useSelector } from "react-redux";

const ShowComponent = () => {
  const searchText = useSelector((state) => state.search.text);
  return (
    <div className="text-center ">
      <h1 className="text-xl font-semibold mb-2">Your Searched Data</h1>
      <p className="text-lg">{searchText}</p>
    </div>
  );
};

export default ShowComponent;
