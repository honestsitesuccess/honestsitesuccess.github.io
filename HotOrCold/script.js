// Hot or Cold Game by Mike Harmanos, HonestSiteSuccess.com, 2013

$(document).ready(function() {
	var randomNumber = randomFromInterval(1,99);
	var previousDistance = 0;
	var guessInput = $('#guess');
	var guessButton = $('.guesssubmit');
	var cheatButton = $('.cheatsubmit');
	var resetButton = $('.resetsubmit');
	var replyText = $('#reply');

guessInput.focus(); 

$(document).keyup(function (e) {
	if ( guessInput.focus() && (e.keyCode === 13) ) {
		evaluateEntry(guessInput.val());
	}
});
// Button Clicks 
guessButton.click(function() {
	evaluateEntry(guessInput.val());
});

cheatButton.click(function() {
	showRandomNumber();
});

resetButton.click(function() {
	resetGame();
});

// Intervals

function randomFromInterval(from,to) {
	return Math.floor (Math.random()*(to+1)+from);
}

function numbersDistanceModule(x,y) {
	var dist = 0; //To keep numbers positive
		if(x >= y){
			dist = (x - y);
		} else {
			dist = (y - x);
		}

		return dist;
}
function evaluateEntry(inputValue) { //making sure everything is logical and nobody answers with "Red" or "Satan"
	writeReply('');
	guessInput.val('');
	guessInput.focus();

	if(isNaN(inputValue) || inputValue ==''){
		writeReply("Error: Please enter a number between 1 and 99.")
	}
	if((inputValue < 1) || inputValue >= 100){
		writeReply("Error: Please enter a number between 1 and 99.")
	} else {

	var distance = numbersDistanceModule(inputValue, randomNumber);
			
			// Measuring the gap between chosen number and guessed number.

			switch (true) {
				case ( previousDistance != 0 && previousDistance < distance): //I check if the distance has increase from previous input.
					writeReply("You are getting cold again");
				  break;
				case (distance > 0 && distance <= 10):
					writeReply("You are getting really hot.");
				  break;
				case (distance > 10 && distance <= 25):
					writeReply("You are warm.");
				  break;
				case (distance > 25 && distance <= 50):
					writeReply("Cold.");
				  break;
				case (distance > 50 && distance <= 75):
					writeReply("Very cold.");
				  break;
				case (distance > 75):
					writeReply("Ice cold.");
				  break;
				case (distance == 0):
					writeCorrectReply("Correct! The number is: " + randomNumber + ".");
				  break;
			}
			
			previousDistance = distance; //To save previous input value before leaving the function

				
		}


}

function resetGame() {
// Restart the game

randomNumber = randomFromInterval(1,99); //Generates a new random number.

writeReply(''); 
writeErrorReply(''); 

guessInput.val(''); 

previousDistance = 0; 

guessInput.focus(); //to get the focus on the box after the reset
}


function writeReply(text) {
// write reply text value on reply div in HTML;
	replyText.html("<h4>" + text + "</h4>");

}
function writeCorrectReply(text) {
// write reply text value on reply div in HTML;
	replyText.html("<h4 class='correct'>" + text + "</h4>");

}
function writeErrorReply(text) {
// write reply text value on error-reply div in HTML;
	replyText.html("<h4 class='error'>" + text + "</h4>");

}

function showRandomNumber() {
// display random number
	replyText.html("<h4> The random number is: " + randomNumber + "</h4>");
		
}

});