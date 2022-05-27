// Exercises 
// 1. Fruit
function solve(fruit,weight,price){
    weight = weight / 1000;
    price = price * weight;
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);

}

//solve('orange',2500, 1.80);



//2.GreatestCommonDivisor

function solve(x,y){
    x = Math.abs(x);
    y = Math.abs(y);
    
    while(y){
        let t = y;
        y = x % y;
        x = t;
    }
    
    console.log(x);
}

//solve(15,5)


//3.Same Numbers 

function solve(x){
    let string = x.toString();
    let result = true ;
    let newString = '';
    let sum = 0;
    
    for(let i = 0 ; i<string.length; i++){
        if(result !== false){
            if(string[i] == string[i+1]){
                newString += string[i];
            }else{
                newString += string[i];
                if(newString.length !== string.length){
                    result = false;
                }
            }
        }
        sum += Number(string[i]);
    }

    console.log(result)
    console.log(sum)
}

//solve(2242);

//4.Previous Day

function solve(year,month,day){

    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate()-1);
    console.log(`${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()}`);
}

//solve(2016,5,1);

//5.Time to Walk 

function timeToWalk(steps, stepLength, speed) {
    let length = steps * stepLength;
    let totalRestInMinutes = Math.floor(length / 500);
    let totalTime = length / speed / 1000 * 60;

    let totalTimeInSeconds = Math.ceil((totalRestInMinutes + totalTime) * 60);

    let result = new Date(null, null, null, null, null, totalTimeInSeconds);

    return result.toTimeString().split(' ')[0];


}

//solve(4000, 0.60, 5);

//6. Road Radar 


function solve(kmH, area){
    let allowSpeed = 0;
    let status = '';
    let difference = '' ;

    switch(area){
        case 'motorway' :  allowSpeed = 130; break;
        case 'interstate': allowSpeed = 90; break; 
        case 'city' : allowSpeed = 50; break;
        case 'residential' : allowSpeed = 20; break;
    }
    if(allowSpeed >= kmH){
        console.log(`Driving ${kmH} km/h in a ${allowSpeed} zone`)
    }else if (kmH > allowSpeed){
        difference = kmH - allowSpeed;
        
        if(difference <= 20){
            status = 'speeding';

        }else if(difference <= 40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowSpeed} - ${status}`)
    }
}

//solve(170, 'motorway');

//7. Cooking by Numbers 

function solve(number,arg,arg1,arg2,arg3,arg4){
    number = Number(number);
    let input = [arg,arg1,arg2,arg3,arg4];

    while(input.length>0){
        let operation = input.shift();
        switch(operation){
            case 'chop': number = number/2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number++; break;
            case 'bake': number = number *3; break;
            case 'fillet': number = number * 0.80; break;
        }
        console.log(number);
    }
}

//solve('32','chop','chop','chop','chop','chop');

// 8. Valiidity Checker

function solve(x1,y1,x2,y2){
    function integerValue(x1,y1,x2,y2){
        let xDif = x1- x2;
        let yDif = y1- y2;
        return Math.sqrt(xDif * xDif + yDif * yDif);

    }
    let firstComparisons = integerValue(x1,y1,0,0);
    let secondComparisons = integerValue(x2,y2,0,0);
    let thirthComparisons = integerValue(x1,y1,x2,y2);
    if(Number.isInteger(firstComparisons)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if(Number.isInteger(secondComparisons)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if(Number.isInteger(thirthComparisons)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }


}

//solve(3,0,0,4);
///solve(2,1,1,1);


//9. Words Uppercase 
function sovle(input) {
    
    let pattern = /\w+/g;
    let matches = input.match(pattern);
    let result = [];
 
    for (let el of matches) {
        result.push(el.toUpperCase());
    }
 
    console.log(result.join(", "))
}
/// 