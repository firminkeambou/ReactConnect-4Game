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
const  getRandomComputerMove= (gameBoard) => {
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

const getPosition = (gameBoard,moveChecks)=>{
    for (let check=0; check < moveChecks.length; check++){
        for (let i=0; i<moveChecks[check].max ;i+=moveChecks[check].step){
         let series = gameBoard[i +moveChecks[check].indexes[0]].toString() +
            gameBoard[i +moveChecks[check].indexes[1]].toString() +
            gameBoard[i +moveChecks[check].indexes[2]].toString() +
            gameBoard[i +moveChecks[check].indexes[3]].toString() 

            switch(series){
                case "1110":
                case "2220":
                    return i + moveChecks[check].indexes[3];
                case "1101":
                case "2202":
                return i + moveChecks[check].indexes[2];   
                case "1011":
                case "2022":
                return i + moveChecks[check].indexes[1];  
                case "0111":
                case "0222":
                return i + moveChecks[check].indexes[0];  
                default:
         }

        }
    }
    return -1
}

export const getComputerMove = (gameBoard) => {
    // vertical winning moves
    let moveChecks = [
        // vertical winning moves max and step should be set here in a way that we can have four loops because we have 4 combinations that matches "indexes"
        {
            indexes : [0,4,8,12],
            max : 4,
            step: 1
        },
                // vertical winning moves; max and step should be set here in a way that we can have four loops because we have 4 combinations that matches "indexes"
        {
            indexes : [0,1,2,3],
            max : 16,
            step: 4
        },
        //diagonal1;max and step should be set here in a way that we only has a single loop because we only has one diagonal combination that matches "indexes"
        {
            indexes:[0,5,10,15],
            max: 16,
            step:16
        }
        ,
        //diagonal2 ; max and step should be set here in a way that we only has a single loop because we only has one diagonal combination that matches "indexes"
        {
            indexes:[3,6,9,12],
            max: 16,
            step:16
        }
    ]
    let position = getPosition(gameBoard,moveChecks)
    if (position > -1 ) return position

    return getRandomComputerMove(gameBoard)
} 