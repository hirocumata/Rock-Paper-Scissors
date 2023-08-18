

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

const playerSelection = "paPer";

function game(){

    let round = 1;

    function playRound(playerSelection, computerSelection) {
        //convert selection toLowerCase
        const playerSelec = playerSelection.toLowerCase();
        const computerSelec = computerSelection.toLowerCase();
        
        //check if player is rock and who wins
        if(playerSelec === 'rock' && computerSelec === 'scissors'){
            return result = 'You Lose! Rock beats Scissors'
        }else if(playerSelec == 'rock' && computerSelec == 'papers'){
            return result = 'I Lose! Paper beats Rock'
        }else if(playerSelec == 'rock' && computerSelec == 'rock'){
            return result = 'Tie'
        }

        //check if player is paper and who wins
        if(playerSelec == 'paper' && computerSelec == 'scissors'){
            return result = 'I Lose! Scissors beats Paper'
        }else if(playerSelec == 'paper' && computerSelec == 'rock'){
            return result = 'You Lose! Paper beats Rock'
        }else if(playerSelec == 'paper' && computerSelec == 'papers'){
            return result = 'Tie'
        }

        //check if player is Scissors and who wins
        if(playerSelec == 'scissors' && computerSelec == 'papers'){
            return result = 'You Lose! Scissors beats Paper'
        }else if(playerSelec == 'scissors' && computerSelec == 'rock'){
            return result = 'I Lose! Rock beats Scissors'
        }else if(playerSelec == 'scissors' && computerSelec == 'scissors'){
            return result = 'Tie'
        }
        
        
    }
    
    playRound(playerSelection, computerSelection);

}



console.log(game());



