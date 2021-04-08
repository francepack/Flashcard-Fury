import React, { useState } from "react";
import "../css/Game.css";
import Question from "./Question";

function Game(props) {
  const [questionIncrementor, setQuestionIncrementor] = useState(0);

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
          <p className="ready-text">Are you ready?</p>
          <p className="quiz-begin-text">Your Quiz is about to begin!</p>
          <p className="click-anywhere-text">(Click anywhere to proceed)</p>
        </div>
      }
      {questionIncrementor >= 1 &&
        <Question
          endGame={props.endGame}
          incrementQuestion={incrementQuestion}
          markAnsweredCorrectly={props.markAnsweredCorrectly}
          question={props.questionData[questionIncrementor - 1]}
          questionCount={props.questionData.length}
          questionIncrementor={questionIncrementor}
          resetIncrementor={resetIncrementor}
        />
      }
    </div>
  );
}

export default Game;
