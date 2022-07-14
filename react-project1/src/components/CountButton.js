import React, { useState } from 'react';

const CountButton = (probs) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount +probs.incrementBy)
    }

    const buttonStyles = {
        color: probs.buttonColor,
        border:"1px solid black",
        borderRadius:"10px"
    }

    return(
    <div>
        <button style={buttonStyles} onClick={handleClick}>
         +{probs.incrementBy}
        </button>
        <div>{currentCount}</div>
    </div>
    )
}

export default CountButton