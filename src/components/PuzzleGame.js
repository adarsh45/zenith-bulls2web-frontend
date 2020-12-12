import React, { useState} from "react";
import GameBoard from "./GameBoard";
import "../GameStyle.css";

const PuzzleGame = () => {
  return (
    <div className="PuzzleGame">
      <GameBoard />
    </div>
  );
}
export default PuzzleGame;