import React from "react"
import nanoid from "nanoid"
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#F01717"
    }

function generateDot(){
    const dotArray=[]
    for(let i=0;i< props.value;i++){
        dotArray.push(<span className={`die-dots dot-${props.value}`}></span>)
    }
    return dotArray
}

    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {generateDot()}
        </div>
    )
}



