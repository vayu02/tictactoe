import React, {useState} from "react";
import Board from "./components/Board"
import './style/main.scss'
import {calculateWinner} from './components/winninglogic'
import History from './components/History'
import StatusMsg from './components/StatusMsg'


const NEW_GAME = [
    {board: Array(9).fill(null), nextPlayX: true} 
]

const App = () =>{
    const[history, sethistory] = useState(NEW_GAME);
    const[currentMove, setcurrentMove] = useState(0);
    //setcurrentMove will be index for sethistory
    const current = history[currentMove];
    //history with index of current move
    //current game state 
    
    const {winner, winningSquares} = calculateWinner(current.board)
    

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

    const moveTo = (move) =>{
        setcurrentMove(move);
    }

    const onNewGame = () =>{
        sethistory(NEW_GAME)
        setcurrentMove(0)
    }

    return(
        <div className="app-c">
            <h1>Tic <span className="txt-grn">Tac Toe</span> </h1>
            <StatusMsg winner={winner} current={current}/>
            <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares ={winningSquares} />
            <button type='button' onClick={onNewGame} className={`btn-rst ${winner ? 'active' : ''}`}>
                Start New Game
            </button>
            <h2 style={{fontWeight:'normal'}}>Current Game History</h2>
            <History history={history} moveTo={moveTo} currentMove={currentMove} />
            <div className='bg-bls' />
        </div>
    );
}



export default App;
