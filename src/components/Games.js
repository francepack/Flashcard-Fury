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
      All games
      <div>
        {props.games.map(game => (
          <div className="game-log">
            <h4>{game.name}</h4>
            <p>{findCorrectAnswers(game)}/{game.questions.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
