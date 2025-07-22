
//Gets random Computer choices

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}



function getComputerChoice(){
    let n = getRandomNumber(3);

    if(n===0){
        return "rock";
    }else if (n===1){
        return "paper";

    }else{
        return "scissors";
    }
}


//Player choice

const getHumanChoice = () => {
    let x = window.prompt("Choose 'rock', 'paper' or 'scissors':").toLowerCase();

    if (x === "rock") {
        return "rock";
    } else if (x === "paper") {
        return "paper";
    } else if (x === "scissors") {
        return "scissors";
    } else {
        alert("Invalid choice!");
        return getHumanChoice(); 
    }
};




//score

let humanScore =0;
let computerScore= 0;


function playRound(humanChoice,computerChoice){
            if(humanChoice=="rock" && computerChoice=="paper"){
                console.log("You lose!! Paper Beats rock!!");
                computerScore=computerScore+1;
                
        //rock
            }else if(humanChoice=="rock" && computerChoice=="scissors"){
                console.log("You win!! rock Beats scissors!!");
                humanScore=humanScore+1;
            }

            else if(humanChoice=="rock" && computerChoice=="rock"){
                console.log("DRAWWW!! ");}

        //paper
            else if(humanChoice=="paper" && computerChoice=="rock"){
                console.log("You win!!Paper Beats rock!! ");
            humanScore=humanScore+1;}
                
            else if(humanChoice=="paper" && computerChoice=="paper"){
                console.log("DRAWWW!!");
            }

            else if(humanChoice=="paper" && computerChoice=="scissors"){
                console.log("You losee!!Scissors Beats Paper");
            computerScore=computerScore+1}

                //scissors

            else if(humanChoice=="scissors" && computerChoice=="scissors"){
                console.log("Draww!!");}

            else if(humanChoice=="scissors" && computerChoice=="paper"){
                console.log("You Win!Scissors Beats Paper");
            humanScore=humanScore+1}

            else if(humanChoice=="scissors" && computerChoice=="rock"){
                console.log("You lose!!rock beats scissors");
            computerScore=computerScore+1}

            

}





function playgame(){
    console.log("lets start the game!!!")
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("GOOOOO!!!!!");
    
    
    

    for( let i =1;i<=5;i++){

         const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

             console.log(`Round ${i}:`);
        playRound(humanSelection, computerSelection);


            console.log(`ComputerScore:${computerScore}`);
            console.log(`HumanScorerock:${humanScore}`);
            console.log("----------------------------");


    }
      if (humanScore > computerScore) {
        console.log("🏆 You won the game!");
    } else if (humanScore < computerScore) {
        console.log("😔 You lost the game!");
    } else {
        console.log("😐 It's a draw!");
    }

    
}


playgame();




