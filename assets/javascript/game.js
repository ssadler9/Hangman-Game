

// Words to guess
var word = ["par", "birdie", "eagle", "bogie", "fairway", "teebox", "rough", "bunker", "green", "flag", "fore"];
var challenge = "";

// letter bank for user to choose
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


if (letterBank === "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z") {
	// blank should reveal text
	console.log();
} else {
	// incorrect answer, number of choices goes down
	console.log();
}

// Randomly chooses words to guess
var theWord = word[Math.floor(Math.random() * word.length)];
console.log(theWord);

var answerSpaces = [];
for (var i = 0; i < theWord.length; i++) {
	answerSpaces[i] = "_";
}
console.log(answerSpaces);

// tracks the keys pressed on HTML

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

var challengeGuess = [];
for (var i = 0; i < userGuess.length; i++) {
    	challengeGuess[i];
    	challengeGuess.push(userGuess);
    	console.log(challengeGuess);
    }    
}



// var challengeGuess = [];
// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }
// }

// Blank spaces that coorelate with the hidden letters

// function challengeGuess ()
// Display letters chosen

 

// Display guesses remaining

// var guessesLeft = 9

// document.onkeyup = function(keyPressed) {
// 	var keyPressed = keyPressed.key
// 	userGuess = String.fromCharCode(word);
// }

// Show available letters

// Create a box to track wins and losses


