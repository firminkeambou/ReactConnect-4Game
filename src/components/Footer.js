import React from 'react'
import '../Game.css'
const Footer = ({onNewGameClicked,onSuggestClicked}) => {
  return (
    <div>
        <div className='panel footer'>
            <button onClick={onNewGameClicked}>New Game</button>
            <button onClick={onSuggestClicked}>Suggest</button>
        </div>
    </div>
  )
}

export default Footer