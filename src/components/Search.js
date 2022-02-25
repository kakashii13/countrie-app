import React, { useState } from "react";
import "../style/Search.css";

const Search = ({ searchValue, setSearchValue }) => {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="Search">
      <img
        className="Search__icon"
        src="https://icongr.am/fontawesome/search.svg?size=13&color=cfcfcf"
      />
      <input
        type="text"
        className="Search__input"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export { Search };
