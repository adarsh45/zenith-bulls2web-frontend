import React from "react";
import { Motion, spring } from "react-motion";
import { getMatrixPosition, getVisualPosition } from "../config/gameFunctions";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "../config/values"

const Box = ({ tile, index, width, height, handleTileClick }) => {
  // const imgUrl = "https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2017/09/How-To-Travel-With-a-Super-Anxious-Cat-square.jpeg";
  const imgUrl = "https://i.pinimg.com/236x/88/a4/e5/88a4e55b674377ad8fd735bc1edebe40--ancient-rome-ancient-art.jpg";
  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  const boxStyling = {
    width: `calc(100% / ${GRID_SIZE})`,
    height: `calc(100% / ${GRID_SIZE})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: `${BOARD_SIZE * 1.25}px`,
    backgroundPosition: `${(100 / GRID_SIZE) * (tile % GRID_SIZE)}% ${(100 / GRID_SIZE) * (Math.floor(tile / GRID_SIZE))}%`,
  };
  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y)
  }

  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <li
          style={
            {
            ...boxStyling,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            // Is last tile?
            opacity: tile === TILE_COUNT - 1 ? 0 : 1,
          }
          }
          className="box"
          onClick={() => handleTileClick(index)}
        >
          {!imgUrl && `${tile + 1}`}
        </li>
      )}
    </Motion>
  );
}

export default Box;