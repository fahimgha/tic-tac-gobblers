import { useState } from "react";
import Square from "./Square";
import Gobblet from "./Gobblet";
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [availableGobblets, setAvailableGobblets] = useState({
    gobbletsNum: { small: 3, large: 3, giant: 3 },
  });

  const handleOnDrop = (e, i) => {
    const nextSquares = squares.slice();
    const gobblet = e.dataTransfer.getData("gobblet");

    if (availableGobblets.gobbletsNum[gobblet] > 0) {
      const updateGobbletsNum = { ...availableGobblets.gobbletsNum };
      updateGobbletsNum[gobblet] -= 1;

      nextSquares[i] = gobblet;

      setAvailableGobblets({
        ...availableGobblets,
        gobbletsNum: updateGobbletsNum,
      });
      setSquares(nextSquares);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Game">
      {/* square board */}
      <div className="board">
        {squares.map((_, index) => (
          <Square
            key={index}
            value={squares[index]}
            handleOnDrop={(e) => handleOnDrop(e, index)}
            handleDragOver={handleDragOver}
          />
        ))}
      </div>
      {/* gobblet board */}
      <div className="gobblet">
        <h1 className="player-num">Player 1</h1>
        <div className="gobblet-container">
          {[...Array(availableGobblets.gobbletsNum.giant)].map((_, index) => (
            <Gobblet key={index} gobbletSize="giant" />
          ))}
          {[...Array(availableGobblets.gobbletsNum.large)].map((_, index) => (
            <Gobblet key={index} gobbletSize="large" />
          ))}
          {[...Array(availableGobblets.gobbletsNum.small)].map((_, index) => (
            <Gobblet key={index} gobbletSize="small" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
