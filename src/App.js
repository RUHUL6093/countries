import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="App">
      <h1>total country:{countries.length}</h1>
      <ul>
        {" "}
        {countries.map((country) => (
          <li>{country.name}.</li>
        ))}
      </ul>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
