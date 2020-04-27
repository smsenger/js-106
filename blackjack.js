//THIS VERSION EXPERIENCES ISSUE ON LINE 85: "CANNOT READ PROPERTY OF STYLE OF NULL". NEEDS REVISION.



//create a deck of cards
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let deck = [];
let players = [];
players.id = 'players';
let currentPlayer = 0;



function cardDeck() {
    let deck = [];
    let point = 0;
    for(let i = 0; i < suits.length; i++) {             //loop through suits and cards
        for(let x = 0; x < values.length; x++) {
            if(parseInt(values[x])) {                   //establish point values for each card
                point = parseInt(values[x]);    
            }
            else if(values[x] !== "A") {
                point = 10;
            }
            else {
                point = 11;
            }
            let card = {Value: values[x], Suit: suits[i], Point: point};        //card a combo of value, suit, points
            deck.push(card);                                                    //add card to deck, end up w/52 cards
        }
    }
    return deck;
}; 

function createPlayers(num) {
    players = [];
    for(let i = 1; i <= num; i++){                                          //loop until number in argument reached
        let hand = [];                          
        let player = {name: 'player' + i, ID : 1, points: 0, Hand: hand}    //labels players, adds points, and 
        players.push(player);                                               //new player added to list of players
    }
}

function playerUI() {
    document.getElementById('players')                                      //start w/players, created in function above    
    for(let i = 0; i < players.length; i++) {
        let playerDiv = document.createElement('div');                      //creates divs for elements in game
        let playerIdDiv = document.createElement('div');
        let handDiv = document.createElement('div');
        let pointsDiv = document.createElement('div');

        pointsDiv.className = 'points';                                     //further labels game elements
        pointsDiv.id = 'points_' + 1;
        playerIdDiv = 'points_' + 1;
        playerDiv.className = 'player';
        handDiv.id = 'hand_' + 1;

        playerIdDiv.innerHTML = "player" + players[i].ID;                   //append elements to playerIdDiv
        playerDiv.appendChild(playerIdDiv);
        playerDiv.appendChild(handDiv);
        playerDiv.appendChild(pointsDiv);
        handDivId.appendChild(pointsDiv);
        document.getElementById('players').appendChild(playerDiv);          //get players, add playerDiv to it, which comes with info. created above
    }
}



function shuffleCards() {
    let deck = cardDeck();
    for(let i = 0; i < 500; i++) {                                          //switch cards 500 times
        let location1 = Math.floor((Math.random() * deck.length));          //set 2 random locations to put cards in
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];                                          //create tmp locations for pulling cards out of deck
        deck[location1] = deck[location2];                                  //card takes another card's position                                 
        deck[location2] = tmp;
    }
}; //console.log(shuffleCards());


function startBlackJack()
{
    document.getElementById('deal-button').value = "Deal";                  //access button and points, give values/display property
    document.getElementById("points").style.display = "none";
    // deal 2 cards to every player object
    currentPlayer = 0;
    cardDeck();
    shuffleCards();
    createPlayers();
    playerUI();
    deal();
    document.getElementByID('player' + currentPlayer).classList.add('active');      //get player, add currentPlayer, add 'active' to class list
}; console.log(startBlackJack());


function deal() {
    for (let i = 0; i < 2; i++) {                                        //goes through two cards for each turn
        for (let x = 0; x < players.length; x++) {                       //goes through the two players, once per 1st for loop, so 2 cards for each
            let card = deck.pop();                                      //pops off the card given from the deck, save that in var deck
            players[x].Hand.push(card);                              //pushes card into gamers' hands
            playerScore();                                          //update player score
            }
        }
    updateDeck();                                                   //update the deck
}
console.log(deal());


function cardRender(card, person) {                         //access get hand, add card to hand in visual presentation
    hand = document.getElementById('hand');
    hand.appendChild(getCardUI(card));
}



