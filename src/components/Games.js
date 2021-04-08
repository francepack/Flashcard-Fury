import "../css/Games.css";

function Games(props) {
  const findCorrectAnswers = (game) => {
    let correctCount = 0;
    game.questions.forEach(question => {
      if (question.hasAnsweredCorrectly) {
        correctCount += 1;
      }
    })
    return correctCount;
  }

  return (
    <div className="games">
      <h4>All Games</h4>
      <div className="games-list">
        {props.games.map(game => (
          <div className="game-log">
            <p>{game.name}</p>
            <p>{findCorrectAnswers(game)}/{game.questions.length}</p>
            <button className="replay-btn btn" onClick={() => props.selectGame(game.id)}>Replay</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
