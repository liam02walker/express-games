import "./App.css";
import axios from "axios";
import YearForm from "./Components/YearForm";
import { useState } from "react";

export default function App() {
  const [games, setGames] = useState([]);

  // Function that gets our Data
  async function getGames(event) {
    event.preventDefault();

    const API = `http://localhost:8080/games?year=${event.target.year.value}`;
    const res = await axios.get(API);
    setGames(res.data);
  }
  return (
    <>
      <h1>A HELL OF A LOT OF GAMES</h1>
      <YearForm getGames={getGames} />

      {games.map((game) => {
        return (
          <div key={game.name}>
            <h2>{game.name}</h2>
            <h3>Year: {game.year}</h3>
          </div>
        );
      })}
    </>
  );
}
