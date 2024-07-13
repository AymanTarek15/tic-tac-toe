import { useEffect, useState } from "react";


function GameOver({winner, isDraw, player1Name, player2Name, children}){
  
  const[name,setName]=useState('')
  useEffect(() => {
    if (winner === 'X') {
      setName(player1Name);
    } else if (winner === 'O') {
      setName(player2Name);
    }
  }, [winner, player1Name, player2Name]);
  return <div id="game-over">
    <h2>Game Over</h2>
    {isDraw ? <p>Game is draw</p>:<p>{name} won</p> }
    
    {children}
  </div>
}

export default GameOver