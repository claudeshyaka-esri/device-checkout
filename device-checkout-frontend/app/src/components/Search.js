import React from "react";

const Search = () => {
  return (
    <div className="ui search">
      <div className="ui icon input" style={{ width: "75%" }}>
        <input
          className="prompt"
          type="text"
          placeholder="Search for device..."
        />
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>
  );
};

export default Search;
