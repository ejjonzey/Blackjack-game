$(function() {
	player1Hand = [];
	dealerHand = [];


//create Deck
var gameData = {
		deck: [],
		buildDeck = function() {
			var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10 J', '10 Q', '10 K', '11 A'];
			var suits = ['hearts','diamonds', 'clubs', 'spades'];
			for (var v = 0; v < values.length; v++) {
				for(car s = 0; s < suits.length; s++) {
					gameData.deck.push {
						name: parseInt(values[v]),
						suits: suits[s],
						player: null,
						image: null,
					};
			}
		}
		console.log(gameData.deck);
	};
};
gameData.buildDeck();

// Button Event Listeners
 $("#newGame").click(function(){
     console.log("New Game Button Clicked.");
 });


 $("#hit").click(function(){
     console.log("Hit Button Clicked.");
 });


 $("#stand").click(function(){
     console.log("Stand Button Clicked.");
 });
});