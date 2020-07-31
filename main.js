var playerScore = 0;
var computerScore = 0;


function showResult()
{
    if(savedRoundResult == "Player wins!")
        document.getElementById("winnerIndicator").innerHTML = `You won! Computer chose ${savedComputerSelection}.`;
    else if(savedRoundResult =="Computer wins")
        document.getElementById("winnerIndicator").innerHTML = `You lose. Computer chose ${savedComputerSelection}.`;
    else if(savedRoundResult == "Draw")
        document.getElementById("winnerIndicator").innerHTML = `It's a draw. Computer chose ${savedComputerSelection}.`;
    
    
}

function scoreBoardUpdate()
{
    
    
    /*const playerScore = document.querySelector('displayedPlayerScore');
    const computerScore = document.querySelector('displayedComputerScore');*/
    
    document.getElementById("displayedPlayerScore").innerHTML = `${playerScore}`;
    document.getElementById("displayedComputerScore").innerHTML = `${computerScore}`;
}


var savedRoundResult;
function addButtonFunctionality()
{
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            savedRoundResult = playRound(button.id, computerPlay());  
            //console.log(playRound(button.id, computerPlay()));  
            scoreBoardUpdate();
            showResult();
        });
    });
    
    
}

/*function game() 
{
    let playerScore = 0;
    let computerScore = 0;
    
    let i;
    while(playerScore != 3 && computerScore != 3) //Best of 5
    {
        if(playRound(playerPlay(), computerPlay()) =="Player wins!")
        {
            playerScore++;
        }
        else{
            computerScore++;
        }
        
        console.log("Computer score: " + computerScore);
        console.log("Player score: " + playerScore);
    }
 
    declareWinner(computerScore,playerScore);
}*/

var savedComputerSelection;
function playRound(playerSelection, computerSelection){

    /*console.log(computerSelection);
    console.log(playerSelection);*/
    savedComputerSelection = computerSelection;

    if (playerSelection == computerSelection) {
        return "Draw"
    }

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            playerScore++;
            return "Player wins!"
        }
        else
        {
            computerScore++;
            return "Computer wins"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerScore++;
            return "Computer wins"
        }
        else
        {
            playerScore++;
            return "Player wins!"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerScore++;
            return "Player wins!"
        }
        else
        {
            computerScore++;
            return "Computer wins"
        }
    }
}

function computerPlay(){
    let possibleMoves = ["rock", "paper", "scissors"]
    return possibleMoves[Math.floor(Math.random() * 3)];
}


function playerPlay(){

    const chosenRock = document.querySelector(".rock-button");
    const chosenPaper = document.querySelector(".paper-button");
    const chosenScissors = document.querySelector(".scissors-button");

    chosenRock.addEventListener("click", ()=>{selection="rock";});
    chosenPaper.addEventListener("click", ()=>{selection="paper";});
    chosenScissors.addEventListener("click", ()=>{selection="scissors";});

    

    /*
    alert("Choose your move (rock, paper or scissors)");
    return prompt(chosenMove).toLowerCase();   
    */
}
/*function chosenElement(e){
    selection=e.target.id;
}*/


function declareWinner(computerFinalScore, playerFinalScore){
    if(playerFinalScore > computerFinalScore)
    {
        alert("You win!");
    }
    else
    {
        alert("Computer wins!");
    }

}
scoreBoardUpdate();
addButtonFunctionality();


//game();

