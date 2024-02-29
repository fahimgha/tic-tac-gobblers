import { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleOnDrop = (e, i) => {
    const nextSquares = squares.slice();
    const gobblet = e.dataTransfer.getData("gobblet");

    nextSquares[i] = gobblet;
    console.log("gobblet", gobblet);
    setSquares(nextSquares);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="board">
      <Square value={squares[0]} handleOnDrop={(e) => handleOnDrop(e, 0)} />
      <Square value={squares[1]} handleOnDrop={(e) => handleOnDrop(e, 1)} />
      <Square value={squares[2]} />

      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />

      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
    </div>
  );
}

export default Board;
