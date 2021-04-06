import "../css/Games.css";

function Games(props) {

  const renderGames = () => {
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
    game.questions.forEach(questions => {
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
        {renderGames()}
      </div>
    </div>
  );
}

export default Games;
