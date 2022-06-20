/* 
    To set up tests 1st you need to:

    1. Write module.exports = {
        'here you put your functions.,
        sum,
        product,
        print(),
    }You write this in your document with all functions you ave 
    this will make this functions public .
    2.Go to your document where you want to use this functions;
    you need to write 

    const{expect} = require('chai');
    const{'nameOfFuction'} = require('file name');

    then you write the check 

    describe('Symetry Checker',() => {
        it('works',() => {
            'do nothing';
        })
    })

    3. call the test from Terminal 
    mocha fileName.js

*/
/* 
function solve(arr, start, end) {
    if (Array.isArray(arr) == false) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    return sum

}
function test(name, actual, expect){
    if(Number.isNaN(expect) && Number.isNaN(actual)){
        console.log(name, 'Pass')
    }else if( actual.toFixed(2) == expect.toFixed(2)){
        console.log(name, 'Pass');
    }else{
        console.log('Fail');
    }
}

test('Case 1',solve([10, 20, 30, 40, 50, 60], 2, 4), 120)
test('Case 2',solve([10, 20, 30, 40, 50, 60], 3, 300), 150)
test('Case 3',solve([1.1, 2.2, 3.3, 4.4, 5.5,], -3, 1) , 3.3)
test('Case 4',solve([10, 'twenty', 30, 40], 0, 2),NaN)
test('Case 5',solve([], 1, 2), 0)
test('Case 6',solve(['text'], 0, 2),NaN)

*/
/*
function createCard(face, suit){
    const faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

    if(faces.indexOf(face) == -1){
        throw new Error('Invalid face:'+ face);
    }
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',

    }
    const result = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }
    return result;

}

console.log(createCard('A','S').toString());
console.log(createCard('10','H').toString())
console.log(createCard('1','C').toString())

*/

/*
function demo(){
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    try{
        throw {messege: 'Error'}
        throw new Error('stop!')

    }catch(errr){
        console.log('cough error');
        console.log(errr)
        console.error('error')
    }
    console.log(1);
    console.log(1);

}
function start(){
    console.log(1);
    console.log(1);
    demo()
    console.log(1);
    console.log(1);

}
start()

*/


/*
function solve(arr, start, end) {
    if (Array.isArray(arr) == false) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    return sum

}

console.log(solve([10, 20, 30, 40, 50, 60], 2, 4))
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))
console.log(solve([1.3, 2.3, 3.3, 4.3, 5.3, 6.3], -3, 1))
console.log(solve([10, 'twenty', 30, 40], 0, 2))
console.log(solve([], 1, 2))
console.log(solve(['text'], 0, 2))

 */ 
