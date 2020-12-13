import React, { useState } from "react";
import Box from "./Box";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "../config/values"
import { canSwap, shuffle, swap, isSolved } from "../config/gameFunctions"
import { Button } from "reactstrap";

import "../assets/css/GameStyle.css";

function GameBoard() {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  const buttonStyles = {
    border: "none",
    fontSize: "1.2em",
    background: "goldenrod",
    padding: "0.6em",
    margin: "auto",
    display: "block"
  }

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  return (
    <>
    <h1 style={{
      color: "goldenrod",
      textAlign: "center",
      fontFamily: 'Faustina, serif',
      padding: "0.4em",
    }}>Puzzle Game!!!</h1>
      <ul style={style} className="gameBoard">
        {tiles.map((tile, index) => (
          <Box
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && <div>Puzzle solved 🧠 🎉</div>}
      {!isStarted ?
        (<Button style={buttonStyles} onClick={() => handleStartClick()}>Start game</Button>) :
        (<Button style={buttonStyles} onClick={() => handleShuffleClick()}>Restart game</Button>)}
    </>
  );
}

export default GameBoard;
