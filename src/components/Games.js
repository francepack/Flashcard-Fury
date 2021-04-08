import "../css/Games.css";

function Games(props) {

  const renderGames = () => {
    console.log('runs', props.games)
    if (props.games) {
      props.games.map(game => {
        return (
          <div className="game-log">
            <h4>{game.name}</h4>
            <p>{findCorrectAnswers(game)}/{game.questions.length}</p>
          </div>
        )
      })
    }
  }

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
      <h4>All games</h4>
      <div className="games-list">
        {props.games.map(game => (
          <div className="game-log">
            <p>{game.name}</p>
            <p>{findCorrectAnswers(game)}/{game.questions.length}</p>
            <button onClick={() => props.selectGame(game.id)}>Replay</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
