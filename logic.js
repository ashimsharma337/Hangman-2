//Global variable=============================================================
var flowerNames = ["rose","tulip","lotus","sunflower","marygold","jasmine"];
var wordToGuess = "";
var lettersInWord = []; 
var numberOfBlanks = 0;
var blanksAndSuccess = [];

//Count Tracker
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;




//Functions===================================================================

function startGame(){

    wordToGuess = flowerNames[Math.floor(Math.random()*flowerNames.length)];
    lettersInWord = wordToGuess.split("");
    numberOfBlanks = lettersInWord.length;
    
    for(var i = 0; i<numberOfBlanks; i++){
        blanksAndSuccess.push("_");
    }
    

    //Debugging/Testing

    console.log(wordToGuess);
    console.log(lettersInWord);
    console.log(numberOfBlanks);
    console.log(blanksAndSuccess);



}


//Main process================================================================

startGame();