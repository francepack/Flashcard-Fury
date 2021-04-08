import React, { useState, useReducer } from "react";
import "../css/App.css";
import Game from "./Game";
import Games from "./Games";
import { formatClues } from "../utils/formatClues";
import { fetchGameData } from "../utils/api";

function App() {
  const [games, setGames] = useState([]);
  const [currentGameId, setCurrentGameId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const startGame = async () => {
    setIsLoading(true);
    const gameName = "Game " + (games.length + 1);
    const clues = await fetchGameData();
    const gameData = {
      id: "G" + (games.length + 1),
      key: {gameName},
      name: gameName,
      questions: formatClues(clues)
    };
    setGames(games.concat(gameData));
    setIsLoading(false);
    setCurrentGameId(gameData.id);
  }

  const endGame = () => {
    setCurrentGameId("");
  }

  const findCurrentGameData = () => {
    return games.find(game => (game.id === currentGameId));
  }

  const findCurrentGameQuestions = () => {
    const currentGameData = findCurrentGameData();
    return currentGameData.questions;
  }

  const selectGame = (gameId) => {
    setCurrentGameId(gameId);
  }

  const markAnsweredCorrectly = (questionIndex) => {
    // First, replace the question within the current game
    const currentGameData = findCurrentGameData();
    const questionAnsweredCorrectly = currentGameData.questions[questionIndex];
    questionAnsweredCorrectly.hasAnsweredCorrectly = true;
    currentGameData.questions.splice(questionIndex, 1, questionAnsweredCorrectly);
    // Then, replace the current game within all games
    const gameIndex = currentGameId.split("G")[1] - 1;
    const newGameData = [...games];
    newGameData.splice(gameIndex, 1, currentGameData);
    setGames(newGameData);
  }

  return (
    <div className="app">
      <header className="title">
        <h1>Flashcard Fury</h1>
        <h3>Put your trivial knowledge to the test</h3>
        <p>A trivia game made with the help of <a href="http://jservice.io/">jService</a></p>
        <button className="start-btn btn" onClick={startGame}>Start New Game!</button>
      </header>
      {games.length !== 0 &&
        <div className="games-box">
          <Games
            games={games}
            selectGame={selectGame}
          />
        </div>
      }
      {isLoading &&
        <div className="loading-message">
          <p>Gathering game data...</p>
        </div>
      }
      {currentGameId &&
        <div className="game-box">
          <Game
            endGame={endGame}
            markAnsweredCorrectly={markAnsweredCorrectly}
            questionData={findCurrentGameQuestions()}
          />
        </div>
      }
    </div>
  );
}

export default App;
