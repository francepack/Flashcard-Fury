import React, { useState } from "react";
import "../css/Question.css";

function Question(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const turnOnAnswer = () => {
    setShowAnswer(true);
  }

  const evaluateAnswer = (userInput) => {
    console.log(props.questionIncrementor)
    const questionIndex = props.questionIncrementor - 1;
    if (userInput) {
      props.markAnsweredCorrectly(props.question.id, questionIndex);
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
        <h5 onClick={turnOnAnswer}>{props.question.question}</h5>
      }
      {showAnswer &&
        <div className="answer-box">
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
