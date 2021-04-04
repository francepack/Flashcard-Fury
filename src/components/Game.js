import React, { useState, useEffect } from "react";
import "../css/Game.css";
import Question from "./Question";
import Answer from "./Answer";

function Game(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const incrementQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div className="game">
      <div className="content-box">
      {!currentQuestion &&
        <p onClick={() => incrementQuestion()}>Your Quiz is about to begin. Click anywhere to proceed</p>
      }
      {currentQuestion &&
        <Question />
      }
      {showAnswer &&
        <Answer />
      }
      </div>
    </div>
  );
}

export default Game;
