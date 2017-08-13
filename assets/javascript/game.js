// Words to guess
var word = ["par", "birdie", "eagle", "bogie", "fairway", "teebox", "rough", "bunker", "green", "flag", "fore"];

// letter bank for user to choose
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
// tracks the keys pressed on HTML
document.onkeyup = function(event) {
    var userGuess = event.key;
    // commenting out because userGuess works
    // console.log(userGuess);

    var challengeGuess = [];

    challengeGuess.push(userGuess);
    // challengeGuess is working
    console.log(challengeGuess);
    // Trying to make the guess match a letter in the generated word
    var correctGuess = [];
    var incorrectGuess = [];
    for (var i = 0; i < theWord.length; i++) {

    	//  This will determine whether the userGuess is a letter in the word
        if (challengeGuess.indexOf(theWord[i])) {

            // challengeGuess.push(incorrectGuess);
            incorrectGuess.push(challengeGuess);
            // this is also showing where the incorrect challengeGuess is in the word
            console.log("now its time to push this index to an array");
            // incorrectGuess array is working
            // console.log(incorrectGuess);
        } else {

            correctGuess.push(challengeGuess);
            // this correctly shows which index the letter is in the word
            console.log("user guess " + userGuess + " found at index " + i);
            // correctGuess array is working
            // console.log(correctGuess);
        }
    }

}
// Blank spaces that coorelate with the hidden letters
// Display letters chosen
// Display guesses remaining
// Show available letters
// Create a box to track wins and losses