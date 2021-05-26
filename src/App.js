import React from "react";
import Board from "./components/Board"
import './style/root.scss'

const App = () =>{
    return(
        <div className="app-c">
            <h1>Tic Tac Toe</h1>
            <Board />
        </div>
    );
}



export default App;
