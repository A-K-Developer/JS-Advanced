// Arrays LAB
/*
//1.Even Position Element
function evenPositionElement(input){
    let currentNumber;
    let result = [];
    
    for(let i = 0; i< input.length; i++){
        if(i % 2 == 0){
            result.push(input[i]);
        }
    }
    console.log(result.join(' '));
}

//evenPositionElement(['20','30','40','50','60']);

//2.Last K Number Sequence

function lastKNumber(n,k){
    let array = [1];
    let j, count = 0, sum = 0;

    for(let i = 1; i < n; i++){
        j = i - 1, count = 0, sum = 0;

        while(j >= 0 && count < k){
            sum += array[j];
            j--;
            count++;
        }
        array[i] = sum ;
    }
    console.log(array.join(', '))
}

// lastKNumber(6,3);


//3. Sum First Last 

function sumFirstLast(array){
    let first = Number(array.shift());
    let last = Number(array.pop());
    console.log(first + last)
}

sumFirstLast(['20','30','40'])


//4. Negative/ Positive number :

function negativePositive(input){
    let newArr = [];
    while(input.length > 0){
        let current = input.shift();
        if(current<0){
            newArr.unshift(current);
        }else{
            newArr.push(current);
        }
    }
    newArr.forEach(x =>{
        console.log(x);
    })
}

negativePositive([7,-2,8,9]);


//5. Smallest Two Numbers

function solve(input){
    let arr = input;
    let smallest = smallestNumber(input);
    let index = arr.indexOf(smallest);
    arr.splice(index, 1);
    let secondNumber = smallestNumber(input);
    
    function smallestNumber(x){
        let lowerNumber = x[0];
        for(let i = 1 ; i <= x.length ; i++){
            let current = x[i];
            if(current < lowerNumber){
                lowerNumber = current;
            }
        }
        return lowerNumber;
    }
   console.log(smallest + ' ' + secondNumber);
}

solve([30,15,50,5]);

*/
