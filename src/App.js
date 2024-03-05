import React from "react";
import Header from "./components/Header";
// import ModalHelp from "./components/ModalHelp";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <div id="App" className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
