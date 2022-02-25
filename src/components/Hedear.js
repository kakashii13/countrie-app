import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__title">Where in the world?</h1>
      <p className="Header__dark-mode">Dark Mode</p>
    </header>
  );
};

export { Header };
