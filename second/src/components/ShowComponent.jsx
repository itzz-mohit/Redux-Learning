import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const ShowComponent = () => {
  const searchText = useSelector((state) => state.search.text);
  const [gitData, setGitData] = useState({});

  const handleGitHub = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchText}`
      );
      setGitData(response.data);
    } catch (error) {
      console.error("Error while calling the API", error);
    }
  };

  useEffect(() => {
    handleGitHub();
  }, [searchText]);

  const { avatar_url, name, location } = gitData;

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-2">Your Searched Data</h1>
      {avatar_url && (
        <img
          src={avatar_url}
          className="rounded-full w-20 mx-auto mb-4"
          alt="User Avatar"
        />
      )}
      {name && <h2 className="text-3xl font-bold mb-2">{name}</h2>}
      {location && <p className="text-lg text-gray-600 mb-4">{location}</p>}
    </div>
  );
};

export default ShowComponent;
