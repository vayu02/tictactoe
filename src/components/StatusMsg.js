import React from 'react'

const StatusMsg = ({winner, current}) => {
    const noMoves = current.board.every((el)=> el !== null);
    return (
        <div className='stat-msg'>
            {winner &&  <> 
            Winner is{' '}
            <span className={winner === "X" ? 'txt-grn' : 'txt-orng'}>{winner}</span>
            </>}
            {!winner && !noMoves && 
            <>
            Next player is {' '}
            <span className={current.nextPlayX ? 'txt-grn' : 'txt-orng'} >{current.nextPlayX ? 'X' : '0'}</span>
            </>}
            {!winner && noMoves && <>
            <span className="txt-grn"> X</span>and <span className='txt-orng'>0</span>
            </>}
        </div>
    )
}

export default StatusMsg;
