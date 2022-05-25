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