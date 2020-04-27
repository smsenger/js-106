
//assignments
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let points = 0;
let hand = [];



let dealer = document.getElementById("Dealer");
dealer.points = 0;
dealer.hand = [];



let player = document.getElementById("Player");
player.points = 0;
player.hand = [];



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
}


dButton = document.getElementById("deal-button").onclick = deal(); //FUNCTION GETS CALLED W/O CLICK

function deal() {
    //when deal button pressed(above)
    let deck = cardDeck();
    // console.log(deck)
    for(i = 0; i < 2; i++) {
        let card = deck.pop();
        // console.log(card)
        player.hand.push(card);
        getCardUI(card)
    }
    for(x = 0; x < 2; x++) {
        let card = deck.pop();
        // console.log(card)
        dealer.hand.push(card);
        getCardUI(card)
    }
}



function getCardUI(card) {     //ONLY BROKEN IMAGE LINK. this should match up card images with suit&value, then render them on screen
    cardDeck();
    let table = document.getElementById('table');
    const images = document.createElement("div");
    images.style.display = "flex";
    table.appendChild(images);
    
    const image = document.createElement("img")
    image.style.display = "flex";
    image.style.flexDisplay = "column";
    image.setAttribute('src', image.src);
    image.src = "";
    image.style.width = "30%";
    image.style.marginLeft = "20%";
    image.style.marginTop = "6%";
    image.style.marginBottom = "6%";
    images.appendChild(image);

    // picture = getElementsByTagName("img");
    // images.appendChild(picture)
    
    // const dImage = document.createElement("img")
    // dImage.style.display = "flex";
    // dImage.style.flexDisplay = "column";
    // dImage.setAttribute('src', image.src);
    // dImage.style.width = "30%";
    // dImage.style.marginLeft = "20%";
    // dImage.style.marginTop = "6%";
    // dImage.style.marginBottom = "6%";
    // images.appendChild(dImage);
    if (suits[i] == 'hearts') {
        if(card.values == 'A') {
            image.src = "images/2_of_hearts.png";
        }
        else if(values[x] == 'K') {
            image.src = "./images/king_of_hearts2.png";
        }
        else if(card.values == 'Q') {
            image.src = "images/queen_of_hearts.png";
        }
        else if(card.values == 'J') {
            image.src = "images/jack_of_hearts.png";
        }
        else if(card.values == '2') {
            image.src = "images/2_of_hearts.png";
        }
        else if(card.values == '3') {
            image.src = "images/3_of_hearts.png";
        }
        else if(card.values == '4') {
            image.src = "images/4_of_hearts.png";
        }
        else if(card.values == '5') {
            image.src = "images/5_of_hearts.png";
        }
        else if(card.values == '6') {
            image.src = "images/6_of_hearts.png";
        }
        else if(card.values == '7') {
            image.src = "images/7_of_hearts.png";
        }
        else if(card.values == '8') {
            image.src = "images/8_of_hearts.png";
        }
        else if(card.values == '9') {
            image.src = "images/9_of_hearts.png";
        }
        else if(card.values == '10') {
            image.src = "images/10_of_hearts.png";
        }
    }
    
    
    else if (card.suits == 'spades') {

        if(card.values == 'A') {
            image.src = "images/2_of_spades.png";
        }
        else if(card.values == 'K') {
            image.src = "images/king_of_spades.png";
        }
        else if(card.values == 'Q') {
            image.src = "images/queen_of_spades.png";
        }
        else if(card.values == 'J') {
            image.src = "images/jack_of_spades.png";
        }
        else if(card.values == '2') {
            image.src = "images/2_of_spades.png";
        }
        else if(card.values == '3') {
            image.src = "images/3_of_spades.png";
        }
        else if(card.values == '4') {
            image.src = "images/4_of_spades.png";
        }
        else if(card.values == '5') {
            image.src = "images/5_of_spades.png";
        }
        else if(card.values == '6') {
            image.src = "images/6_of_spades.png";
        }
        else if(card.values == '7') {
            image.src = "images/7_of_spades.png";
        }
        else if(card.values == '8') {
            image.src = "images/8_of_spades.png";
        }
        else if(card.values == '9') {
            image.src = "images/9_of_spades.png";
        }
        else if(card.values == '10') {
            image.src = "images/10_of_spades.png";
        }
    }
    
    
    
    else if (card.suits == 'diamond') {
        if(card.values == 'A') {
            image.src = "images/2_of_diamond.png";
        }
        else if(card.values == 'K') {
            image.src = "images/king_of_diamond.png";
        }
        else if(card.values == 'Q') {
            image.src = "images/queen_of_diamond.png";
        }
        else if(card.values == 'J') {
            image.src = "images/jack_of_diamond.png";
        }
        else if(card.values == '2') {
            image.src = "images/2_of_diamond.png";
        }
        else if(card.values == '3') {
            image.src = "images/3_of_diamond.png";
        }
        else if(card.values == '4') {
            image.src = "images/4_of_diamond.png";
        }
        else if(card.values == '5') {
            image.src = "images/5_of_diamond.png";
        }
        else if(card.values == '6') {
            image.src = "images/6_of_diamond.png";
        }
        else if(card.values == '7') {
            image.src = "images/7_of_diamond.png";
        }
        else if(card.values == '8') {
            image.src = "images/8_of_diamond.png";
        }
        else if(card.values == '9') {
            image.src = "images/9_of_diamond.png";
        }
        else if(card.values == '10') {
            image.src = "images/10_of_diamond.png";
        }
    }
    
    
    else if (card.suits == 'clubs') {
        if(card.values == 'A') {
            image.src = "images/2_of_clubs.png";
        }
        else if(card.values == 'K') {
            image.src = "images/king_of_clubs.png";
        }
        else if(card.values == 'Q') {
            image.src = "images/queen_of_clubs.png";
        }
        else if(card.values == 'J') {
            image.src = "images/jack_of_clubs.png";
        }
        else if(card.values == '2') {
            image.src = "images/2_of_clubs.png";
        }
        else if(card.values == '3') {
            image.src = "images/3_of_clubs.png";
        }
        else if(card.values == '4') {
            image.src = "images/4_of_clubs.png";
        }
        else if(card.values == '5') {
            image.src = "images/5_of_clubs.png";
        }
        else if(card.values == '6') {
            image.src = "images/6_of_clubs.png";
        }
        else if(card.values == '7') {
            image.src = "images/7_of_clubs.png";
        }
        else if(card.values == '8') {
            image.src = "images/8_of_clubs.png";
        }
        else if(card.values == '9') {
            image.src = "images/9_of_clubs.png";
        }
        else if(card.values == '10') {
            image.src = "images/10_of_clubs.png";
        }
    }
    image.className = 'card';
    image.innerHTML = image;
    return image;
};









