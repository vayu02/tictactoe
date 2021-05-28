import React from 'react'

const Square = ({value, onClick, ifWinningSquare}) => {
    return <button type='button' onClick={onClick
    } 
    className={`square-c ${ifWinningSquare ? 'winning' : '' } ${value === 'X' ? 'txt-grn' : 'txt-orng'}`}>
        {value}
    </button>;
}

export default Square;
