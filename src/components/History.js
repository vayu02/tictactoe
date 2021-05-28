import React from 'react'

const History = ({history, moveTo, currentMove}) => {
    //history comes from app.js
    return (
        <div className="hstry-wrap">
            <ul className='hstry'>
                {
                    //_ becuase not intended to use functional value
                    //index move 
                history.map((_, move) => {
                    // our mapping isnt dynamic to we will use its index=move
                    return(
                        <li key={move}>
                            <button className={`.btn-mv ${move === currentMove ? 'active': ''}`}
                            type='button' 
                            onClick={()=>{
                                moveTo(move)
                                }}>     
                                {move === 0 ? 'Go to game start' : `Go to move #${move}`}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default History
