let confirmation = confirm("Would you like to play the game of Rock-Paper-Scissors?");
let exitConfirmation;

if (confirmation) {
    let playerOption;
    let playerSelection;   

    let computerOption;
    let computerSelection;

    let playerWinCount = 0;
    let computerWinCount = 0;
    console.log(playerWinCount); 
    console.log(computerWinCount); 

    for (i=1; i<=5; i++) {
        
        //loop to offset invalid values such as 'null' which we get when pressed 'Cancel' or any other string
        for (;;) {
            playerOption = prompt(`Round ${i}. Please enter your input:`)
            if (typeof(playerOption) == 'string') {
                playerOption = playerOption.toLowerCase().trim();
                if (playerOption === "rock" || playerOption === "paper" || playerOption === "scissor") {
                    playerSelection = playerOption;
                    break;
                } else {
                    alert("You have given an invalid input. Please write from 'rock', 'paper', and 'scissor'.");
                    continue;
                }
            } else {
                exitConfirmation = confirm("You have given an invalid input. Would you like to exit the game?");

                if (exitConfirmation) {
                    break;
                } else {
                    continue;
                }
            } 
        }

        if (exitConfirmation) {
            break;
        }

        console.log(playerSelection); 

        computerOption = ["rock","paper","scissor"];
        computerSelection = computerOption[(Math.floor(Math.random() * computerOption.length))];

        function playRound(playerSelection, computerSelection) {
            if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")) {
                alert (`You Win! ${playerSelection} beats ${computerSelection}. \n Score: ${++playerWinCount} - ${computerWinCount}`);
            
            } else if (playerSelection === computerSelection) {
                alert (`It's a Tie! ${playerSelection} doesn't beat ${computerSelection}. \n Score: ${++playerWinCount} - ${++computerWinCount}`);
               
            } else {
                alert(`You Lose! ${computerSelection} beats ${playerSelection}.
                \n Score: ${playerWinCount} - ${++computerWinCount}`);
                
            }
        }

        playRound(playerSelection, computerSelection);
        console.log(playerWinCount); /// 
        console.log(computerWinCount); ///
    }
        
    if (playerWinCount>computerWinCount) {
            alert(`Congratulations! You won by ${playerWinCount} - ${computerWinCount}.`);
    } else if (playerWinCount === computerWinCount) {
            alert(`It's a Tie by ${playerWinCount} - ${computerWinCount}.`);
    } else {
            alert(`You Lose! Score is ${playerWinCount} - ${computerWinCount}. Better luck next time.`);
    }

} else {
    alert ("What the bleedin' 'ell you doin' 'angin' 'round 'ere, mate? Piss off this page before I gotta kick ya out proper, ya bloody wanker!")
}

if (confirmation) {
    alert("Thanks for playing.");
} else {
    alert("Just Kidding. Have a nice day!");
}