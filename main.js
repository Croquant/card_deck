let deck;
function setup() {
    createCanvas(windowWidth, windowHeight);
    var a = new Deck;
    deck = a;
    console.log(a);
}

function draw() {
    for(i in deck.cards) {
        deck.cards[i].show(deck.cards[i].face*70, deck.cards[i].suit*110);
    }
    noLoop();
}