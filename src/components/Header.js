import React from 'react'
import '../Game.css'
import {
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
    GAME_STATE_DRAW
} from '../Constants'

const Header = ({currentplayer,gamestate, winplayer}) => {
   // First method
   //  let displayText = gamestate !== 2 ? ` Player ${player} Turn`: ` Player ${player} Won the game `
 // Second Method
  const renderLabel =()=> {
    switch (gamestate){
        case GAME_STATE_PLAYING:
            return ` Player ${currentplayer} Turn`
        case GAME_STATE_WIN :
            return ` Player ${winplayer} Wins` // we can also use a <div> here
        case GAME_STATE_DRAW:
                return `Game is a Draw!` // we can also use a <div> here 
            default:
            return "Game Idle"
    }
  }

   return (
    <div>
        <div className='panel header'>
            <div className='header-text'>
               {renderLabel()}
            </div>

        </div>
    </div>
  )
}

export default Header