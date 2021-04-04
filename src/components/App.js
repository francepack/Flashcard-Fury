import React, { useState, useEffect } from "react";
import "../css/App.css";
import Game from "./Game";
import Games from "./Games";

function App() {
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const startGame = async () => {
    setIsLoading(true);
    const gameName = createGameName();
    const clues = await fetchClues();
    const gameData = {
      name: gameName,
      questions: clues
    };
    setIsLoading(false);
    setCurrentGame(gameName);
  }

  const createGameName = () => {
    return "Game " + (games.length + 1);
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
