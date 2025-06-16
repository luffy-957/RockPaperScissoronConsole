console.log("Rock Paper Scisor");
let playerScore = 0;
let computerScore = 0;
let rounds=prompt("Enter the numher of rounds");
function getComputerChoice()
{
    let test=Math.random();
    let computerChoice="";
    if(test<(1/3)){
        computerChoice="rock";    
    }
    else if(test<(2/3) && test>=(1/3)){
        computerChoice="paper";
    }
    else{
        computerChoice="scissor";
    }
    return computerChoice;
}

const choices = ["rock", "paper", "scissor"];

function getPlayerChoice()
{
    let playerChoice=prompt("Enter your choice: rock, paper or scissor");
    playerChoice=playerChoice.toLowerCase();
    if(choices.includes(playerChoice))
    {
        return playerChoice;
    }
    else{
        alert("Invalid choice! Please enter rock, paper or scissor.");
        return getPlayerChoice();
    }
}

function playRound(computerChoice, playerChoice)
{
    console.log("Computer choice; "+computerChoice);
    console.log("Player choice: "+playerChoice);
    if(playerChoice==computerChoice)
    {
        console.log("It's a tie!");
    }
    else if(playerChoice=="rock" && computerChoice=="scissor")
    {
        console.log("You win! Rock beats Scissor");
        playerScore++;
    }
    
    else if(playerChoice=="paper" && computerChoice=="rock")
    {
        console.log("You win! Paper beats Rock");
        playerScore++;
    }
    else if(playerChoice=="scissor" && computerChoice=="paper")
    {
        console.log("You win! Scissor beats Paper");
        playerScore++;
    }
    else{
        console.log("You Lose! "+ computerChoice+" beats "+playerChoice);
        computerScore++;
    }
    return [playerScore, computerScore];
}

function playGame()
{
    for(let i=0;i<rounds;i++)
    {
        let computerChioce=getComputerChoice();
        let playerChoice=getPlayerChoice();
        let scores= playRound(computerChioce, playerChoice);
        console.log("Player Score: "+ playerScore+ " Computer Score: "+computerScore);
    }
    console.log("Final Score: ");
    console.log("Player: "+ playerScore+" Computer: "+computerScore);
    if(playerScore>computerScore)
    {
        console.log("You win the game!");
    }
    else if(playerScore<computerScore)
    {
        console.log("You lose the game!");
    }
    else{
        console.log("It's a tie!");
    }
}
playGame();