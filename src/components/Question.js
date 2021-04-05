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
        <div className="question-box">
          <p>Question {props.questionIncrementor}/30</p>
          <p>Category: {props.question.category}</p>
          <h5 onClick={turnOnAnswer}>{props.question.question}</h5>
        </div>
      }
      {showAnswer &&
        <div className="answer-box">
          <p>Question {props.questionIncrementor}/30</p>
          <p>Category: {props.question.category}</p>
          <h5>{props.question.answer}</h5>
          <p>Did you know this one?</p>
          <button onClick={() => evaluateAnswer(true)}>Got it right!</button>
          <button onClick={() => evaluateAnswer(false)}>Nope...</button>
        </div>
      }
    </div>
  );
}

export default Question;
