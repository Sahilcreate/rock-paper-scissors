let playerSelection;
let computerOption;
let computerSelection;
let playerWinCount = 0;
let computerWinCount = 0;
let result = document.querySelector('#result');
let score = document.querySelector('#score');
let finalMessage = document.querySelector('#finalMessage');
let button = document.querySelector('#buttons');

function disableButton() {
    button.removeEventListener('click', buttonClickHandler);

}

function updateScoreboard() {
    score.setAttribute('style', 'white-space: pre;');
    score.textContent = `Player Score: ${playerWinCount} \r\n`;
    score.textContent += `Computer Score: ${computerWinCount}`;

    if (playerWinCount == 5 || computerWinCount == 5) {
        disableButton();
        if (playerWinCount == 5) {
            finalMessage.textContent = 'You won the game! Please reload the page to play again.';
        } else {
            finalMessage.textContent = 'You lose the game! Please reload the page to play again.';
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")) {
        ++playerWinCount;
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
       result.textContent = `It's a Tie! ${playerSelection} doesn't beat ${computerSelection}.`;
    } else {
       ++computerWinCount;
       result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
    updateScoreboard();
}

function buttonClickHandler(event) {
    let target = event.target;

    switch (target.id) {
        case 'rockButton':
            playerSelection = 'rock';
            break;
        case 'paperButton':
            playerSelection = 'paper';
            break;
        case 'scissorButton':
            playerSelection = 'scissor';
            break;
    }

    computerOption = ["rock","paper","scissor"];
    computerSelection = computerOption[(Math.floor(Math.random() * computerOption.length))];

    playRound(playerSelection, computerSelection);
}

button.addEventListener('click', buttonClickHandler);