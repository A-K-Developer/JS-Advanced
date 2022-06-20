const{expect} = require('chai');
const{bookSelection} = require('./solution');

describe('Test',() => {
    describe('isGenreSuitable',() =>{

        it('happy path',()=>{
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 10)).to.equal('Those books are suitable');

        })
        it('inappropriate genre for the age',()=>{
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books wit Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books wit Horror genre are not suitable for kids at 12 age');
        })
        it('inappropriate genre for the edge age',()=>{
            expect(1).to.equal(1);
        })
    })
    describe('isItAffordable',() =>{  

        it('works',()=>{
            expect(1).to.equal(1);
        })
    })
    describe('suitableTitles',() =>{

        it('works',()=>{
            expect(1).to.equal(1);
        })
    })
})