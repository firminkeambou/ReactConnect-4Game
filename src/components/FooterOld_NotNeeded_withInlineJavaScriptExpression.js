import React from 'react'
import '../Game.css'
import { GAME_STATE_PLAYING} from '../Constants'
const Footer = ({onNewGameClicked,onSuggestClicked, gamestate}) => {
  return (
    <div>
        <div className='panel footer'>
            
            {
                //read, if gameState === GAME_STATE_PLAYING then <button onClick={onSuggestClicked}>Suggest</button>
                gamestate === GAME_STATE_PLAYING && 
                <button onClick={onSuggestClicked}>Suggest</button>
            }
            {
              gamestate !== GAME_STATE_PLAYING &&    
            <button onClick={onNewGameClicked}>New Game</button>
        }
        </div>
    </div>
  )
}

export default Footer