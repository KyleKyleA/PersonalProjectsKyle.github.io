let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++;
        roundWinner = 'player';
    } else {
        computerScore++;
        roundWinner = 'computer';
    }

    updateScoreMessage(roundWinner, playerSelection, computerSelection);
    updateScore();
}

function getRandomChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function isGameOver() {
    return playerScore === 10 || computerScore === 10;
}

// UI elements
const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockbtn');
const scissorsBtn = document.getElementById('scissorsbtn');
const paperBtn = document.getElementById('paperbtn');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

rockBtn.addEventListener('click', () => handleClick('rock'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
paperBtn.addEventListener('click', () => handleClick('paper'));
restartBtn.addEventListener('click', restartGame);

function handleClick(playerSelection) {
    if (isGameOver()) {
        openEndgameModal();
        return;
    }

    const computerSelection = getRandomChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection.toUpperCase(), computerSelection);

    if (isGameOver()) {
        setFinalMessage();
        openEndgameModal();
    }
}

function updateChoices(playerSelection, computerSelection) {
    const signMap = {
        ROCK: '🤘',
        PAPER: '📄',
        SCISSORS: '✂️',
    };

    playerSign.textContent = signMap[playerSelection];
    computerSign.textContent = signMap[computerSelection];
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a draw!";
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won this round!';
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost this round.';
    }

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}`;
    } else if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${computerSelection.toLowerCase()}`;
    } else {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${computerSelection.toLowerCase()}`;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function setFinalMessage() {
    endgameMsg.textContent =
        playerScore > computerScore ? 'You won the game! 🎉' : 'You lost the game... 😢';
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
    scoreInfo.textContent = 'Choose your desired weapon';
    scoreMessage.textContent = 'First to score 10 points wins the game';
    playerScorePara.textContent = 'Player: 0';
    computerScorePara.textContent = 'Computer: 0';
    playerSign.textContent = '?';
    computerSign.textContent = '?';
    closeEndgameModal();
}

function closeEndgameModal() {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}
