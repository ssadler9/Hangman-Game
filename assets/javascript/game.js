// Words to guess
var word = ["par", "birdie", "eagle", "bogie", "fairway", "teebox", "rough", "bunker", "green", "flag", "fore"];
// letter bank for user to choose
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Need to write code that displays all letters in alaphbet
var inhtml =
    "<p>Letters still available: <br>" + letterBank + "</p>";
    document.querySelector("#letterBank").innerHTML = inhtml;
// Need to write code that hides letter after it's been chosen


// Randomly chooses words to guess
var theWord = word[Math.floor(Math.random() * word.length)];
console.log(theWord);

// Counts the length of the string, and displays _ spaces
var answerSpaces = [];
for (var i = 0; i < theWord.length; i++) {
    // answerSpaces[i] = "_";
    answerSpaces.push("_");
}
// answerSpaces is working
console.log(answerSpaces);

// tracks the keys pressed on HTML and matches the key to a letter in the word
document.onkeyup = function(event) {
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
    var incorrectGuess = [""];
    var guessesRemaining = 9;
    console.log(guessesRemaining);
    for (var i = 0; i < theWord.length; i++) {
        //  This will determine whether the userGuess is a letter in the word
        if (challengeGuess.indexOf(theWord[i])) {
            // pushes incorrectGuesses to an array
            incorrectGuess.push(challengeGuess);
            // this is also showing where the incorrect challengeGuess is in the word
            // console.log("now its time to push this index to an array");
            // incorrectGuess array is working
            // console.log(incorrectGuess);
        } else {
        	// pushes the correctGuesses to an array
            correctGuess.push(challengeGuess);
            // Display letters chosen in the corresponding blank space  
            answerSpaces.splice([i], 1, userGuess);
            console.log(answerSpaces);

            // this correctly shows which index the letter is in the word
            // console.log("user guess " + userGuess + " found at index " + i);
            // correctGuess array is working
            // console.log(correctGuess);
        }
        // for (var i = 9; i < guessRemaining.length; i--) {
        // 	if (incorrectGuess !=== theWord[i] ) {
        // 		guessRemaining[i]
        // 	} 
        // }
        }
            // sets variable to print javascript to HTML
    var html =
    "<p>Word to Guess: " + answerSpaces + "</p>";
    // querySelector places text into answerspace
    document.querySelector("#answerSpaces").innerHTML = html;
}






// if placed outside of function, letters don't fill spaces
// // sets variable to print javascript to HTML
//     var html =
//     "<p>Word to Guess: " + answerSpaces + "</p>";
//     // querySelector places text into answerspace
//     document.querySelector("#answerSpaces").innerHTML = html;


// Display letters chosen in the corresponding blank space




// Display guesses remaining
// Show available letters
// Create a box to track wins and losses