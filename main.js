let deck;
function setup() {
    createCanvas(400, 200);
    var a = new Deck;
    deck = a;
    console.log(a);
}

function draw() {
    let pile = deck.cards.slice(0,5);
    console.log(pile);
    for(i in pile) {
        pile[i].show(i*70,0);
    }
    noLoop();
}