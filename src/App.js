import Gobblet from "./components/Gobblet";
import Header from "./components/Header";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Game">
        <Board />
        <Gobblet />
      </div>
    </div>
  );
}

export default App;
