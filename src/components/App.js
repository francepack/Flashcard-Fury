import React, { useState, useEffect } from "react";
import '../css/App.css';

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
    </div>
  );
}

export default App;
