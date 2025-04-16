import React from 'react'
import '../Game.css'
import { GAME_STATE_PLAYING} from '../Constants'
const Footer = ({onNewGameClicked,onSuggestClicked, gamestate}) => {
  
  const renderButtons = () => {
    if (gamestate===GAME_STATE_PLAYING){
      return <button onClick={onSuggestClicked}>Suggest</button>
    }
    return <button onClick={onNewGameClicked}>New Game</button>
   }

  return (
    <div>
        <div className='panel footer'>   
            {renderButtons()}
        </div>
    </div>
  )
}

export default Footer