console.log("Rock Paper Scisor");
const moves = {
            rock: '🪨',
            paper: '📄',
            scissors: '✂️'
        };
let playerScore = 0;
let computerScore = 0;
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
        computerChoice="scissors";
    }
    return computerChoice;
}

const choices = ["rock", "paper", "scissors"];

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

function playRound(playerChoice, computerChoice)
{
    console.log("Computer choice; "+computerChoice);
    console.log("Player choice: "+playerChoice);
    if(playerChoice==computerChoice)
    {
        console.log("It's a tie!");
    }
    else if(playerChoice=="rock" && computerChoice=="scissors")
    {
        console.log("You win! Rock beats Scissors");
        playerScore++;
    }
    
    else if(playerChoice=="paper" && computerChoice=="rock")
    {
        console.log("You win! Paper beats Rock");
        playerScore++;
    }
    else if(playerChoice=="scissors" && computerChoice=="paper")
    {
        console.log("You win! Scissors beats Paper");
        playerScore++;
    }
    else{
        console.log("You Lose! "+ computerChoice+" beats "+playerChoice);
        computerScore++;
    }
    return [playerScore, computerScore];
}
let buttons=document.querySelectorAll('.choice-button');
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        let playerChoice=button.id;
        document.getElementById("player-choice").innerText = moves[playerChoice];
        let computerChoice=getComputerChoice();
        document.getElementById("computer-choice").innerText=moves[computerChoice];
        let scores=playRound(playerChoice, computerChoice);
        document.getElementById("player-score").innerHTML=scores[0];
        document.getElementById("computer-score").innerHTML=scores[1];
        if(scores[0]>=5 || scores[1]>=5)
        {
            if(scores[0]>scores[1])
            {
                alert("You win the game!");
            }
            else if(scores[0]<scores[1])
            {
                alert("Computer wins the game!");
            }
            resetScores();
        }
    });
});
function resetScores()
{
    playerScore=0;
    computerScore=0;
    document.getElementById("player-score").innerHTML=playerScore;
    document.getElementById("computer-score").innerHTML=computerScore;
    document.getElementById("player-choice").innerText = "";
    document.getElementById("computer-choice").innerText = "";
}

// function playGame()
// {
//     for(let i=0;i<rounds;i++)
//     {
//         let computerChioce=getComputerChoice();
//         let playerChoice=getPlayerChoice();
//         let scores= playRound(computerChioce, playerChoice);
//         console.log("Player Score: "+ playerScore+ " Computer Score: "+computerScore);
//     }
//     console.log("Final Score: ");
//     console.log("Player: "+ playerScore+" Computer: "+computerScore);
//     if(playerScore>computerScore)
//     {
//         console.log("You win the game!");
//     }
//     else if(playerScore<computerScore)
//     {
//         console.log("You lose the game!");
//     }
//     else{
//         console.log("It's a tie!");
//     }
// }