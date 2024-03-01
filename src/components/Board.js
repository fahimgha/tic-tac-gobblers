import { useState } from "react";
import Square from "./Square";
import Gobblet from "./Gobblet";
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  // const [availableGobblets, setAvailableGobblets] = useState({
  //   gobbletsNum: { small: 3, large: 3, giant: 3 },
  // });

  const [availableGobblets, setAvailableGobblets] = useState({
    player1: { small: 3, large: 3, giant: 3 },
    player2: { small: 3, large: 3, giant: 3 },
  });

  const handleOnDrop = (e, i) => {
    const nextSquares = squares.slice();
    const gobblets = e.dataTransfer.getData("gobblet");
    const { player, gobblet } = JSON.parse(gobblets);
    const existingGobblet = nextSquares[i];

    if (!existingGobblet || existingGobblet.split("_")[1] > gobblet) {
      if (availableGobblets[player][gobblet] > 0) {
        const updateGobbletsNum = { ...availableGobblets };
        updateGobbletsNum[player][gobblet] -= 1;

        nextSquares[i] = player + "_" + gobblet;

        setAvailableGobblets({
          ...availableGobblets,
          gobbletsNum: updateGobbletsNum,
        });
        setSquares(nextSquares);
      }
    }
    console.log(squares);
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
      <div>
        <div className="gobblet">
          <h1 className="player-num">Player 1</h1>
          <div className="gobblet-container">
            {[...Array(availableGobblets.player1.giant)].map((_, index) => (
              <Gobblet key={index} gobbletSize="giant" player="player1" />
            ))}
            {[...Array(availableGobblets.player1.large)].map((_, index) => (
              <Gobblet key={index} gobbletSize="large" player="player1" />
            ))}
            {[...Array(availableGobblets.player1.small)].map((_, index) => (
              <Gobblet key={index} gobbletSize="small" player="player1" />
            ))}
          </div>
        </div>
        <div className="gobblet">
          <h1 className="player-num">Player 2</h1>
          <div className="gobblet-container">
            {[...Array(availableGobblets.player2.giant)].map((_, index) => (
              <Gobblet key={index} gobbletSize="giant" player="player2" />
            ))}
            {[...Array(availableGobblets.player2.large)].map((_, index) => (
              <Gobblet key={index} gobbletSize="large" player="player2" />
            ))}
            {[...Array(availableGobblets.player2.small)].map((_, index) => (
              <Gobblet key={index} gobbletSize="small" player="player2" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
