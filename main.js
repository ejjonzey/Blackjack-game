$(function(){
// Might not need a controller
// var blackJackController = {
// 	playerCardsValue: 0,
// 	dealerCardsValue: 0,
// 	dealerTurn: false,

// }

// Need to build card values and link images and store them

var playerHand = [];
var dealerHand = [];
// var playerHandValue = [];
// var dealerHandValue = [];


// Deck Setup
var GameData = {
	deck: [],
	buildDeck: function() {
		var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10 J', '10 Q', '10 K', '11 A'];
		var suits = ['Hearts','Diamonds','Spades','Clubs'];
	    
	    for( var n = 0; n < names.length; n++ ) {
	        for( var s = 0; s < suits.length; s++ ) {
	            // this.deck.push(names[n] + " " + suits[s]);
	            GameData.deck.push({
	            	name: parseInt(names[n]),
	            	suit: suits[s],
	            	player: null,
	            	image: null,
	            });
	        }
	    }

	    console.log(GameData.deck);

	   
	}
}
GameData.buildDeck();



// Deal a new hand
function dealNewPlayerHand() {
	console.log('dealNewPlayerHand function is working');
	for (var i = 0; i <= 1; i++) {
		playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		// playerHandValue.push(parseInt(playerHand[i]));
	}
	console.log(playerHand);
	console.log("these are the value of the cards in playerHand")
	
}

function dealNewDealerHand() {
	console.log("dealNewDealerHand function is working");
	for (var i = 0; i <= 1; i++) {
		dealerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		// dealerHandValue.push(parseInt(dealerHand[i]));
	}
	console.log(dealerHand);
	console.log("these are the value of the cards in dealerHand")
	
}

function hitPlayer() {
	playerHand.push(GameData.deck[Math.floor(Math.random * GameData.deck.length)])
}

function hitDealer() {
	dealerHand.push(GameData.deck[Math.floor(Math.random * GameData.deck.length)])
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