let userPoints = 0;
let computerPoints = 0;

let instructions = document.querySelector("#instructions");
let userPointsContainer = document.querySelector("#user-points");
let computerPointsContainer = document.querySelector("#computer-points");
let message = document.querySelector("#message");
let getPointContainer = document.querySelector("#get-point");
let chooseYourWeapon = document.querySelector("#choose-your-weapon");

let userChoiseContainer = document.querySelector("#user-choice");
let computerChoiseContainer = document.querySelector("#computer-choice");

let weaponbuttons = document.querySelectorAll(".weapon");
weaponbuttons.forEach(button => {
    button.addEventListener("click", startRound)
});

function startRound(e){
    let computerChoise = Math.floor(Math.random()* 3);
    let userChoise = e.currentTarget.id;
    
    if(computerChoise === 0){
        computerChoise = "rock";
    }else if(computerChoise === 1){
        computerChoise = "paper";
    }else{
        computerChoise = "scissors";
    }
    
    if((userChoise === "rock" && computerChoise === "scissors") ||
        (userChoise === "scissors" && computerChoise === "paper") ||
        (userChoise === "paper" && computerChoise === "rock")){
        userWin();
    }else if(
        (computerChoise === "rock" && userChoise === "scissors") ||
        (computerChoise === "scissors" && userChoise === "paper") ||
        (computerChoise === "paper" && userChoise === "rock")
    ){
        computerWin();
    }else{
        tie();
    }
    message.classList.remove("disabled");
    userChoiseContainer.innerText = userChoise;
    computerChoiseContainer.innerText = computerChoise;

    if(userPoints === 5 || computerPoints === 5){
        if(userPoints === 5){
            instructions.innerText = "¡You won the game!"
        }
        if(computerPoints === 5){
            instructions.innerText = "¡The computer won the game!"
        }
        chooseYourWeapon.classList.add("disabled");
        restart.classList.remove("disabled")
        restart.addEventListener("click", restartGame);
    }
}

function userWin(){
    userPoints++;
    userPointsContainer.innerText = userPoints;
    getPointContainer.innerText = "¡You won a point! 🔥";
}
function computerWin(){
    computerPoints++;
    computerPointsContainer.innerText = computerPoints;
    getPointContainer.innerText = "¡The computer won a point! 🤣";
}
function tie(){
    getPointContainer.innerText = "¡Tie! 👀";
}
function restartGame(){
    restart.classList.add("disabled");
    chooseYourWeapon.classList.remove("disabled");
    message.classList.add("disabled");

    userPoints = 0;
    computerPoints = 0;
    userPointsContainer.innerText = userPoints;
    computerPointsContainer.innerText = computerPoints;
    instructions.innerText = "Best of 5 wins!";
}