function hitMe() {
    deck = cardDeck();
    for(y = 0; y < 2; y++) {
        let card = deck.pop;
        player.hand.push(card);
        getCardUI();
    }
}


















// const deck = {
//         "spades": "A", "spades": "2", "spades": "3", "spades": "4", "spades": "5", "spades": "6", "spades": "7", "spades": "8", "spades": "9", "spades": "10", "spades": "J", "spades": "Q", "spades": "K",
    
//         "diamonds": "A", "diamonds": "2", "diamonds": "3", "diamonds": "4", "diamonds": "5", "diamonds": "6", "diamonds": "7", "diamonds": "8", "diamonds": "9", "diamonds": "10", "diamonds": "J", "diamonds": "Q", "diamonds": "K",
        
//         "clubs": "A", "clubs": "2", "clubs": "3", "clubs": "4", "clubs": "5", "clubs": "6", "clubs": "7", "clubs": "8", "clubs": "9", "clubs": "10", "clubs": "J", "clubs": "Q", "clubs": "K",
    
//         "hearts":  "A", "hearts":  "2", "hearts":  "3", "hearts":  "4", "hearts":  "5", "hearts":  "6", "hearts":  "7", "hearts":  "8", "hearts":  "9", "hearts":  "10", "hearts":  "J", "hearts":  "Q", "hearts":  "K"
//     }