//get random input from computer from three choice - 'Rock','Paper','Scissor' in a function 'getComputerChoice'
//get input from user using prompt 
//make a function that uses two parameters - computer choice and player choice, and plays a game of RockPaperScissors and returns a string that declares winner or tie 
//repeat the previous function 5 times inside a new function which counts the result of each game and displays the result at the end

//---------------------------------------------
//ask for confirmation if user want to play the game or not
//get input from user using prompt

//get random value from computer using following-
//define 'rock', 'paper', 'scissor' in a array
//get a random value from the array using mathsfloor(mathsrandom*arraylength) method
//store it in different variable

//write a function which take two parameter, one of user and one of computer
//this function determine the winner based on the principles of RockPaperScissors game-
//Rock beat scissors
//Paper beat Rock
//Scissor beak Paper
//or Tie
//make two different variables where each of them store either user or computer's number of win
//after determining the winner, the function return a string that declares the winner of tie of round like: "You Lose! Paper beats Rock"

//make a new function which contain the previous loop inside it and play it 5 times, let's say using loop and at the end declares the winner 

//ask if you want to play again and starts the madness again
//------------------------------------------------

let confirmation = confirm("Would you like to play the game of Rock-Paper-Scissors?");

if (confirmation) {
    let playerOption;
    let playerSelection;   

    let computerOption;
    let computerSelection;
    let gameRocking = true;

    let playerWinCount = 0;
    let computerWinCount = 0;
    console.log(playerWinCount); /// 
    console.log(computerWinCount); ///

    for (i=1; i<=5; i++) {
        playerOption = prompt(`Round ${i}. Please enter your input:`);
        if (typeof playerOption == "string") {
            playerOption = playerOption.toLowerCase().trim();
            if (playerOption === "rock" || playerOption === "paper" || playerOption === "scissor") {

            } else {
                alert(`You have given an invalid response. Please only write from 'Rock', 'Paper' and 'Scissor' otherwise the game will be closed as I don't know any other method to fix this typeError. Skill Issue ig :)`);
                playerOption = prompt(`Round ${i}. Please enter your input:`);
            }
        } else {
            alert(`You have given an invalid response. Please only write from 'Rock', 'Paper' and 'Scissor' otherwise the game will be closed as I don't know any other method to fix this typeError. Skill Issue ig :)`);
            playerOption = prompt(`Round ${i}. Please enter your input:`);
        }

        if(typeof playerOption == "string") {
            playerOption = playerOption.toLowerCase().trim();
            if (playerOption === "rock" || playerOption === "paper" || playerOption === "scissor") {
                playerSelection = playerOption;
            } else {
                gameRocking = false;
                break;
            }
        } else {
            gameRocking = false;
            break;
        }

        console.log(playerSelection); ///

        computerOption = ["rock","paper","scissor"];
        computerSelection = computerOption[(Math.floor(Math.random() * computerOption.length))];

        function playRound(playerSelection, computerSelection) {
            if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")) {
                alert (`You Win! ${playerSelection} beats ${computerSelection}.`);
                playerWinCount++;
                alert(`Score: ${playerWinCount} - ${computerWinCount}`);
            } else if (playerSelection === computerSelection) {
                alert (`It's a Tie! ${playerSelection} doesn't beat ${computerSelection}.`);
                playerWinCount++;
                computerWinCount++;
                alert(`Score: ${playerWinCount} - ${computerWinCount}`);
            } else {
                alert(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                computerWinCount++;
                alert(`Score: ${playerWinCount} - ${computerWinCount}`);
            }
        }

        playRound(playerSelection, computerSelection);
        console.log(playerWinCount); /// 
        console.log(computerWinCount); ///
    }
    if (gameRocking) {
        if (playerWinCount>computerWinCount) {
            alert(`Congratulations! You won by ${playerWinCount} - ${computerWinCount}.`);
        } else if (playerWinCount === computerWinCount) {
            alert(`It's a Tie by ${playerWinCount} - ${computerWinCount}.`);
        } else {
            alert(`You Lose! Score is ${playerWinCount} - ${computerWinCount}. Better luck next time.`);
        }
    }

} else {
    alert ("What the bleedin' 'ell you doin' 'angin' 'round 'ere, mate? Piss off this page before I gotta kick ya out proper, ya bloody wanker!")
}

if (confirmation) {
    alert("Thanks for playing.");
} else {
    alert("Just Kidding. Have a nice day!");
}