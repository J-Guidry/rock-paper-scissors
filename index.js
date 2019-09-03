const data = {

}

const UI = {

}

const handlers = {
    setEventListeners: function(){
       const messageBox = document.querySelector("#message");
       const rounds = document.querySelector("#rounds");
       const wins = document.querySelector("#wins");
       const losses = document.querySelector("#losses");
       const ties = document.querySelector("#ties");

    },
    chooseRock: function(event){
        console.log("hi");
    },
    init: function(){
        this.setEventListeners();
    }
}

handlers.init()