import { useState } from "react";
import GameOver from "./GameOver";
import checkWinner from "./checkWinner";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function GameBoard({ onSelectSquare, activePlayerSymbol, player1Name, player2Name }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] !== null) return;
    setGameBoard(prevGameBoard => {
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }

  function isBoardFull() {
    for (let row of gameBoard) {
      for (let cell of row) {
        if (cell === null) {
          return false; // If any cell is still null, board is not full
        }
      }
    }
    return true; // All cells are filled
  }

  const winner = checkWinner(gameBoard);
  const isDraw = isBoardFull() && winner === null;

  function handleRematch(){
    setGameBoard(initialGameBoard)
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null || winner}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
      {(winner !== null || isDraw) && <GameOver winner={winner} isDraw={isDraw} player1Name={player1Name} player2Name={player2Name}>
      <p>
      <button onClick={handleRematch}>Rematch!</button>
      </p>
        </GameOver>}
    </ol>
  );
}

export default GameBoard;
