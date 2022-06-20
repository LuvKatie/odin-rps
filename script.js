let computerSelection;
let playerSelection;
let selection = ["rock", "paper", "scissor", "scissors"];
let rounds = 0;

// Create buttons and appends to HTML (page) body
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
const body = document.querySelector('body');
const optionDiv = document.createElement('div');
const displayContainer = document.createElement('div');
const display = document.createElement('div');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorBtn.textContent = 'Scissors';

optionDiv.classList.add('options');
displayContainer.classList.add('score');
display.classList.add('score-info');

//Appending created elements
body.append(displayContainer, optionDiv);
displayContainer.append(display);
optionDiv.append(rockBtn, paperBtn, scissorBtn);

// Target buttons to add Events
const button = document.querySelectorAll('button');
const selectDisplay = document.querySelector('.score-info');

button.forEach(btn => btn.addEventListener('click', () => {
    playerSelection = btn.innerText;
    game();
}));

// Gameplay Functions
function computerPlay() {
    let randomNum = Math.floor(Math.random()*3);
    computerSelection = selection[randomNum];
}



function play(player, cpu) {
    player = playerSelection.toLowerCase();
        // Account for player input: Scissors (plural)
        if (player == "scissors") {
            player = "scissor";
        }

        // Each if statment handles each outcome between win, lose, and tie.
        if (player == "scissor" && cpu == "rock" ||
            player == "rock" && cpu == "paper" ||
            player == "paper" && cpu == "scissor") {

            selectDisplay.textContent = `${cpu} beats ${player}! You lose.`;
            selectDisplay.textContent += "Rounds:" + ++rounds;

        } else if (player == "scissor" && cpu == "paper" ||
                    player == "rock" && cpu == "scissor" ||
                    player == "paper" && cpu == "rock") {

            selectDisplay.textContent = `${player} beats ${cpu} You win!`;
            selectDisplay.textContent += "Rounds:" + ++rounds;

        } else {
            selectDisplay.textContent = `${player} and ${cpu} results in a tie!`;
            selectDisplay.textContent = "Rounds:" + ++rounds;
        }
}

function gameReset() {
    rounds = 0;
}

// Account for Cancel or Empty inputs on prompt
//------------------------------------------------
function caseCheck(player) {
    if (player == null || player == undefined || !(selection.includes(player.toLowerCase()))) {
        selectDisplay.textContent = "Please enter an valid option!";
        selectDisplay.textContent = `You entered: ${player}`;
        check = false;
    } else {
        check = true;
    }
}

// Game start function to execute everything required to start a fresh game.
function game() {

    if (rounds == 5) {
        selectDisplay.textContent = 'Game is over! 5 Rounds have been played out.';
        gameReset();
    }

    computerPlay();

    // Check for error options and case sensitivity
    // ------------------------------------------------
    // for (i = 0; i < 5; i++) {
    caseCheck(playerSelection);
        if (check == true) {
            play(playerSelection, computerSelection);
        }
    //      else {
    //         break;
    //     }
    // }

}

