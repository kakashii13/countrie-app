import React from "react";

const Pagination = ({ totalCards, cardsPerPage }) => {
  const paginateNumber = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    paginateNumber.push(i);
  }

  return (
    <li>
      {paginateNumber.map((number) => {
        <a key={number}>{number}</a>;
      })}
    </li>
  );
};

export { Pagination };
