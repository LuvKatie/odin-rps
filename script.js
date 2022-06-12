let computerSelection;
let playerSelection;
let selection = ["rock", "paper", "scissor", "scissors"];
let rounds = 0;



function computerPlay() {
    let randomNum = Math.floor(Math.random()*3);
    computerSelection = selection[randomNum];
}



function play(player, cpu) {
    for (i = 0; i < 5; i++) {
        computerPlay();
        playerSelection = prompt("Please choose either Rock, Paper, or Scissors");
        let playerLowCase;


        // Account for Cancel or Empty inputs on prompt
        if (playerSelection == null || playerSelection == undefined || !(selection.includes(playerSelection))) {
            console.log("Please enter an valid option!");
            console.log(`You entered: ${playerSelection}`);
            return;
        } else {
            playerLowCase = playerSelection.toLowerCase();
        }

        // Account for player input: Scissors (plural)
        if (playerLowCase == "scissors") {
            playerLowCase = "scissor";
        }

        // Each if statment handles each outcome between win, lose, and tie.
        if (playerLowCase == "scissor" && computerSelection == "rock" ||
            playerLowCase == "rock" && computerSelection == "paper" ||
            playerLowCase == "paper" && computerSelection == "scissor") {

            console.log(`${computerSelection} beats ${playerLowCase}! You lose.`);
            console.log("Rounds:" + ++rounds);
        // Win conditions
        } else if (playerLowCase == "scissor" && computerSelection == "paper" ||
                    playerLowCase == "rock" && computerSelection == "scissor" ||
                    playerLowCase == "paper" && computerSelection == "rock") {

            console.log(`${playerLowCase} beats ${computerSelection} You win!`);
            console.log("Rounds:" + ++rounds);
        // Tie condition
        } else {
            console.log(`${playerLowCase} and ${computerSelection} results in a tie!`);
            console.log("Rounds:" + ++rounds);
        }
    }
}