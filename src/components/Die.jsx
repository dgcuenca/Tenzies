import React from 'react'
import '../App.css'

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <div className="die-face" style={styles}>
      <button className="die-num" style={styles}>
        {props.value}
      </button>
    </div>
  )
}

export default Die
