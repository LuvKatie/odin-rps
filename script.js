let computerSelection;
let playerSelection;
let selection = ["rock", "paper", "scissor"];
let rounds = 0;
let playerScore = 0;
let cpuScore = 0;
let finalResults;

// Create buttons and appends to HTML (page) body
const body = document.querySelector('body');

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
const restartBtn = document.createElement('button');

const optionDiv = document.createElement('div');
const displayContainer = document.createElement('div');
const display = document.createElement('div');

const choices = document.createElement('p');
const result = document.createElement('p');
const roundState = document.createElement('p');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorBtn.textContent = 'Scissor';

restartBtn.textContent = 'Restart Game';
restartBtn.classList.add('restart');

optionDiv.classList.add('options');
displayContainer.classList.add('score');
display.classList.add('score-info');

//Appending created elements
body.append(displayContainer, optionDiv);
displayContainer.append(display);
display.append(choices, result, roundState);
optionDiv.append(rockBtn, paperBtn, scissorBtn);

// Target buttons to add Events
const button = document.querySelectorAll('button');
const pAll = document.querySelectorAll('p');
const selectDisplay = document.querySelector('.score-info');

button.forEach(btn => btn.addEventListener('click', () => {
        playerSelection = btn.innerText;
    if (rounds <= 5) {
        game();
    }
}));

// Gameplay Functions
function computerPlay() {
    let randomNum = Math.floor(Math.random()*3);
    computerSelection = selection[randomNum];
}



function play(player, cpu) {
    player = playerSelection.toLowerCase();
    cpuCapFirst = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    choices.textContent = `${playerSelection} VS ${cpuCapFirst}`;
        // Each if statment handles each outcome between win, lose, and tie.
        if (player == "scissor" && cpu == "rock" ||
            player == "rock" && cpu == "paper" ||
            player == "paper" && cpu == "scissor") {
                result.textContent = `You lose.`;
                roundState.textContent = `Rounds: ${++rounds} Your Score: ${playerScore} Computer Score: ${++cpuScore}`;
            } else if (player == cpu) {
                result.textContent = `Tie!`;
                roundState.textContent = `Rounds: ${++rounds} Your Score: ${playerScore} Computer Score: ${cpuScore}`;
            } else {
                result.textContent = `You win!`;
                roundState.textContent = `Rounds: ${++rounds} Your Score: ${++playerScore} Computer Score: ${cpuScore}`;
            }
}

function gameReset() {
    rounds = 0;
    playerScore = 0;
    cpuScore = 0;
    selectDisplay.removeChild(restartBtn);
    pAll.forEach(p => p.textContent = '');
}
// Game start function to execute everything required to start a fresh game.
function game() {

    computerPlay();

    if (rounds == 5 && playerScore > cpuScore) {
        finalResults = 'Congratulations! You win!';
    } else if (rounds == 5 && cpuScore > playerScore) {
        finalResults = 'Dang, you lost; try again?';
    } else if (rounds == 5) {
        finalResults = 'It\'s a tie, try again?';
    }

    if (rounds == 5) {
        choices.textContent = 'Game is over! 5 Rounds have been played out.';
        result.textContent = finalResults;
        roundState.textContent = `Results: You: ${playerScore} CPU: ${cpuScore}`;

        selectDisplay.append(restartBtn);

        const restart = document.querySelector('.restart');

        restart.addEventListener('click', gameReset);
    } else {
        play(playerSelection, computerSelection);
    }
}

