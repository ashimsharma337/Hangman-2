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
    
    

    //Reset
    guessesLeft = 9;
    blanksAndSuccess = [];
    wrongLetters = [];

    //Populate blanks and sucesses with right number of blanks
    for(var i = 0; i<numberOfBlanks; i++){
        blanksAndSuccess.push("_");
    }

    
    //Change the HTML to reflect current status
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccess.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;

   

    
    
    
    
    

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

function roundComplete(){
    console.log("Win Count: "+winCount+" | Loss Count: "+lossCount+" | Guesses Left: "+guessesLeft);
    
    //Update HTML count Stats
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccess.join(" ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    //Check if user won

    if(lettersInWord.toString() == blanksAndSuccess.toString()){
        alert("You Won!!!");
        winCount++;
        

        //Change HTML to reflect round condition
        document.getElementById("winCount").innerHTML = winCount;
        startGame();
    }

    //Check if user lost
    else if(guessesLeft == 0){
        alert("You Lost");
        lossCount++;
        
        //change HTML to reflect round condition
        document.getElementById("lossCount").innerHTML = lossCount;
        startGame();

    }
}



//Main process================================================================

startGame();

//Capturing keyBoard event
document.onkeyup = function (event){
    letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(letterGuessed);
    checkLetter(letterGuessed);
    roundComplete();
    

}