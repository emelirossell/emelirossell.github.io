//Defining Table
/*Input:User inputs an integer between 1-100
*Processing:If user guesses right they win! If user does not, they can keep guessing. 
*Output: Tell user if they win or if they have to keep guessing. 
*/

function numberGuess() {
	let message =
		"I'm thinking of a number between 1 and 100. " +
		"Try to guess it! " +
		"Enter a number between 1-100. ";
	let answer = 1;
	let guess;
	let numberGuesses = 0;
	do {
		guess = parseInt(prompt(message));
		if (guess < answer) {
			message = guess + " is too low. Please enter another integer.";
		} else if (guess > answer) {
			message = guess + " is too high. Please enter another integer.";
		}
		numberGuesses++;
	} while (guess != answer);
	message = guess + " is correct!";

	document.getElementById("output").innerHTML =
		message + " Congratulations! You guessed my number. It took you  " + numberGuesses + " guesses.";
}


// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
	today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;
