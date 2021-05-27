import React, {useState} from "react";
import Board from "./components/Board"
import './style/root.scss'
import {calculateWinner} from './components/winninglogic'

const App = () =>{
    const[board, setboard] = useState(Array(9).fill(null));
    //for first player 
    const[nextPlayX, setNextPlayX] = useState (false);
    //another state to keep track of next player
    // console.log(board)

    const winner = calculateWinner(board)
    // console.log(winner)
    const message = winner 
    ? `winner is ${winner}` 
    : `next player is ${nextPlayX ? 'X' : '0'}`


    const handleSquareClick = (position) =>{
        //after click function
        if(board[position] || winner){
            return;
            //if board position exist return from function
        }
        setboard((prev)=>{
            return prev.map((square, pos)=>{
                if(pos === position){
                    //iterated square position (pos) === currently clicked square (position)
                    return nextPlayX ? "X" : "0"
                    //if nextPlayer then return X or 0
                }
                return square;   
                //reurn same square
            })
        })
        //update function
        setNextPlayX((prev)=>  !prev)
    }


    return(
        <div className="app-c">
            <h1>Tic Tac Toe</h1>
            <h2>{message}</h2>
            <Board board={board} handleSquareClick={handleSquareClick} />
        </div>
    );
}



export default App;
