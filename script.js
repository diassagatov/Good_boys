
var cards = document.getElementsByClassName('card');

const openDeck = () =>{
    for (var i = 0; i < cards.length; i++) {
        cards.item(i).classList.add('active_card');
    }
}

const closeDeck = () =>{
    for (var i = 0; i < cards.length; i++) {
        cards.item(i).classList.remove('active_card');
    }
}

const operateDeck = () =>{
    if(cards.item(0).classList.contains('active_card')) closeDeck();
    else openDeck();
}