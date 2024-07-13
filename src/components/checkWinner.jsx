function checkWinner(board) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0]; // Return 'X' or 'O' if all three in a row are the same
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i]; // Return 'X' or 'O' if all three in a column are the same
    }
  }

  // Check diagonals
  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0]; // Return 'X' or 'O' if all three in the diagonal are the same
  }
  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2]; // Return 'X' or 'O' if all three in the diagonal are the same
  }

  // If no winner, return null
  return null;
}

export default checkWinner