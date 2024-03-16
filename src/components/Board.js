import React, { useState } from "react";
import Square from "./Square";
import Gobblet from "./Gobblet";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [playerOneTurn, setPlayerOneTurn] = useState("player1");

  const [availableGobblets, setAvailableGobblets] = useState({
    player1: { small: 3, large: 3, giant: 3 },
    player2: { small: 3, large: 3, giant: 3 },
  });

  const handleOnDrop = (e, i) => {
    const nextSquares = squares.slice();

    const gobblets = e.dataTransfer.getData("gobblet");

    const { player, gobblet } = JSON.parse(gobblets);
    const existingGobblet = nextSquares[i];

    if (player !== playerOneTurn || calculateWinner(squares)) {
      return;
    }
    if (!existingGobblet || existingGobblet.gobblet > gobblet) {
      if (availableGobblets[player][gobblet] > 0) {
        const updateGobbletsNum = { ...availableGobblets };
        updateGobbletsNum[player][gobblet] -= 1;

        nextSquares[i] = { player, gobblet };
        setAvailableGobblets({
          ...availableGobblets,
          gobbletsNum: updateGobbletsNum,
        });
        setSquares(nextSquares);
        setPlayerOneTurn(playerOneTurn === "player1" ? "player2" : "player1");
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is " + (winner === "player1" ? "Player 1" : "Player 2");
  } else {
    status =
      "Next player: " + (playerOneTurn === "player1" ? "Player 1" : "Player 2");
  }
  console.log(winner);
  return (
    <div className="test">
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
        <div className="gobblet-board">
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
          <div className="status">
            <div
              className={
                "status-container " +
                (winner
                  ? winner === "player1"
                    ? "player1"
                    : "player2"
                  : playerOneTurn)
              }
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[b] &&
      squares[c] &&
      squares[a].player &&
      squares[a].player === squares[b].player &&
      squares[a].player === squares[c].player
    ) {
      return squares[a].player;
    }
  }
  return null;
}

export default Board;
