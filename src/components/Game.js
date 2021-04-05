import React, { useState, useEffect } from "react";
import "../css/Game.css";
import Question from "./Question";

function Game(props) {
  const [questionIncrementor, setQuestionIncrementor] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const incrementQuestion = () => {
    setQuestionIncrementor(questionIncrementor + 1);
  }

  const resetIncrementor = () => {
    setQuestionIncrementor(0);
  }

  return (
    <div className="game">
      {!questionIncrementor &&
        <div className="start-text-area" onClick={() => incrementQuestion()}>
          <p className="ready">Are you ready?</p>
          <p className="quiz-begin">Your Quiz is about to begin!</p>
          <p className="click-anywhere">(Click anywhere to proceed)</p>
        </div>
      }
      {questionIncrementor >= 1 &&
        <Question
          question={props.questionData[questionIncrementor - 1]}
          incrementQuestion={incrementQuestion}
          questionIncrementor={questionIncrementor}
          endGame={props.endGame}
          markAnsweredCorrectly={props.markAnsweredCorrectly}
          resetIncrementor={resetIncrementor}
        />
      }
    </div>
  );
}

export default Game;
