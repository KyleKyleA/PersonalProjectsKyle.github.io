//Scripting the game functions on rock paper scissors

let playerScore = 0;
let computerScore = 0;
let roundWinner = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') 
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoice() {
    let randomNum = Math.floor(Math.Random() * 3)
    switch (randomNum) {
        case 0:
            return 'ROCK'
        case 1:
            return 'SCISSORS';
        case 2:
            return 'PAPER';
    } 
}

function isGameOver() {
    return playerScore === 10 || computerScore == 10
}

//UI / User interface 
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const PlayerscorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const scissorBtn = document.getElementById('scissorBtn')
const paperBtn = document.getElementById('paperBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click', () => handleClick('rock'))
scissorBtn.addEventListener('click', () => handleClick('scissors'))
paperBtn.addEventListener('click', () => handleClick('paper'))

function handleClick(playerSelection) {
    if(isGameOver()) {
        openEndgameModal()
        return
    }

    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)

    if (isGameOver()) {
        openEndgameModal()
        setFinalMessage()
    }

}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'ROCK':
            playerSign.textContent = '🤘'
            break
        case 'SCISSORS':
            playerSign.textContent = '✂️'
            break
        case 'PAPER':
            playerSign.textContent = '📄'
            break
    }

    switch (computerSelection) {
        case 'ROCK':
            computerSign.textContent = '🤘'
            break
        case 'SCISSORS':
            computerSign.textContent = '✂️'
            break
        case 'PAPER':
            computerSign.textContent = '📄'
            break
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a draw!!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!!!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'you lost :('
    }

    PlayerscorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `computer: ${computerScore}`

}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalize}
    }
}
