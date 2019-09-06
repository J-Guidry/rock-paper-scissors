const data = {
    wins: 0,
    losses: 0,
    ties:0,
    rounds: 0,
    game: function(playerChoice){
        if (this.rounds < 5){
            let message = this.playRound(playerChoice);
            return message;
         }
    },
    AISelection: function(){
        AIchoice = Math.floor(Math.random() * 3)
        return AIchoice;
    },
    playRound: function(playerChoice){
        const AIchoice = this.AISelection();
        let result = {message: "", player: playerChoice, AI: AIchoice};

        if ((playerChoice === 0 && AIchoice === 2) ||
            (playerChoice === 1 && AIchoice === 0) ||
            (playerChoice === 2 && AIchoice === 1)){
            result.message = "Won"
            this.wins++;
            this.rounds++;
            return result;
        } else if ((playerChoice === 2 && AIchoice === 0) ||
        (playerChoice === 0 && AIchoice === 1) ||
        (playerChoice === 1 && AIchoice === 2)){
            result.message = "Lose"
            this.losses++;
            this.rounds++;
            return result;
        } else if (playerChoice === AIchoice){
            result.message = "Tie"
            this.ties++;
            this.rounds++;
            return result;
        }
    },
    checkRounds: function(){
        if (this.rounds === 5){
            let check = true; 
            return check;
        }
    },
    endGame: function(){
        if (this.wins > this.losses){
            let result = "You won the game!";
            this.resetGame();
            return result;
        } else {
            let result = "You lost the game!";
            this.resetGame();
            return result;
        }
    },
    resetGame: function(){
        this.wins = 0;
        this.losses = 0;
        this.ties = 0;
        this.rounds = 0;
    }
}

const UI = {
    update:function(result){
        if (result.message === "Won"){
            this.youWon(result);
        } else if(result.message === "Lose"){
            this.youLost(result);
        } else {
            document.querySelector("#message").textContent = "You tied!"
            document.querySelector("#losses").textContent++;

        }
 },
    youWon: function(result){
        let message = document.querySelector("#message");
        let wins = document.querySelector("#wins");
        if (result.player === 0 && result.AI === 2) {
            message.textContent = "You won! Rock beats paper.";
        } else if (result.player === 1 && result.AI === 0){
            message.textContent = "You won! Paper beats scissors.";
        } else if(result.player === 2 && result.AI === 1){
            message.textContent = "You won! Scissors beats paper";
        }
        wins.textContent++;

 },
    youLost: function(result){
        let message = document.querySelector("#message");
        let losses = document.querySelector("#losses");
        if (result.player === 2 && result.AI === 0) {
            message.textContent = "You lost! Rock beats paper.";
        } else if (result.player === 0 && result.AI === 1){
            message.textContent = "You lost! Paper beats scissors.";
        } else if(result.player === 1 && result.AI === 2){
            message.textContent = "You lost! Scissors beats paper";
        }
        losses.textContent++;
    },
    endGame: function(result){
        let message = document.querySelector("#message");
        message.textContent = result;
        this.resetButton();
    },
    resetButton: function(){
        const resetBox = document.querySelector("#resetBox");
        const button = document.createElement("button");
        resetBox.style.display = "block";
        button.id = "resetButton";
        button.textContent = "Reset Game";
        button.onclick = this.resetScore;
        resetBox.appendChild(button);
    },
    resetScore: function(){
        document.querySelector("#message").textContent = "Choose One to Start";
        document.querySelector("#rounds").textContent = 0;
        document.querySelector("#wins").textContent = 0;
        document.querySelector("#losses").textContent = 0;
        document.querySelector("#ties").textContent = 0;
    }
}
const handlers = {
    chooseRock: function(){
        const rock = 0;
        let result = data.game(rock);
        UI.update(result);
        this.checkRounds()
    },
    choosePaper: function(){
        const paper = 1;
        let result = data.game(paper);
        UI.update(result);
        this.checkRounds();
    },
    chooseScissors: function(){
        const scissors = 2;
        let result = data.game(scissors);
        UI.update(result);
        this.checkRounds();
    },
    checkRounds: function(){
        let check = data.checkRounds();
        if (check === true){
            let result = data.endGame();
            UI.endGame(result);
        }
    }
}