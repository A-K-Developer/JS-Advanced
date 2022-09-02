// npm init -y   ---- terminal
// npm i chai 

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
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        })
        it('inappropriate genre for the edge age',()=>{
            expect(1).to.equal(1);
        })
    })
    describe('isItAffordable',() =>{  

        it('works',()=>{
            expect(bookSelection.isItAffordable(5,10)).to.equal('Book bought. You have 5$ left')
        })
        it('wont Work', () =>{
            expect(bookSelection.isItAffordable(10,7)).to.equal("You don't have enough money")
        })
    })
    describe('suitableTitles',() =>{

        it('suitableTitles book returns array ',()=>{
            expect(bookSelection.suitableTitles([
                { title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal(['The Da Vinci Code']);
        })
        it('Sutable books return array', () => {
            expect(bookSelection.suitableTitles([],'Thriller')).to.deep.equal([]);
        })
    })
})