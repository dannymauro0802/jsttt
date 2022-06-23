import logo from './logo.svg';
import './App.css';
import { TicTacToeBox } from './TicTacToeBox';
import { useState } from 'react';
import { TicTacToeRow } from './TicTacToeRow';





function App() {

  

  const [gameState, setGameState] = useState({turnNum: 0, finished: false});

  const [gridState, setGridState] = useState(Array(9).fill(''));

  // console.log('Turn num: ' + gameState.turnNum);

  function onResetClick(){
    setGridState(Array(9).fill(''));
    gameState.turnNum = 0;
    gameState.finished = false;
  }

  function checkForWin(gridState){
    var winnableGroupings = [];
    winnableGroupings.push(gridState.slice(0,3)); // Row 1
    winnableGroupings.push(gridState.slice(3,6)); // Row 2
    winnableGroupings.push(gridState.slice(6,9)); // Row 3
    winnableGroupings.push([gridState[0], gridState[3], gridState[6]]); // Col 1
    winnableGroupings.push([gridState[1], gridState[4], gridState[7]]); // Col 2
    winnableGroupings.push([gridState[2], gridState[5], gridState[8]]); // Col 3
    winnableGroupings.push([gridState[0], gridState[4], gridState[8]]); // Diagonal LtR
    winnableGroupings.push([gridState[2], gridState[4], gridState[6]]); // Diagonal RtL

    // Checks if array contains all the same value (not including empty space)
    const win = arr => arr.every(v => v === arr[0] && arr[0] !== '');

    for (let i = 0; i < 8; i++){
      if (win(winnableGroupings[i])){
        // setGameState({... gameState, finished: true});
        return true;
      }
    }
    // console.log('No Winner');
    return false;
  }

  function onMove(row, col){
    var clickedBy = (gameState.turnNum % 2 == 0) ? 'X' : 'O';
    if ((gridState[(row - 1) * 3 + col - 1] !== '') || gameState.finished){
      // Invalid Move
    } else{
      setGameState({... gameState, turnNum: gameState.turnNum + 1});
      var newGridState = [... gridState];
      newGridState[(row - 1) * 3 + col - 1] = clickedBy;
      setGridState(newGridState);

      if (checkForWin(newGridState)){
        setGameState({... gameState, finished: true});
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tic-Tac-Toe!
        </h1>
        <div className="win">
          {(gameState.turnNum == 9 && gameState.finished == false) ? 'No Winner!' : ''}
        
          {(gameState.finished == true) ? ((gameState.turnNum % 2 == 0) ? 'X' : 'O') + ' Wins!' : ''}
        </div>
        
        {(gameState.finished == false && gameState.turnNum != 9) ? ('Next: ' + ((gameState.turnNum % 2 == 0) ? 'X' : 'O')) : ''}
        <TicTacToeRow clicked = {onMove} rowNum = {1} rowState={gridState.slice(0, 3)}/>
        <TicTacToeRow clicked = {onMove} rowNum = {2} rowState={gridState.slice(3, 6)}/>
        <TicTacToeRow clicked = {onMove} rowNum = {3} rowState={gridState.slice(6, 9)}/>
        <br></br>
        <button onClick={onResetClick}>Reset</button>
        <br></br>
        <div className="playAgain">
          {(gameState.turnNum == 9 || gameState.finished == true)  ? 'Click Reset to Play Again' : ''}
        </div>
        
      </header>
    </div>
  );
}

export default App;
