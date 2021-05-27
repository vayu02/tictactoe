import React from 'react'

const Square = ({value, onClick}) => {
    return <button type='button' className="square-c" onClick={onClick}>{value}</button>;
}

export default Square;
