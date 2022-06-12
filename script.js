let computerSelection;
let playerSelection;
let selection = ["rock", "paper", "scissor", "scissors"];
let rounds = 0;



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

            console.log(`${cpu} beats ${player}! You lose.`);
            console.log("Rounds:" + ++rounds);
        // Win conditions
        } else if (player == "scissor" && cpu == "paper" ||
                    player == "rock" && cpu == "scissor" ||
                    player == "paper" && cpu == "rock") {

            console.log(`${player} beats ${cpu} You win!`);
            console.log("Rounds:" + ++rounds);
        // Tie condition
        } else {
            console.log(`${player} and ${cpu} results in a tie!`);
            console.log("Rounds:" + ++rounds);
        }
}

function gameReset() {
    rounds = 0;
}

function caseCheck(player) {
    // Account for Cancel or Empty inputs on prompt
    if (player == null || player == undefined || !(selection.includes(player.toLowerCase()))) {
        console.log("Please enter an valid option!");
        console.log(`You entered: ${player}`);
        check = false;
    } else {
        check = true;
    }
}

function game() {

    gameReset();

    for (i = 0; i < 5; i++) {
    playerSelection = prompt("Please choose either Rock, Paper, or Scissors");
    computerPlay();
    caseCheck(playerSelection);
        if (check == true) {
            play(playerSelection, computerSelection);
        } else {
            break;
        }
    }

}