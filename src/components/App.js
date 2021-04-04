import React, { useState, useEffect } from "react";
import "../css/App.css";
import Game from "./Game";
import Games from "./Games";

function App() {
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState("");
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const startGame = () => {
    const gameName = createGameName();
  }

  const createGameName = () => {
    return "Game " + (games.length + 1);
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
      {isGameRunning &&
        <Game />
      }
      </div>
    </div>
  );
}

export default App;
