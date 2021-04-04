import React, { useState, useEffect } from "react";
import '../css/Game.css';

function Game() {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="game">
      <div className="content-box">
      {}
      {}
      </div>
    </div>
  );
}

export default Game;
