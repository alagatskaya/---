let players = ['x', 'o'];
let activePlayer = 0;
let board = [];

function startGame() {
  

  board = [
    ['', '', ''], 
    ['', '', ''], 
    ['', '', '']
  ]

  
  renderBoard(board);
}

function click(lineNumber, columnNumber) {
  
 
  if (board[lineNumber][columnNumber] === '') {
    board[lineNumber][columnNumber] = players[activePlayer];
  }


  
  renderBoard(board);
  console.log(board); // Печатаем доску в текущий момент
  
  if (checkLine() || checkColumn() || checkDiagonal1() || checkDiagonal2()) {
    showWinner(activePlayer);
    } else {if (activePlayer === 1) {
      activePlayer = 0
    } else {
      activePlayer = 1
    }
  } 

 
  function checkLine() {
    let count = 0
    for (let i = 0; i < board.length; i++) {
      if (board[lineNumber][i] === players[activePlayer]) {
        count++;

        if (count === board.length) {
          return true;
        }
      }
    }
  }

  
  function checkColumn() {
    let count = 0
    for (let i = 0; i < board.length; i++) {
      if (board[i][columnNumber] === players[activePlayer]) {
        count++;

        if (count === board.length) {
          return true;
        }
      }
    }
  }

  
  function checkDiagonal1() {
    let count = 0
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] === players[activePlayer]) {
        count++;

        if (count === board.length) {
          return true;
        }
      }
    }
  }
  
  function checkDiagonal2() {
    let count = 0
    for (let i = 0; i < board.length; i++) {
      if (board[i][board.length - 1 - i] === players[activePlayer]) {
        count++;

        if (count === board.length) {
          return true;
        }
      }
    }
  }
}