function getCardUI(card) {                                 //this should match up card images with suit&value, then render them on screen
    let el = '';
    let image = document.createElement('img')
    let table = getElementById('table');
    table.appendChild(image);
    if (card.Suit == 'hearts') {
        if(card.Value == 'A') {
            el = 'A';
            image.src = "images/2_of_hearts.png";
        }
        else if(card.Value == 'K') {
            image.src = "images/king_of_hearts.png";
        }
        else if(card.Value == 'Q') {
            image.src = "images/queen_of_hearts.png";
        }
        else if(card.Value == 'J') {
            image.src = "images/jack_of_hearts.png";
        }
        else if(card.Value == '2') {
            image.src = "images/2_of_hearts.png";
        }
        else if(card.Value == '3') {
            image.src = "images/3_of_hearts.png";
        }
        else if(card.Value == '4') {
            image.src = "images/4_of_hearts.png";
        }
        else if(card.Value == '5') {
            image.src = "images/5_of_hearts.png";
        }
        else if(card.Value == '6') {
            image.src = "images/6_of_hearts.png";
        }
        else if(card.Value == '7') {
            image.src = "images/7_of_hearts.png";
        }
        else if(card.Value == '8') {
            image.src = "images/8_of_hearts.png";
        }
        else if(card.Value == '9') {
            image.src = "images/9_of_hearts.png";
        }
        else if(card.Value == '10') {
            image.src = "images/10_of_hearts.png";
        }
    }


    else if (card.Suit == 'spades') {
        if(card.Value == 'A') {
            image.src = "images/2_of_spades.png";
        }
        else if(card.Value == 'K') {
            image.src = "images/king_of_spades.png";
        }
        else if(card.Value == 'Q') {
            image.src = "images/queen_of_spades.png";
        }
        else if(card.Value == 'J') {
            image.src = "images/jack_of_spades.png";
        }
        else if(card.Value == '2') {
            image.src = "images/2_of_spades.png";
        }
        else if(card.Value == '3') {
            image.src = "images/3_of_spades.png";
        }
        else if(card.Value == '4') {
            image.src = "images/4_of_spades.png";
        }
        else if(card.Value == '5') {
            image.src = "images/5_of_spades.png";
        }
        else if(card.Value == '6') {
            image.src = "images/6_of_spades.png";
        }
        else if(card.Value == '7') {
            image.src = "images/7_of_spades.png";
        }
        else if(card.Value == '8') {
            image.src = "images/8_of_spades.png";
        }
        else if(card.Value == '9') {
            image.src = "images/9_of_spades.png";
        }
        else if(card.Value == '10') {
            image.src = "images/10_of_spades.png";
        }
    }



    else if (card.Suit == 'diamond') {
        if(card.Value == 'A') {
            image.src = "images/2_of_diamond.png";
        }
        else if(card.Value == 'K') {
            image.src = "images/king_of_diamond.png";
        }
        else if(card.Value == 'Q') {
            image.src = "images/queen_of_diamond.png";
        }
        else if(card.Value == 'J') {
            image.src = "images/jack_of_diamond.png";
        }
        else if(card.Value == '2') {
            image.src = "images/2_of_diamond.png";
        }
        else if(card.Value == '3') {
            image.src = "images/3_of_diamond.png";
        }
        else if(card.Value == '4') {
            image.src = "images/4_of_diamond.png";
        }
        else if(card.Value == '5') {
            image.src = "images/5_of_diamond.png";
        }
        else if(card.Value == '6') {
            image.src = "images/6_of_diamond.png";
        }
        else if(card.Value == '7') {
            image.src = "images/7_of_diamond.png";
        }
        else if(card.Value == '8') {
            image.src = "images/8_of_diamond.png";
        }
        else if(card.Value == '9') {
            image.src = "images/9_of_diamond.png";
        }
        else if(card.Value == '10') {
            image.src = "images/10_of_diamond.png";
        }
    }


    else if (card.Suit == 'clubs') {
        if(card.Value == 'A') {
            image.src = "images/2_of_clubs.png";
        }
        else if(card.Value == 'K') {
            image.src = "images/king_of_clubs.png";
        }
        else if(card.Value == 'Q') {
            image.src = "images/queen_of_clubs.png";
        }
        else if(card.Value == 'J') {
            image.src = "images/jack_of_clubs.png";
        }
        else if(card.Value == '2') {
            image.src = "images/2_of_clubs.png";
        }
        else if(card.Value == '3') {
            image.src = "images/3_of_clubs.png";
        }
        else if(card.Value == '4') {
            image.src = "images/4_of_clubs.png";
        }
        else if(card.Value == '5') {
            image.src = "images/5_of_clubs.png";
        }
        else if(card.Value == '6') {
            image.src = "images/6_of_clubs.png";
        }
        else if(card.Value == '7') {
            image.src = "images/7_of_clubs.png";
        }
        else if(card.Value == '8') {
            image.src = "images/8_of_clubs.png";
        }
        else if(card.Value == '9') {
            image.src = "images/9_of_clubs.png";
        }
        else if(card.Value == '10') {
            image.src = "images/10_of_clubs.png";
        }
    }
    el.className = 'card';
    el.innerHTML = image;
    return el;
};



function playerScore() {
    for (let i = 0 ; i < players.length; i++)
    {
        pointValues(i);                                   //get points for each player
        document.getElementById('points_' + i).innerHTML = players[y].Points;       //get points by Id, add points to html

    }
}





function pointValues() {
    let points = 0;
    for(let y = 0; y < players[player].length; y++) {              //for length of gamers
            points += players[player].Hand[y].Weight;              //store value of player, hand, weight in var points
        }
            players[player].Points = points;                        //player Points assigned to points
            return points;
        }


function hitMe() {
    let card = deck.pop();                                          //take card away from deck
    players[currentPlayer].Hand.push(card);                         //add card to current player's hand
    cardREnder(card, currentPlayer);                                //render the card matched up with current player
    playerScore();                                                  //update score, deck contents, check if less than 21
    updateDeck();
    check();
}

function stay() {
    if(currentPlayer != player.length-1) {                                               //if current player isn't 1st player
        document.getElementById('player' + currentPlayer).classList.remove('active');   //remove active from current player
        currentPlayer +=1;                                                              //then go to next player
        document.getElementById('player' + currentPlayer).classList.add('active');      //then add active to that player
    }
    else {
        gameOver();                                                                     //if it is 1st player, end game
    }
}

function gameOver() {
    let winner = -1;
    let score = 0;
    for (let i = 0; i < players.length; i++) {
        if (players[i].Points > score && players[i].Points < 22) {                    //determines whether player a winner, < 22 points
            winner = i;
        }
        score = players[i].Points;                                                  //calculate points
    }
    document.getElementById('points').innerHTML = 'Winner: Player' + players[winner].ID;        //add points and winner
    document.getElementById('points').style.display = "inline-block";
}


function check() {
    if(players[currentPlayer].Points > 21) {                                                //checks if points > 21, displays lose message
        document.getElementById('points').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
        document.getElementById('points').style.display = "inline-block";
    }
}



window.addEventListener('load', function(){
    cardDeck();
    shuffleCards();
    createPlayers(2);
});


function updateDeck(){
    document.getElementById('totalCards').innerHTML = deck.length;
}