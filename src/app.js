import React from "react";
import ReactDOM from "react-dom";
import { Board } from "./components/Board/Board";
import { Title } from "./components/Title/Title";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Board />
      <Title />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);