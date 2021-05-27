import React, {useState} from "react";
import Board from "./components/Board"
import './style/root.scss'
import {calculateWinner} from './components/winninglogic'

const App = () =>{
    const[history, sethistory] = useState([ {board: Array(9).fill(null), nextPlayX: true} ]);
    const[currentMove, setcurrentMove] = useState(0);
    //setcurrentMove will be index for sethistory
    const current = history[currentMove];
    //history with index of current move
    //current game state 

    console.log("history", history)
    
    const winner = calculateWinner(current.board)
    const message = winner 
    ? `winner is ${winner}` 
    : `next player is ${current.nextPlayX ? 'X' : '0'}`

    const handleSquareClick = (position) =>{
        if(current.board[position] || winner){
            return;
            
        }
        sethistory((prev)=>{
            const last = prev[prev.length - 1];
            //to get latest void state
            const newBoard = last.board.map((square, pos)=>{
                if(pos === position){
                    return last.nextPlayX ? "X" : "0"
                }
                return square;   
            })
            return prev.concat({board: newBoard, nextPlayX : !last.nextPlayX})
            //to addd new values to prev board value
        })
        setcurrentMove(prev => prev + 1)
        //to increment count
    }

    return(
        <div className="app-c">
            <h1>Tic Tac Toe</h1>
            <h2>{message}</h2>
            <Board board={current.board} handleSquareClick={handleSquareClick} />
        </div>
    );
}



export default App;
