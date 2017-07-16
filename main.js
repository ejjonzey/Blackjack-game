$(function(){

var playerHand = [];
var dealerHand = [];



// Deck Setup
var GameData = {
	deck: [],
	destroyDeck: function() {
		this.deck = [];
	},
	buildDeck: function() {
		cardType = [
		{name: '2', value: 2},
		{name: '3', value: 3},
		{name: '4', value: 4},
		{name: '5', value: 5},
		{name: '6', value: 6},
		{name: '7', value: 7},
		{name: '8', value: 8},
		{name: '9', value: 9},
		{name: '10', value: 10},
		{name: 'Jack', value: 10},
		{name: 'Queen', value: 10},
		{name: 'King', value: 10},
		{name: 'Ace', value: 11},
	];
		var suits = ['hearts','diamonds','spades','clubs'];
	    
	    for( var n = 0; n < cardType.length; n++ ) {
	        for( var s = 0; s < suits.length; s++ ) {
	            GameData.deck.push({
	            	value: cardType[n].value,
	            	suit: suits[s],
	            	player: null,
	            	image: ("images/" + cardType[n].name + "_" + suits[s] + ".jpg"),
	            });
	        }
	    }
	    console.log(GameData.deck);  
	}
}
GameData.buildDeck();

function getCard(hand){
	console.log('RandNum: ', Math.floor(Math.random() * GameData.deck.length))
	console.log('RandCard: ', GameData.deck[Math.floor(Math.random() * GameData.deck.length)])
	let newCard = GameData.deck[Math.floor(Math.random() * GameData.deck.length)]
	GameData.deck = $.grep(GameData.deck, function(value){
		return value != newCard;
	})
	console.log(GameData.deck.length)
	hand.push(newCard);
}

// Deal a new hand
function dealHand(playerType) {
	let hand = []
	if(playerType === 'player') {
		hand = playerHand;
	} else {
		hand = dealerHand;
	};
	
	// console.log('function is working: ' + playerType);

	for (var i = 0; i <= 1; i++) {
		getCard(hand);
	}

	var buildCardImage1 = hand[0].image;
		var cardImage = document.createElement("a");
		var img = document.createElement("img");
		img.src = buildCardImage1;
		cardImage.appendChild(img);
		document.getElementById(`${playerType}CardsDiv`).appendChild(cardImage);
	
	var buildCardImage2 = hand[1].image;
		var cardImage = document.createElement("a");
		var img = document.createElement("img");
		img.src = buildCardImage2;
		cardImage.appendChild(img);
		document.getElementById(playerType + "CardsDiv").appendChild(cardImage);
	console.log(hand);	
}

function hitPlayer(playerType) {
	let hand = []
	if(playerType === 'player') {
		hand = playerHand;
	} else {
		hand = dealerHand;
	};
	console.log("hitPlayer function is working via hit button click");
	getCard(hand);
	var buildCardImage2 = hand[2].image;
	var cardImage = document.createElement("a");
	var img = document.createElement("img");
	img.src = buildCardImage2;
	cardImage.appendChild(img);
	document.getElementById(`${playerType}CardsDiv`).appendChild(cardImage);
	console.log(hand);	
	total = hand.reduce( function(cnt,o){ return cnt + o.value; }, 0);
	console.log("THIS IS THE PLAYER SUM " + total);

	
}
function sumhandValue(array) {
	console.log("sumhandValue working")
	var sumPlayer = 0;
	for (var i = 0; i < hand.length; i++) {
	
	sumPlayer = sumPlayer + array[i];

	}
	console.log("Player total is: " + sumPlayer);	
}


  

function sumDealerHandValue(array) {
	console.log("sumDealerHandValue working")
	var sumDealer = 0;
	for (var i = 0; i < dealerHand[i].value.length; i++) {
	
	sumDealer = sumDealer + array[i];
	
	}
	
	console.log("Dealer total is: " + sumDealer);	
}

// functions new game, hit, stand

function newGameDeal() {
	resetGame();
	dealHand('player');
	dealHand('dealer');
	console.log("dealer hand is " + dealerHand);
	console.log("player hand is " + playerHand);
	console.log(GameData.deck)
}

function resetGame() {
	$('#playerCardsDiv').html('');
	$('#dealerCardsDiv').html('');
	playerHand = [];
	dealerHand = [];
	GameData.destroyDeck();
	GameData.buildDeck();

}

function hit(){
// 	if (haValue <= 21) {

// }
hitPlayer();
console.log("This is the player's hit card " + han[2].value + " " + ha[2].suit);

// then checking total value of cards against > 21 = bust	
}

function winOrLose() {
	
//  checking total value of cards to see win or lose vs dealerhand
}

function stand() {
	// will hit dealer till >=17, if >21 dealer loses
	
	// while (dealerHandValue < 17) {
	
	// }
	console.log("stand button calling stand function working")
	hitDealer();
	
	

}

// Generate card function: pulling from the player/dealer hands and creating the dom version of the card/
function createCardsOnBoard() {

}



// // Button Event Listeners
$("#newGame").click(function(){
	//if(var i = 0, var i >= newGameDeal.length; i--);
    console.log("New Game Button Clicked.");
    newGameDeal();
    // call  hit function here
});
$("#hit").click(function(){
    console.log("Hit Button Clicked.");
    hit();
});
$("#stand").click(function(){
    console.log("Stand Button Clicked.");
    stand();
 });
    // call stand function here
});