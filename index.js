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
            let result = "You won the game";
            this.resetGame();
            return result;
        } else {
            let result = "You lost the game";
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
            UI.endgame(result);
        }
    }
}