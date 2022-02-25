import React, { useState } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { Filter } from "../components/Filter";
import { Pagination } from "../components/Pagination";
import "../style/Main.css";

const Main = ({ countries }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);

  const indexOfLastCard = cardsPerPage * currentPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = countries.slice(indexOfFirstCard, indexOfLastCard);

  let searchedCountries = [];

  if (searchValue.length < 1) {
    searchedCountries = currentCards;
  } else {
    searchedCountries = currentCards.filter((countrie) => {
      const countrieLower = countrie.name.common.toLowerCase();
      const searchLower = searchValue.toLowerCase();

      return countrieLower.includes(searchLower);
    });
  }

  if (filter !== "") {
    searchedCountries = searchedCountries.filter((countrie) => {
      return countrie.region === filter;
    });
  }

  return (
    <main className="Main">
      <section className="Nav">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Filter filter={filter} setFilter={setFilter} />
      </section>
      <ul className="Card__container">
        {searchedCountries.map((coun) => (
          <Card
            key={coun.name.common}
            name={coun.name.common}
            population={coun.population}
            capital={coun.capital}
            region={coun.region}
            flag={coun.flags.png}
          />
        ))}
      </ul>
      <ul>
        <Pagination totalCards={countries.length} cardsPerPage={cardsPerPage} />
      </ul>
    </main>
  );
};

export { Main };
