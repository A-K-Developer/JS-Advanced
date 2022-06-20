// 1st Print an array with a Given delimeter;
// join() method..
function printWithDelimeter(input,delimeter){
    return input.join(delimeter);
}
/*
printWithDelimeter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-')
*/

//2.Print every N-th Element from an Array
function printEveryNumber(arr,step){
    return arr.filter((element,index)=> index % step == 0)
}
/*
console.log(printEveryNumber(['5', 
'20', 
'31', 
'4', 
'20'], 
2))
*/

//3. Add and Remove Elements

function addRemove(arr){
    let newArr = [];
    let num = 0;

    for(let i = 0; i < arr.length; i++){
        num++;
        let command = arr[i];
        if(command == 'add'){
            newArr.push(num);
        }else{
            newArr.pop();
        }
    }
    if(newArr.length == 0){
        console.log('Empty');
    }else{
        console.log(newArr.join('\n'))
    }
}
/*
addRemove(['add', 
'add', 
'remove', 
'add', 
'add'])
*/

//4. Rotate Array

function rotateArr(arr,int){
    for(let i = 0 ; i < int ; i++){
        /*
        let curr = arr.pop();
        arr.unshift(curr);
        */
       arr.unshift(arr.pop());
    }
    console.log(arr.join(' '))
    
}

//rotateArr(['1','2','3','4'],2)

//5. 	Extract Increasing Subset from Array
function extractNumbers(arr){
    let newArr = [];
    let biggest = 0;
    while(arr.length > 0){
        let curr = arr.shift();
        if(biggest <= curr){
            biggest = curr;
            newArr.push(curr);
        }
    }
    return newArr;
}

// extractNumbers([1,2,1,4,20,15,2,1]);

//  6.	List of Names

function listOfNames(arr){
    arr.sort((a,b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i+1}.${arr[i]}`)
        
    }
}

//listOfNames(['John','Bob','Christina','Ema']);

// 7. Sorting Numbers ;

function sortNumbers(numbers){
    numbers.sort((a,b) => a - b);
    let bigNumbers = numbers.splice(numbers.length / 2, numbers.length).reverse();
    let newArr= [];

    bigNumbers.forEach(el => {
        if(numbers[0]){newArr.push(numbers.shift());};
        newArr.push(el);    
    });
    return newArr

}

//sortNumbers([1,65,3]);

// 08. Sort an Array by 2 Criteria

function sortArrByCriteria(arr){
    arr.sort((a,b) => {
        if(a.length == b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });
    return arr.join('\n');
}

//sortArrByCriteria(['alpha', 'beta', 'gamma']);

// 9. Magic Matrices

function input(input){
    let isMagical = true ;

    for(let i =0 ; i < input.length - 1; i++){
        let sumRowOne = input[i].reduce((a,b) => a + b , 0);
        let sumRowTwo = input[i+1].reduce((a,b) => a + b , 0);
        let sumCollOne = 0;
        let sumCollTwo = 0;

        for (let index = 0; index < input.length; index++) {
            sumCollOne += input[i][index];
            sumCollTwo += input[i+1][index];
        }
        if(sumRowOne !== sumRowTwo || sumCollOne !== sumCollTwo){
            isMagical = false;
        }
        return isMagical;
    }
}

input([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
/*
 function TicTacToe(moves){
         let matrix = 
             [[false, false, false],
             [false, false, false],
             [false, false, false]];
         function checkFalse(x) {
             return x == false
         }
         let i = 0;
         let gameOver = false;
         let turn = 'X';
         let haveWinner = false;
         while (gameOver == false && i < moves.length && (matrix[0].some(checkFalse) || matrix[1].some(checkFalse) || matrix[2].some(checkFalse))) {
             let j = moves[i].slice(0, 1);
             let k = moves[i].slice(2, 3);
             if (matrix[j][k] != false) {
                 console.log("This place is already taken. Please choose another!");
                 i++;
             }
             else {
                 matrix[j][k] = turn;
                 if ((matrix[j][0] === matrix[j][1] && matrix[j][1] === matrix[j][2]) ||
                     (matrix[0][k] ===  matrix[1][k] && matrix[1][k] ===  matrix[2][k]) ) {
                     gameOver = true;
                     console.log(`Player ${matrix[j][k]} wins!`);
                     haveWinner = true;
                 }
                 else if ((j == k) || (j == 2 && k == 0) || (j == 0 && k == 2)) {
                     if ((matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[2][2] !== false) ||
                     (matrix[2][0] === matrix[1][1] && matrix[1][1] === matrix[0][2] && matrix[0][2] !== false)) {
                             gameOver = true;
                             console.log(`Player ${matrix[j][k]} wins!`);
                             haveWinner = true;
                         }
                 }
                 if (i >= (moves.length - 1)){

                     gameOver = true;
                 } else {
                     i++;
                     if (turn == 'X') {
                         turn = 'O' 
                     }
                     else turn = 'X';
                 }
             }
         }
         if (!haveWinner) {
             console.log("The game ended! Nobody wins :(");
         }
         console.log(matrix[0].join('\t'));
         console.log(matrix[1].join('\t'));
         console.log(matrix[2].join('\t'));
}
    TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
    TicTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
    TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
    TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
 */

/* Orbit
function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];
    let matrix = [];
    for (let i = 0; i < width; i++) {
        matrix.push([]);
        for (let j = 0; j < height; j++) {
            matrix[i].push(0);
        }
    }

    matrix[x][y] = 1;


    while (x < matrix[0].length - 1 && y < matrix.length - 1) {
        let i = x;
        let j = y;
        while (j < matrix.length - 1) {
            j++
            matrix[i][j] = matrix[i][j-1] + 1;
        }
        j = y;
        while (i < matrix[0].length - 1) {
            i++
            matrix[i][j] = matrix[i-1][j] + 1;
        }
        x++;
        y++;
        matrix[x][y] = matrix[x - 1][y - 1] + 1;
    }
    
    x = input[2];
    y = input[3];

    if (x > 0 || y > 0) {
        while (x > 0 && y > 0) {
            let i = x;
            let j = y;
            while (j > 0) {
                j--;
                matrix[i][j] = matrix[i][j+1] + 1;
            }
            j = y;
            while (i > 0) {
                i--;
                matrix[i][j] = matrix[i+1][j] + 1;
            }
            x--;
            y--;
            matrix[x][y] = matrix[x + 1][y + 1] + 1;
        }
    }


    let i = 1

     for (let row = input[2] + 1; row < matrix.length; row++) {
        for (let col = input[3] - 1; col >= 0; col--) {
           matrix[row][col] = matrix[row - 1][col + 1]  + 1;
        }
     }

     for (let row = input[2] - 1; row >= 0; row--) {
        for (let col = input[3] + 1; col < matrix[0].length; col++) {
           matrix[row][col] = matrix[row + 1][col - 1]  + 1;
        }
     }

     for (let row = input[2] + 1; row < matrix.length; row++) {
        for (let col = input[3] + 1; col < matrix[0].length; col++) {
           matrix[row][col] = matrix[row - 1][col - 1]  + 1;
        }
     }
     for (let row = input[2] - 1; row >= 0; row--) {
        for (let col = input[3] - 1; col >= 0; col--) {
           matrix[row][col] = matrix[row + 1][col + 1]  + 1;
        }
     }

    for (let i = 0; i < matrix[0].length; i++){
        console.log(matrix[i].join(' '));
    } 
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
orbit([4, 4, 1, 2]);

*/