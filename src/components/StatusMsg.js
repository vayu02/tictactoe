import React from 'react'

const StatusMsg = ({winner, current}) => {
    const noMoves = current.board.every((el)=> el !== null);
    return (
        <h2>
            {winner &&  `winner is ${winner}` }
            {!winner && !noMoves &&  `next player is ${current.nextPlayX ? 'X' : '0'}`}
            {!winner && noMoves && 'X and 0 tied'}
        </h2>
    )
}

export default StatusMsg
