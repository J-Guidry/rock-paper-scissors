const data = {
    wins: 0,
    losses: 0,
    ties:0,
    rounds: 0,
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