$(function(){

var playerHand = [];
var dealerHand = [];



// Deck Setup
var GameData = {
	deck: [],
	buildDeck: function() {
		var valueOfCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10jack', '10queen', '10king', '11ace'];
		var suits = ['hearts','diamonds','spades','clubs'];
	    
	    for( var n = 0; n < valueOfCard.length; n++ ) {
	        for( var s = 0; s < suits.length; s++ ) {
	            GameData.deck.push({
	            	value: parseInt(valueOfCard[n]),
	            	suit: suits[s],
	            	player: null,
	            	image: ("images/" + parseInt(valueOfCard[n]) + "_" + suits[s] + ".jpg"),
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
		
	}
	var buildCardImage1 = playerHand[0].image;
	
		var cardImage = document.createElement("a");
		var img = document.createElement("img");
		img.src = buildCardImage1;
		cardImage.appendChild(img);
		document.getElementById("playerCardsDiv").appendChild(cardImage);
	
	var buildCardImage2 = playerHand[1].image;
		var cardImage = document.createElement("a");
		var img = document.createElement("img");
		img.src = buildCardImage2;
		cardImage.appendChild(img);
		document.getElementById("playerCardsDiv").appendChild(cardImage);
	console.log(playerHand);	
}

function dealNewDealerHand() {
	console.log("dealNewDealerHand function is working");
	for (var i = 0; i <= 1; i++) {
		dealerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		
	}
	var buildCardImage1 = dealerHand[0].image;
		var cardImage = document.createElement("a");
		var img = document.createElement("img");
		img.src = buildCardImage1;
		cardImage.appendChild(img);
		document.getElementById("dealerCardsDiv").appendChild(cardImage);
	
	var buildCardImage2 = dealerHand[1].image;
		var cardImage = document.createElement("a");
		var img = document.createElement("img");
		img.src = buildCardImage2;
		cardImage.appendChild(img);
		document.getElementById("dealerCardsDiv").appendChild(cardImage);
	console.log(dealerHand);
	
	
}

function hitPlayer() {
		console.log("hitPlayer function is working via hit button click");
		playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		var buildCardImage2 = playerHand[2].image;
		var cardImage = document.createElement("a");
		var img = document.createElement("img");
		img.src = buildCardImage2;
		cardImage.appendChild(img);
		document.getElementById("playerCardsDiv").appendChild(cardImage);
		console.log(playerHand);	
		total = playerHand.reduce( function(cnt,o){ return cnt + o.value; }, 0);
		console.log("THIS IS THE PLAYER SUM " + total);

	
}
function hitDealer() {
		console.log("hitDealer function is working via stand button click");
		dealerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
		console.log("hitDealer picked this hit card " + dealerHand[2].value + " " + dealerHand[2].suit);
		var buildCardImage2 = dealerHand[2].image;
		var cardImage = document.createElement("a");
			var img = document.createElement("img");
			img.src = buildCardImage2;
			cardImage.appendChild(img);
		document.getElementById("dealerCardsDiv").appendChild(cardImage);
		total = dealerHand.reduce( function(cnt,o){ return cnt + o.value; }, 0);
		console.log("THIS IS THE DEALER SUM " + total);
}
function sumPlayerHandValue(array) {
	console.log("sumPlayerHandValue working")
	var sumPlayer = 0;
	for (var i = 0; i < playerHand.length; i++) {
	
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
	dealNewPlayerHand();
	dealNewDealerHand();
	console.log("dealer hand is " + dealerHand);
	console.log("player hand is " + playerHand);
}

function hit(){
// 	if (playerHandValue <= 21) {

// }
hitPlayer();
console.log("This is the player's hit card " + playerHand[2].value + " " + playerHand[2].suit);

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