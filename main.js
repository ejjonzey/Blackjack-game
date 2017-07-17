$(function(){

var playerType = 'player';


	DeckObjects = {
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
	        
	         DeckObjects.deck.push({
	            	value: cardType[n].value,
	            	suit: suits[s],
	            	player: null,
	            	image: ("images/" + cardType[n].name + "_" + suits[s] + ".jpg"),
	            });
	        }
	    }
	    //console.log(DeckObjects.deck);  
}
}
DeckObjects.buildDeck();

function getCard(hand){
	//console.log('RandNum: ', Math.floor(Math.random) * DeckObjects.deck.length))
	//console.log('RandCard ', DeckObjects.deck[Math.floor(Math.random() * DeckObjects.deck.length)])
	let newCard = DeckObjects.deck[Math.floor(Math.random() * DeckObjects.deck.length)]
	DeckObjects.deck = $.grep(DeckObjects.deck, function(value){
		return value != newCard;
	})
	//console.log(DeckObjects.deck.length)
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
	
	//console.log('function is working: ', playerType);
	//console.log(dealerHand);
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
document.getElementById(`${playerType}CardsDiv`).appendChild(cardImage);
//console.log(hand);	
}





function hitPlayer(playerType) {
	let hand = []
	if(playerType === 'player') {
		hand = resetGame.playerHand;
	} else {
		hand = resetGame.dealerHand;
};
	
}

	



  

// functions new game, hit, stand

function newGameDeal() {
	resetGame();
	dealHand('player');
	dealHand('dealer');
	console.log(currentHand(dealerHand, "dealer"));
	console.log(currentHand(playerHand, "player"));

	//console.log(DeckObjects.deck)
}




function currentHand(hand, playerType){
	var message = `${playerType} hand is `;
	hand.forEach((card) => {
		message += `${card.value} of ${card.suit}, `
	});
	return message;
};




function resetGame() {
	$('#playerCardsDiv').html('');
	$('#dealerCardsDiv').html('');
	playerHand = [];
	dealerHand = [];
	playerValue = 0;
	dealerValue = 0;
	DeckObjects.destroyDeck();
	DeckObjects.buildDeck();

}



function hit(){

	//player value with cards added
for(i = 0; i < dealerHand.length; i++){
		var cardValue = playerHand.length[i].value;
		playerValue += cardValue;
	}
for(i = 0; i < dealerHand.length; i++){
	var cardValue = dealerHand[i].value;
	dealerValue += cardValue;
}
	

	}
	


hitPlayer();
//console.log("This is the player's hit card " + hand.value + " " + hand.suit);

//then checking total value of cards against > 21 = bust	


function winOrLose() {
// player value with cards added.
for(i = 0; i < playerHand.length; i++){
	var cardValue = playerHand[i].value;
	playerValue  += cardValue;
}

//dealer value with crads added.
for(i = 0; i < dealerHand.length; i++){
	var cardValue = dealerHand[i].value;
	dealerValue += cardValue;
}
//  checking total value of cards to see win or lose vs dealerhand
if(playerValue > dealerValue){
	alert('player wins');
	console.log('player wins');
} else{
	alert('dealer wins');
	console.log('dealer wins');

};
};




function stand() {
	winOrLose();
	// will hit dealer till >=17, if >21 dealer loses
	
	// while (dealerHandValue < 17) {
	
	// }
	console.log("stand button calling stand function working")
	//hitDealer();
	
	

}



// // Button Event Listeners
$("#newGame").click(function(){
    //console.log("New Game Button Clicked.");
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