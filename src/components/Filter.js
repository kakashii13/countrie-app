import React from "react";
import "../style/Filter.css";

const Filter = ({ filter, setFilter }) => {
  const handleRegion = (event) => {
    if (event.target.value === "AllRegion") {
      setFilter("");
    } else {
      setFilter(event.target.value);
    }
  };
  return (
    <select className="Filter" onChange={(event) => handleRegion(event)}>
      <option hidden>Filter by Region</option>
      <option value="AllRegion">All Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export { Filter };
