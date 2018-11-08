// Create secret number
var secretNumber = 4;

// Ask user for guess
var  stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// Check if guess is right
if (guess === secretNumber) {
    alert("You got it right")
}
// Otherwise, you got it wrong
else if (guess > secretNumber) {
    alert("Too high. Guess again")
} else {
    alert("Too low. Guess again")
}
