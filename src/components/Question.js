import React, { useState } from "react";
import "../css/Question.css";

function Question(props) {
  const [questionIncrementor, setQuestionIncrementor] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const turnOnAnswer = () => {
    setShowAnswer(true);
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
          <button>Got it right!</button>
          <button>Nope...</button>
        </div>
      }
    </div>
  );
}

export default Question;
