export const isWinner = (gameBoard, currentCircle,currentPlayer) => {
    /*we are copying a gameboard in Board because , states like "gameBoard" are updated asynchronously which means we usually 
    when the next move before being able to see the updated state ;moreover, gameBoard is not a primitive type(change it without copying will actually changed the state) in the other hand, we want to check the status of our game
    synchronously*/
    let board = [...gameBoard]
    board[currentCircle] = currentPlayer
    const winLines = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12]
    ]
    for (let i = 0; i < winLines.length; i++){
        //destructuring an array
        const [c1,c2,c3,c4] = winLines[i];
        if (board[c1] > 0 &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4] 
        )
            {
                return true
        }
    }
    return false
};

export const isDraw = (gameBoard, currentCircle,currentPlayer) => {
    /*we are copying a gameboard in Board because , states like "gameBoard" are updated asynchronously which means we usually 
    when the next move before being able to see the updated state ;moreover, gameBoard is not a primitive type(change it without copying will actually changed the state) in the other hand, we want to check the status of our game
    synchronously*/
    let board = [...gameBoard]
    board[currentCircle] = currentPlayer
    
    for (let j = 0; j < board.length; j++){
        if (board[j] === 0) return false
     }
    return true
}

// the below is "isDraw" , teacher's version

export const isDraw1 = (gameBoard, currentCircle,currentPlayer) => {
    /*we are copying a gameboard in Board because , states like "gameBoard" are updated asynchronously which means we usually 
    when the next move before being able to see the updated state ;moreover, gameBoard is not a primitive type(change it without copying will actually changed the state) in the other hand, we want to check the status of our game
    synchronously*/
    let board = [...gameBoard]
    board[currentCircle] = currentPlayer
    let count = board.reduce((n,x)=> n + (x === 0),0)
    // check if we didn't get a winner in the last move 

    return (count === 0) && !isWinner(board, currentCircle,currentPlayer)
}
// the below function computes the random move
export const  getComputerMove= (gameBoard) => {
    // the following array will store indexes of available move
 let validMoves = [];
 for (let i=0; i < gameBoard.length; i++){
    if (gameBoard[i] === 0 ) {
        validMoves.push(i)
    }
 }
 //choose the random move
  let rndMove = Math.floor(Math.random() * validMoves.length)
 return validMoves[rndMove]  
}

/*export const getComputerMove = (gameBoard) => {
    // vertical winning moves
}*/