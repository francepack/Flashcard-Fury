import React, { useState, useReducer } from "react";
import "../css/App.css";
import Game from "./Game";
import Games from "./Games";
import { formatClues } from "../utils/formatClues";

function App() {
  const [games, setGames] = useState([]);
  const [currentGameId, setCurrentGameId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const startGame = async () => {
    setIsLoading(true)
    const gameName = "Game " + (games.length + 1);
    const clues = await fetchClues();
    const gameData = {
      id: "G" + (games.length + 1),
      name: gameName,
      questions: formatClues(clues)
    };
    setGames(games.concat(gameData));
    setIsLoading(false)
    setCurrentGameId(gameData.id);
  }

  const endGame = () => {
    setCurrentGameId("");
  }

  const findCurrentGameQuestions = () => {
    const currentGame = games.find(game => (game.id === currentGameId));
    return currentGame.questions;
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
        <p className="loading-message">Gathering game data...</p>
      }
      {currentGameId &&
        <Game
          endGame={endGame}
          questionData={findCurrentGameQuestions()}
        />
      }
      </div>
    </div>
  );
}

export default App;
