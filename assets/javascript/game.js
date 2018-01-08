// Words to guess
var word = ["par", "birdie", "eagle", "bogie", "fairway", "teebox", "rough", "bunker", "green", "flag", "fore"];
// letter bank for user to choose
var letterGuessed = [];
var letterBank = ["a ", "b ", "c ", "d ", "e ", "f ", "g ", "h ", "i ", "j ", "k ", "l ", "m ", "n ", "o ", "p ", "q ", "r ", "s ", "t ", "u ", "v ", "w ", "x ", "y ", "z "];
// Randomly chooses words to guess
var theWord = word[Math.floor(Math.random() * word.length)];
// console.log(theWord);
// Counts the length of the string, and displays _ spaces
var answerSpaces = [];
for (var i = 0; i < theWord.length; i++) {
    // answerSpaces[i] = "_";
    answerSpaces.push(" _ ");
}
printSpaces(answerSpaces);
// answerSpaces is working
// console.log(answerSpaces);
var guessesRemaining = 9;
// Game Status Function
function gameStatus(gameStatusParameter){
	if(answerSpaces.indexOf(" _ ") === -1){
		var winner = "You Win!";
		var gamestatus = "<h3>Game Status: " + winner + "</h3>";
    // querySelector places text gameStatus
    document.querySelector("#gameStatus").innerHTML = gamestatus;
        
    }
}
// tracks the keys pressed on HTML and matches the key to a letter in the word
document.onkeyup = function(event) {
	if (answerSpaces.indexOf(' _ ') === -1 || guessesRemaining === 0) {
		return;
	}

    var userGuess = event.key;
    // commenting out because userGuess works
    // console.log(userGuess);
    // pushes the userGuess into an array
    var challengeGuess = [];
    challengeGuess.push(userGuess);
    // challengeGuess is working
    // console.log(challengeGuess);
    // Trying to make the guess match a letter in the generated word
    var correctGuess = [];
    var incorrectGuess = [];
    if (theWord.indexOf(challengeGuess) !== -1) {

    } else {
        // console.log("letter does not exist in word");
        guessesRemaining--;
        // Math.floor(guessesRemaining === 0);
    };

    for (var i = 0; i < theWord.length; i++) {
        //  This will determine whether the userGuess is a letter in the word
        if (challengeGuess.indexOf(theWord[i])) {
            // pushes incorrectGuesses to an array
            incorrectGuess.push(challengeGuess);
            // incorrectGuess array is working
            // console.log(incorrectGuess);
           
        } else {
            // pushes the correctGuesses to an array
            correctGuess.push(challengeGuess);
            // Display letters chosen in the corresponding blank space  
            answerSpaces.splice([i], 1, userGuess);
            // console.log(answerSpaces);
            // correctGuess array is working
            // console.log(correctGuess);
        }
    }
    // Display letters chosen in the corresponding blank space
	letterGuessed.push(userGuess);
	// commenting out because letterGuessed is working as expected
	// console.log(letterGuessed);
	//Displaying the letters played in the game 
	var letterguessed =
        "<p>Letters you've already guessed: " + letterGuessed + "</p>";
    // querySelector places text into letterGuessed
    document.querySelector("#letterGuessed").innerHTML = letterguessed;
    // sets variable to print javascript to HTML
    printSpaces(answerSpaces);
    printGuesses(guessesRemaining);

		if (guessesRemaining === 0){
        	var loser = "Game Over"
        	var gamestatus = "<h3>Game Status: " + loser + "</h3>";
        	document.querySelector("#gameStatus").innerHTML = gamestatus;
        	parseInt(guessesRemaining);
    	} 
    gameStatus();
}
// Prints the amount of spaces avialable in a theWord
function printSpaces(answerSpacesParameter) {
    var html =
        "<h3>Word to Guess: " + answerSpacesParameter + "</h3>";
    // querySelector places text into answerspace
    document.querySelector("#answerSpaces").innerHTML = html;
}
// Shows the amount of Guesses remaining before player loses
function printGuesses(guessesRemainingParameter) {
    var guesses ="<h3>Guesses Remaining: " + guessesRemaining + "</h3>";
    // querySelector places text into answerspace
    document.querySelector("#guessesRemaining").innerHTML = guesses;
}	



printGuesses(guessesRemaining);

