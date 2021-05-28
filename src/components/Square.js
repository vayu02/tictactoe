import React from 'react'

const Square = ({value, onClick, ifWinningSquare}) => {
    return <button type='button' className="square-c" onClick={onClick
    } style={{fontWeight : ifWinningSquare ? 'bold' : 'normal'}}>{value}</button>;
}

export default Square;
