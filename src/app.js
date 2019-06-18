import React from "react";
import ReactDOM from "react-dom";
import { Board } from "./components/Board/Board";
import { Title } from "./components/Title/Title";
import { PlayerWin } from './components/PlayerWin/PlayerWin' 
import "./styles.css";

function App() {
  const [playerWin, handlePlayerWin] = React.useState(false)
  const callback = () => handlePlayerWin(true);
  const gameResetCallback = () => {
    handlePlayerWin(false)
  }

  return (
    <div className="App">
      { playerWin ? <PlayerWin gameResetCallback={gameResetCallback}/> : '' }     
      <Board playerWinCallback={callback}/>
      <Title />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);