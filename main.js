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