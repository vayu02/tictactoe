import React from 'react'

const History = ({history, moveTo, currentMove}) => {
    return (
        <div>
            <ul>
                {
                history.map((_, move) => {
                    //_ becuase not intended to use functional value
                    //index move 
                    return(
                        <li key={move}>
                            <button style={{
                                fontWeight: move === currentMove ? 'bold' : 'normal',
                            }} type='button' onClick={()=>{
                                moveTo(move)
                            }}>{move === 0 ? 'Go to game start' : `Go to move #${move}`}</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default History
