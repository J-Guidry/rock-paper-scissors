const data = {

}

const UI = {

}

const handlers = {
    chooseRock: function(){
        const rock = 0;
        let message = data.playRound(rock);
        data.game(message);
    },
    choosePaper: function(){
        const paper = 1;
        let message =data.playRound(paper);
        data.game(message);
    },
    chooseScissors: function(){
        const scissors = 2;
        let message = data.playRound(scissors);
        data.game(message)
    },
    checkRounds: function(){
        let check = data.checkRounds();

    }
}

handlers.init()