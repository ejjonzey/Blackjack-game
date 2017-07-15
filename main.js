$(function() {
	player1Hand = [];
	dealerHand = [];


//create Deck
var gameData = {
		deck: [],
		buildDeck: function() {
			var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10 J', '10 Q', '10 K', '11 A'];
			var suits = ['hearts','diamonds', 'clubs', 'spades'];
			for (var v = 0; v < values.length; v++) {
				for(var s = 0; s < suits.length; s++) {
					gameData.deck.push ({
						name: parseInt(values[v]),
						suits: suits[s],
						player: null,
						image: null,
					});
			}
		}
		console.log(gameData.deck);
	}
};
gameData.buildDeck();

function dealPlayerHand() {
	console.log("dealPlayerHand is working.");
	for(var i = 0; i <= 1; i++);
		playerHand.push(gameData.deck[Math.floor(Math.random() * gameData.length)]);
};
console.log(playerHand);

function dealDealerHand() {
	console.log("dealer hand is working");
	for (var i = 0; i <= 1; i++) {
		dealerHand.push(gameData.deck[Math.floor(Math.random() * gameData.length)]);
	}
		console.log(dealerHand);

}


function playerHandValue(array) {
	console.log("playerHandValue working");
	var player1 = 0;
	for(var i = 0; i < playerHandValue.length; i++) {
		player1 = plyer1 + array[i];
	}
}

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