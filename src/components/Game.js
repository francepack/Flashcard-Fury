import React, { useState, useEffect } from "react";
import "../css/Game.css";
import Question from "./Question";
import Answer from "./Answer";

function Game(props) {
  const [questionIncrementor, setQuestionIncrementor] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const incrementQuestion = () => {
    console.log(props.questionData);
    setQuestionIncrementor(questionIncrementor + 1);
  }

  // const turnOnAnswer = () => {
  //   setShowAnswer(true);
  // }
  //
  // const turnOffAnswer = () => {
  //   setShowAnswer(false);
  // }

  // {showAnswer &&
  //   <Answer
  //     answer={props.questionData[questionIncrementor - 1].answer}
  //     turnOffAnswer={turnOffAnswer}
  //     endGame={props.endGame}
  //   />
  // }

  return (
    <div className="game">
      <div className="content-box">
      {!questionIncrementor &&
        <p onClick={() => incrementQuestion()}>Your Quiz is about to begin. Click anywhere to proceed</p>
      }
      {questionIncrementor &&
        <Question
          question={props.questionData[questionIncrementor - 1]}
          incrementQuestion={incrementQuestion}
        />
      }
      </div>
    </div>
  );
}

export default Game;
