import React, { useState, useEffect } from "react";
import "../css/App.css";
import Game from "./Game";
import Games from "./Games";

function App() {
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState("");
  const [isGameRunning, setIsGameRunning] = useState(false);

  return (
    <div className="app">
      <header className="title">
        <h1>Flashcard Fury</h1>
        <h3>Put your trivial knowledge to the test</h3>
        <p>A trivia game made with the help of jService</p>
      </header>
      {games.length !== 0 &&
        <Games />
      }
      {isGameRunning &&
        <Game />
      }
    </div>
  );
}

export default App;
