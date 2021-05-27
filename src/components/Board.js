import React, {useState} from 'react'
import { render } from 'react-dom';
import Square from './Square'

const Board = () => {

    const[board, setboard] = useState(Array(9).fill(null));
    //for first player 
    const[nextPlayX, setNextPlayX] = useState (false);
    //another state to keep track of next player
    console.log(board)

    const handleSquareClick = (position) =>{
        //after click function
        if(board[position]){
            return;
        }
        setboard((prev)=>{
            return prev.map((square, pos)=>{
                if(pos === position){
                    //iterated square position (pos) === currently clicked square (position)
                    return nextPlayX ? "X" : "0"
                }
                return square;   
                //reurn same square
            })
        })
        setNextPlayX((prev)=> !prev)
    }

    const renderSquare = (position) =>{
        return <Square value={board[position]} onClick={()=>{
            handleSquareClick(position)
        }} />
    }

    return (
        <div className='board-c'>
            <div className="board-row"> 
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}

            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
