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

  const findCurrentGameData = () => {
    return games.find(game => (game.id === currentGameId));
  }

  const findCurrentGameQuestions = () => {
    const currentGameData = findCurrentGameData();
    return currentGameData.questions;
  }

  const findGameQuestion = (gameData, questionId) => {
    return gameData.questions.find(question => question.id === questionId);
  }

  const findQuestionIndex = () => {

  }

  const fetchClues = async () => {
    let response = await fetch("https://jservice.io/api/random?count=30");
    response = await response.json();
    return response;
  }

  const markAnsweredCorrectly = (questionId, questionIndex) => {
    const currentGameData = findCurrentGameData();
    const questionAnsweredCorrectly = findGameQuestion(currentGameData, questionId);
    questionAnsweredCorrectly.hasAnsweredCorrectly = true;
    const newGameData = currentGameData.questions.splice(questionIndex, 1, questionAnsweredCorrectly);
    const gameIndex = currentGameId.split("G")[1] - 1;
    const newData = games.splice(gameIndex, 1, newGameData);
    setGames(newData);
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
          markAnsweredCorrectly={markAnsweredCorrectly}
        />
      }
      </div>
    </div>
  );
}

export default App;
