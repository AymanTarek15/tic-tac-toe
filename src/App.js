import { useState } from "react"
import GameBoard from "./components/GameBoard"
// import Player from "./components/player";
import Player from "./components/Player";


function App() {

  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');

  const [activePlayer,setActivePlayer]=useState('X')

  const handlePlayerNameChange = (playerId, newName) => {
    if (playerId === 'player1') {
      setPlayer1Name(newName);
    } else if (playerId === 'player2') {
      setPlayer2Name(newName);
    }
  };

  function handleSelectSquare(){
    setActivePlayer((currentPlayer) =>   currentPlayer === 'X' ? 'O' : 'X' );
  }

  console.log(`player 1 is ${player1Name}`);
  console.log(`player 2 is ${player2Name}`);

  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">

          <Player initialName="player1" symbol="X" isActive={activePlayer ==='X' } playerId="player1" onNameChange={handlePlayerNameChange} />

          <Player initialName="player 2" symbol="O" isActive={activePlayer==='O'} playerId="player2" onNameChange={handlePlayerNameChange}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} player1Name={player1Name}
          player2Name={player2Name}  />
        
      </div>
    </main>
  )
}

export default App