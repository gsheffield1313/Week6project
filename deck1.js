

const SUITS= ["clubs","diamonds","spades","hearts"]//jsuits of cards//
const VALUES =["A", "2","3","4","5","6","7","8","9","10","J","Q","K"]//values of cards//


class Deck{//deck class//
    constructor(cards){
        this.cards= cards;//dot notation for cards//
        firstDeck.deal();//deal deck of cards to players.//
    }
    

    get numberOfCards(){//a getir function to DRY code//
        return this.cards.length;
    }

    shuffle(){//for loop for the shuffled deck//
        for (let i=this.numberOfCards-1; i>0;i--){
            const newIndex = Math.floor(Math.random() * (i+1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex]= this.cards[i]
            this.cards[i]=oldValue
        }
    }
}
class Player{//player class//
    constructor(name){
        this.playerName=name;
        this.playerCards= [];
        Player=new Player();
        computer = new Player();
    }
}
 
class Card{//card class with the values using dot notation.//
    constructor(suit,value){
        this.suit= suit;
        this.value= value;
    }
}

function createDeck(){//create deck function. Map to condense numbers, words from existing array//
    return SUITS.flatMap(suit =>{
        return VALUES.map(value =>{
            return new Card(suit,value)
        })
    })
}
module.exports=createDeck


class Board{//sets up turns for the players//
    constructor(){
        this.computer= [];
        this.Player = [];
    }
}
function Game(){//game constructor//
    this.winner;
    this.loser;
}
