 // CREATE ARRAY OF WORDS
function loadScreen() {
     document.getElementById("loadScreen").className = "hidden";
     document.getElementById("Container").className= "";
         
 }
window.setTimeout(loadScreen, 4500);


 // I LEARNED THAT 'CONST' IS A WAR TO CREATE AN VARIABLE OR ARRAY THAT DOESNT CHANGE
 const word = ["oracle", "master chief", "arbiter"]

 // CHOOSING A RANDOM WORD FROM THE ARRAY BY USING RANDOM NUMBER GENERATOR BASED ON THE
 // NUMBER OF INDEXES IN THE WORD ARRAY.
 // I LEARNED THAT LET IS A FANCY TYPE OF VAR THAT IS REPLACEABLE AN TEMPORARY.
 // ONLY USED IT TO PRACTICE WITH IT. ALL 'LET'S CAN BE REPLACED BY VAR IN THIS PROJECT.
 let randNum = Math.floor(Math.random() * word.length);
 let chosenWord = word[randNum];

 //PLAY BACKGROUND MUSIC
 $('#bg-music').autoplay

 // CREATE ARRAYS FOR RIGHT AND WRONG GUESSES, TO BE DISPLAYED LATER.
 let rightLetter = [];
 let wrongLetter = [];

 //DOM CHANGES FOR UNDERSCORES DISPLAYED
 let underScoreDisplay = document.getElementsByClassName("underscore");

 let rightGuessDisplay = document.getElementsByClassName("rightGuess");

 let wrongGuessDisplay = document.getElementsByClassName("wrongGuess");

 let guessesLeftDisplay = document.getElementById("guessesLeftText");

 let guessesLeft = 10;





 // SHOWS THE INDEX NUMBER (WORD) CHOSEN IN THE CONSOLE
 console.log(chosenWord)

 // CREATE A VARIABLE FOR UNDERSCORES TO BE DYNAMIC AND REPLACEABLE
 let underScore = [];

 // CREATE A FUNCTION THAT CHANGES THE NUMBER OF UNDERSCORES 
 // BASED ON THE LENGTH OF THE CHOSEN WORD; LOGGED THE FUNCTION TO SEE ITS EFFECT.
 // I LEARNED THAT ARROW FUNCTIONS ( =>) ARE SHORTCUTS TO AVOID TYPING OUT FUNCTION.WHATEVER
 // I ALSO LEARNED THAT '.join("") WILL STRING TOGETHER ELEMENTS IN AN ARRAY.
 let generateUnderscore = () => {
     for (let i = 0; i < chosenWord.length; i++) {
         underScore.push("_");
         underScoreDisplay[0].innerHTML = underScore.join(" ");
     }
     return underScore;
 }
 console.log(generateUnderscore());

 // CREATE A FUNCTION THAT LISTENS FOR THE KEY PRESSED BY THE USER 
 // CREATE A VARIABLE CALLS USERGUESS TO ASSIGN THE KEY TO.
 document.addEventListener("keypress", (event) => {
     let userGuess = event.key;
     console.log(event.key);
     if (chosenWord.indexOf(userGuess) > -1) {
         console.log(true);

         // IF CORRECT, ADD TO RIGHTWORDS ARRAY
         rightLetter.push(userGuess);
         console.log(rightLetter);

         //  REPLACE UNDERSCORE TEXT WITH LETTER
         for  (var i= 0; i < chosenWord.length; i++ ){
             if (chosenWord[i] === userGuess){
                underScore[i] = userGuess;
             }
         }
         
         console.log(underScore)
         underScoreDisplay[0].innerHTML = underScore.join(" ");
         // ADD THE LETTER TO THE RIGHT GUESS SECTION IN HTML
         rightGuessDisplay[0].innerHTML = rightLetter;

         // ONCE THE WORD IS COMPLETED--ALERTS 'YOU WIN'!
         // I SET THE ALERT TO TRIGGER IF THE UNDERSCORE ARRAY MATCHES THE CHOSEN WORD.
         if (underScore.join("") === chosenWord) {
             alert("You Win!");
         }
     } else {
         wrongLetter.push(userGuess);
         console.log(wrongLetter);
         wrongGuessDisplay[0].innerHTML = wrongLetter;
         guessesLeft--;
         guessesLeftDisplay.textContent = guessesLeft;
         if (guessesLeft === 0) {
             alert("Game Over!");
         }



     }

 })