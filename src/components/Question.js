import "../css/Question.css";

function Question(props) {
  return (
    <div className="question">
      <h5>{props.question}</h5>
    </div>
  );
}

export default Question;
