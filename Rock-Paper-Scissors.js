let score = JSON.parse(localStorage.getItem('score')) 
if (score == null){
    score= {
    wins: 0,
    losses: 0,
    ties: 0
    }
    
}

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissor') {
    if (computerMove === 'rock') {
    result = 'You lose.';
    } else if (computerMove === 'paper') {
    result = 'You win.';
    } else if (computerMove === 'scissor') {
    result = 'Tie.';
    }

} else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
    } else if (computerMove === 'paper') {
    result = 'Tie.';
    } else if (computerMove === 'scissor') {
    result = 'You lose.';
    }
    
} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie.';
    } else if (computerMove === 'paper') {
    result = 'You lose.';
    } else if (computerMove === 'scissor') {
    result = 'You win.';
    }
}

if (result === 'You win.') {
    score.wins += 1;
} 
else if (result === 'You lose.') {
    score.losses += 1;
} 
else if (result === 'Tie.') {
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-result').
    innerText = result;

document.querySelector('.js-move').innerHTML =
`Your Move 
<img src="images/${playerMove}-image.png" class = "move"> <br> 
Computer Move 
<img src="images/${computerMove}-image.png" class = "move">`;

if (result === 'You win.') {
  document.body.style.backgroundColor = '#14532d';
} else if (result === 'You lose.') {
  document.body.style.backgroundColor = '#7f1d1d';
} else {
  document.body.style.backgroundColor = '#374151';
}


UpdateMoves();

}

function UpdateMoves(){

    document.querySelector('.js-score').
        innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
    }

    return computerMove;
}