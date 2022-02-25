import React from "react";
import "../style/Card.css";

const Card = ({ name, population, region, capital, flag }) => {
  return (
    <li className="Card">
      <div className="Card__img__container">
        <img alt={name} src={flag} className="Card__img" />
      </div>
      <div className="Card__text__container">
        <h2 className="Card__text__title">{name}</h2>
        <p className="Card__text__info">
          <span>Population: </span>
          {population}
        </p>
        <p className="Card__text__info">
          <span>Region: </span>
          {region}
        </p>
        <p className="Card__text__info">
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </li>
  );
};

export { Card };
