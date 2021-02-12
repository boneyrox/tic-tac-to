import logo from './logo.svg';
import './App.css';
import Game from "./Components/Game";
import Board from "./Components/Board";
import Square from "./Components/Square";

const  App=()=>{
  return (
    <div className="App">
      <Game />
      <Board />
      <Square />
    </div>
  );
}

export default App;
