import React, { useState } from "react";
import "../css/Question.css";

function Question(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const turnOnAnswer = () => {
    setShowAnswer(true);
  }

  const evaluateAnswer = (userInput) => {
    const questionIndex = props.questionIncrementor - 1;
    if (userInput) {
      props.markAnsweredCorrectly(questionIndex);
    }
    if (props.questionIncrementor === 30) {
      props.resetIncrementor();
      props.endGame();
    } else {
      props.incrementQuestion();
      setShowAnswer(false);
    }

  }

  return (
    <div className="question">
      {!showAnswer &&
        <div className="question-box" onClick={turnOnAnswer}>
          <p className="question-count">Question {props.questionIncrementor} of 30</p>
          <p className="category-display">Category: <span className="category-name">{props.question.category}</span></p>
          <h5><span className="emph">{props.question.question}</span></h5>
          <p className="click-anywhere">(Click anywhere to proceed)</p>
        </div>
      }
      {showAnswer &&
        <div className="answer-box">
          <p className="question-count">Question {props.questionIncrementor} of 30</p>
          <p className="category-display">Category: <span className="category-name">{props.question.category}</span></p>
          <h5><span className="emph">{props.question.answer}</span></h5>
          <p>Did you know this one?</p>
          <button onClick={() => evaluateAnswer(true)}>Got it right!</button>
          <button onClick={() => evaluateAnswer(false)}>Nope...</button>
        </div>
      }
    </div>
  );
}

export default Question;
