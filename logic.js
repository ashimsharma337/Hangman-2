//Global variable=============================================================
var flowerNames = ["rose","tulip","lotus","sunflower","marygold","jasmine"];
var wordToGuess = "";
var lettersInWord = []; 
var numberOfBlanks = 0;
var blanksAndSuccess = [];
var wrongLetters = [];

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


function checkLetter(letter){

    //check if letter in code exist at all 
     var isLetterInWord = false;

     for(var i = 0; i<numberOfBlanks; i++){
         if(wordToGuess[i] == letter){
             isLetterInWord = true;
         }
     }
     //check if guessed letter exist in word to guess, and populate blanks and success
     if(isLetterInWord){
         for(var i = 0; i<numberOfBlanks; i++){
         if(wordToGuess[i] == letter){
             blanksAndSuccess[i] = letter;  
         }

         }
     }

     else{
         wrongLetters.push(letter);
         guessesLeft--;
     }

     console.log(blanksAndSuccess);
}

//Main process================================================================

startGame();

//Capturing keyBoard event
document.onkeyup = function (event){
    letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(letterGuessed);
    checkLetter(letterGuessed);

}