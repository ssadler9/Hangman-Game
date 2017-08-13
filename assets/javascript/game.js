

// Words to guess
var word = ["par", "birdie", "eagle", "bogie", "fairway", "teebox", "rough", "bunker", "green", "flag", "fore"];
var challenge = "";

// letter bank for user to choose
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// if (letterBank === "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z") {
// 	// blank should reveal text
// 	console.log();
// } else {
// 	// incorrect answer, number of choices goes down
// 	console.log();
// }

// Randomly chooses words to guess
var theWord = word[Math.floor(Math.random() * word.length)];
console.log(theWord);


// Counts the length of the string, and displays _ spaces
var answerSpaces = [];
for (var i = 0; i < theWord.length; i++) {
	answerSpaces[i] = "_";
}
console.log(answerSpaces);

// tracks the keys pressed on HTML
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);


// pushes the userGuess into an empty array
var challengeGuess = [];
for (var i = 0; i < userGuess.length; i++) {
    	challengeGuess[i];
    	challengeGuess.push(userGuess);
    	console.log(challengeGuess);
   
 } 
    // Trying to make the guess match a letter in the generated word
    	var correctGuess = [];
    	for (var i = 0; i < theWord.length; i++) {
    		theWord[i]
    	if (challengeGuess.indexOf(theWord[i])) {
	// 	console.log("no");
	// } else if{
	// 	console.log("yes");
	// }
		challengeGuess.push(correctGuess);
   		console.log(correctGuess);
   }
}
}





// Blank spaces that coorelate with the hidden letters


// Display letters chosen

 

// Display guesses remaining





// Show available letters

// Create a box to track wins and losses


