// Hello This is my Lab exercises in SoftUni 

// 1.Echo Function
function echo(x){
    let lenth = x.length;
    console.log(lenth);
    console.log(x);
}

// echo('Hello, JavaScript');

//2.  String Length

function StringLength(x1,x2,x3){
    let length = x1.length + x2.length+ x3.length;
    let avarage = Math.floor(length /3);
    console.log(length)
    console.log(avarage);
}

//StringLength('chocolate','ice cream', 'cake');
//StringLength('pasta','5','22.3');

//3. Largest Number

function largestNumber(arg1,arg2,arg3){
    let max = Math.max(arg1,arg2,arg3);
    console.log(`The largest number is ${max}.`);

}

// largestNumber(5, -3, 16);
// largestNumber(-3, -5, -22.5)

//4. Circle Area

function circleArea(x){
    let result ;
    type = typeof(x);
    if(type === 'number'){
        result = Math.pow(x,2)* Math.PI;
        console.log(result.toFixed(2));    
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

//circleArea(5)
//circleArea('name');


// 5. Math Operation

function solve(arg,arg2,operation){

    let result ;
    switch(operation){
        case '+': result = arg + arg2; break;
        case '-': result = arg - arg2; break;
        case '*': result = arg * arg2; break;
        case '/': result = arg / arg2; break;
        case '%': result = arg % arg2; break;
        case '**': result = arg ** arg2; break;
    }
    console.log(result);
}

// solve(5,6,'+');
// solve(3, 5.5,'*');


// 6. Sum Of Numbers N - M 

function solve(arg,arg1){
    let result= 0;
    arg = Number(arg);
    arg1 = Number(arg1);

    for(let i = arg; i<= arg1; i++){
        result += i;
    }
    console.log(result);
}

//  solve(1,5);
//  solve(-8,20);


//7. Days of Week
function solve(x){
    let weekDays = ['none','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    if(weekDays.includes(x)){
        let index = weekDays.indexOf(x);
        console.log(index);
    }else{
        console.log('error')
    }
}

//solve('Mondass');


// 8.Days in Month

function solve(month, year){
    let days = new Date(year,month,0).getDate();
    console.log(days);
}

// solve(1,2012);
// solve(2,2021);

// 9. Square Of Stars

function solve(x){
    if(x !== undefined){
        let line = '';
        for(let i = 0; i< x; i++){
            for(let j = 0; j <x; j++){
                line += '* ';
            }
            console.log(line);
            line ='';
        }
    }else{
        let line = '';
        for(let i = 0 ; i < 5 ; i ++ ){
            
            for(let j = 0 ; j <5 ; j++){
                line += '* ';
            }
            console.log(line);
            line= '';
        }
    }
}

// solve(3)

// 10. AggregateElements

function solve(input){
    let sum = 0; 
    let string = '';
    let sumOfInverse = 0;
    for(let i = 0; i< input.length ;i++){
      sum += input[i];
      string += input[i];
      sumOfInverse += Number(1/ input[i]);
    
    }

     console.log(sum)
     console.log(sumOfInverse)
     console.log(string)
}

// solve([1,2,3]);
// solve([2, 4, 8, 16]);
