var form,player,game;
var database;
var gameState = 0;
var playerCount;
var canvas;

function setup(){
   
   canvas = createCanvas(400,400);
   database = firebase.database();
   game = new Game()
   game.getState()
   game.start()
    
   
}

function draw(){
    
}

