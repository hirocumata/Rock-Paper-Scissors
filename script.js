//computer randomly enters either rock, paper, scissors
function getComputerChoice(computerChoice){
    
    function getRandomArbitrary(min,max) {
        min = 1;
        max = 3;
        let number =  Math.floor(Math.random() * (max - min + 1)) + min;

        if( number == 1){
            return 'Rock'
        }else if(number == 2){
            return 'Papers'
        }else return 'Scissors'
    }
    return getRandomArbitrary()
    
}
const computerSelection = getComputerChoice(1,3);

//round of rock paper scissors with player parameters
// check all plays 
// rock beats scissors, rock losses to paper
// paper beats rock, paper losses to scissors
// scissors beats paper, losses to rock

// let the player inter a choice then convert to string+convert to lower case for better compatibility in function
let Selection = prompt("Please Rock, Paper or scissors");
const Selection1 = Selection.toString();
const playerSelection = Selection1.toLowerCase();



    function playRound(playerSelection, computerSelection) {
        //check if player is rock and who wins
        if(playerSelection == 'rock' && computerSelection == 'Scissors'){
            return result = 'I Win! Rock beats Scissors'
        }else if(playerSelection == 'rock' && computerSelection == 'Papers'){
            return result = 'I Lose! Paper beats Rock'
        }else if(playerSelection == 'rock' && computerSelection == 'Rock'){
            return result = 'Tie'
        }

        //check if player is paper and who wins
        if(playerSelection == 'paper' && computerSelection == 'Scissors'){
            return result = 'I Lose! Scissors beats Paper'
        }else if(playerSelection == 'paper' && computerSelection == 'Rock'){
            return result = 'I Win! Paper beats Rock'
        }else if(playerSelection == 'paper' && computerSelection == 'Papers'){
            return result = 'Tie'
        }

        //check if player is Scissors and who wins
        if(playerSelection == 'scissors' && computerSelection == 'Papers'){
            return result = 'I Win! Scissors beats Paper'
        }else if(playerSelection == 'scissors' && computerSelection == 'Rock'){
            return result = 'I Lose! Rock beats Scissors'
        }else if(playerSelection == 'scissors' && computerSelection == 'Scissors'){
            return result = 'Tie'
        }
        
        
        // code to validate the input...
        if(playerSelection !== 'rock' || playerSelection !== 'scissors' || playerSelection !== 'paper' ){
            return result = 'WTF is that, options are Rock, Paper, Scissors!'
        } 
        
    }
    
    

console.log("Player Choose: " +Selection);
console.log("Computer Choose: " +computerSelection);
console.log(playRound(playerSelection, computerSelection));



