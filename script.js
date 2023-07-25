


startGame()//initialize game.
function startGame(){
    const deck = new Deck();
    deck.shuffle()


    const deckMidpoint = Math.ceil(deck.numberOfCards/2)//makes it so the deck of cards is under 26//
    playerDeck = new Deck(deck.cards.slice(0,deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint,deck.numberOfCards))

    console.log(playerDeck)
    console.log(computerDeck)
}