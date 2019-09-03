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
        let message = "";
        if (playerChoice > AIchoice){
            message = "Won"
            this.wins++;
            this.rounds++;
            return message;
        } else if (playerChoice === AIchoice){
            message = "Tie"
            this.ties++;
            this.rounds++;
            return message
        } else{
            message = "Lose"
            this.losses++;
            this.rounds++;
            return message
        }
    },
    checkRounds: function(){
        if (this.rounds === 5){
            let check = true; 
            return check;
        }
    },
}

const UI = {

}

const handlers = {
    chooseRock: function(){
        const rock = 0;
        let message = data.game(rock);
        UI.update(message);
        this.checkRounds()
    },
    choosePaper: function(){
        const paper = 1;
        let message = data.game(paper);
        UI.update(message);
        this.checkRounds();
    },
    chooseScissors: function(){
        const scissors = 2;
        let message = data.game(scissors);
        UI.update(message);
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