import React, {  useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import Header from "./Header";
import '../Game.css'
import Footer from "./Footer";
import { isWinner, getComputerMove , isDraw1} from "../helper";
import {PLAYER_1,
    PLAYER_2,
    NUMBER_CIRCLES,
    NO_PLAYER,
    GAME_STATE_DRAW,
    GAME_STATE_IDLE,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN
} from '../Constants'

// every text between two components tags (<Component> children </Component>) is consider as "children"; it is used to pass down stactic text to a component

const GameBoard =() => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER))
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)  // currentPlayer  in a sense, who's going to play next, especially for userFriendly perspectives
    const [gameState, setGameState ] = useState(GAME_STATE_PLAYING)  
    const [winPlayer, setWinPlayer]  = useState(NO_PLAYER)
   // console.log(gameBoard , winner)
    //the below function inits the gameBoard
    //setCurrentPlayer(PLAYER_1)
   // setGameBoard()


   //Init game to be used with useEffect  when the component is first mounted
   useEffect( () => {
        initGame()
   },[])

   const initGame = () => {
    console.log("init game")
    setGameBoard(Array(16).fill(NO_PLAYER))
    setCurrentPlayer(PLAYER_1)
    setGameState(GAME_STATE_PLAYING)
   }

    const initBoard = () => {
 
        let circles = []  // we use arrays because react knows how to render arrays
        for (let i=0; i < NUMBER_CIRCLES; i++){
           circles.push(renderCircle(i))
        }
        //console.log(gameBoard,winner)
        return circles
        
    }
    // suggestMove is the function the acts on behalf the computer to suggest move if we don't actually have a second player
    const suggestMove = () => {
        console.log(circleClicked(getComputerMove(gameBoard)))
    }

    const circleClicked = (id) => {
        // check if the game is ongoing or already ended
        if (gameState !== GAME_STATE_PLAYING) {
            return alert(" sorry , the game is over")
         }
        
        // check if a player has already cliked on this circle
        if (gameBoard[id]> NO_PLAYER) {
            return alert(" sorry , choose another circle as this one was already chosen")
        }

    // to avoid mutating the array that will prevent react from rerendering the component, let's use a spread operator to make a copy of the array
    
    // 1- first method to update a state in an array using spread operator. this ia not recommended because spread only makes a shallow copy, not a deep one
      
        /* let board= [...gameBoard]  // this pread operator prevent us from mutating the state  gameBoard
            board[id] = currentPlayer
            setGameBoard(board)
            console.log(board)
         */
    // 2- this second method with map is recommended because map can go deeper in an aray

       setGameBoard(prev => {   // "prev" here represents the previous state prev= gameBoard
        return prev.map((elt,index)=>{ // elt/circle here represents the elt in the array
            if (id === index) return currentPlayer
            return elt
        })
       })
      // updating the status of the game, we should capture player who played before updating the currentPlayer to the next one
    if  (isWinner(gameBoard,id,currentPlayer)){
        setGameState(GAME_STATE_WIN)
        setWinPlayer(currentPlayer)
    }

    if  (isDraw1(gameBoard,id,currentPlayer)){
        setGameState(GAME_STATE_DRAW)
        setWinPlayer(NO_PLAYER)
    }

    
       setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1) // as currentPlayer is a primitive , we can directly update a state

       console.log(gameBoard)
    }

    const style = {}
    const renderCircle = (id) => {
        // key property is required by react just like the key in a database if we will many components to appear in the same page, so we can distinguish each of them
        return <GameCircle key={id} id={id} onCircleClicked={circleClicked} classname ={`player_${gameBoard[id]}`}/>
    }
    return (
        <>
        <Header currentplayer={currentPlayer} gamestate = {gameState} winplayer = {winPlayer}/>   
        <div className='gameBoard' style={style}> 
            {initBoard()}
            
        </div> 
        <Footer onNewGameClicked={initGame} onSuggestClicked={suggestMove} />
        </>
    
    
)
}

export default GameBoard;