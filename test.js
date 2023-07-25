
var expect = chai.expect;//should allow me to define chai variable to pull from the deck.js file//

describe('MyFunctions',function(){//trying to use for unit testing//
    describe('#shuffle', function(){
        it('shoudld shuffle the deck', function(){
            var x= shuffle(cards);
            expect(x).to.equal('cards shuffled')
        })
    })
})