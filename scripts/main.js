var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardTwo === cardFour) {
	alert("Sorry, try again.")
}
else if (cardThree === cardOne) {
	alert("Sorry, try again.")
}
else if (cardTwo === cardOne) {
	alert("You found a match!")
}
else if (cardThree === cardFour) {
	alert("You found a match!")
}
else {
	alert("Repick")
} */

var board = document.getElementById("game-board") 
 
function createBoard() {
 for (var i=0; i<cards.length; i++) {

 	var cardElement = document.createElement('div');

 	cardElement.className = 'card';

 	board.appendChild(cardElement);
 }
}

// testing git//



