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
      <div className="content-box">
        {!questionIncrementor &&
          <p onClick={() => incrementQuestion()}>Your Quiz is about to begin. Click anywhere to proceed</p>
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
    </div>
  );
}

export default Game;
