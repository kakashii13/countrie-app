import React, { useEffect, useState } from "react";
import { Header } from "./components/Hedear";
import { Main } from "./container/Main";
import "./style/App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Main countries={countries} />
    </div>
  );
}

export default App;
