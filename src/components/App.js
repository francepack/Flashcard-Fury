import React, { useState, useEffect } from "react";
import "../css/App.css";
import Game from "./Game";
import Games from "./Games";
import { formatClues } from "../utils/formatClues";

function App() {
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const startGame = async () => {
    setIsLoading(true);
    const gameName = "Game " + (games.length + 1);
    const clues = await fetchClues();
    const gameData = {
      id: "G" + (games.length + 1),
      name: gameName,
      questions: formatClues(clues)
    };
    setIsLoading(false);
    setCurrentGame(gameName);
  }

  const fetchClues = async () => {
    let response = await fetch("https://jservice.io/api/random?count=30");
    response = await response.json();
    return response;
  }

  return (
    <div className="app">
      <header className="title">
        <h1>Flashcard Fury</h1>
        <h3>Put your trivial knowledge to the test</h3>
        <p>A trivia game made with the help of jService</p>
        <button onClick={startGame}>Start New Game!</button>
      </header>
      <div className="games-box">
      {games.length !== 0 &&
        <Games />
      }
      </div>
      <div className="game-box">
      {isLoading &&
        <p>Gathering game data...</p>
      }
      {currentGame &&
        <Game />
      }
      </div>
    </div>
  );
}

export default App;
