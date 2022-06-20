
/* 
function sortArray(arr,type){
    if(type == 'asc'){
        arr.sort((a,b) => a - b);
    }else{
        arr.sort((a,b) => b - a)
    }
    return arr
}
or

function sortArray(arr,type){
    methods = {
        asc: (a,b) => a - b,
        desc: (a,b) => b - a,
    }
    arr.sort(methods[type]);
    return arr;
}

or 

function sortArray(arr,type){
    return arr.sort((a,b) => (type == 'asc'? a - b : b-a))
}
 */ 

/* 
function argumentInfo(){
    let arr = Array.from(arguments);
    for(let arg of arr){
        console.log(`${typeof arg}: ${arg}`);
    }
}

function getFibonator(){
    let prev = 0;
    let curr = 1;

   return function(){
        const next = prev + curr ;
        prev = curr ;
        curr = next ;

    return prev 

   }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
*/
/* 
function add(n){
    const inner = function (a){
        n += a;
        return inner;
    };
    inner.toString = function(){
        return n;
    }
    return inner;
}
console.log(add(1).toString());
let sum = a => b => b? sum(a+b): a; console.log(sum(10)(20)(3)(2)())
console.log(add(1)(6)(-3).toString());;
*/

/* 
function solution() {
    
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10, 
            fat: 10,
            flavour: 10
        }
    }

    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0        
    }

    const func = {
        restock: (arg1, arg2) => {
            storage[arg1] += Number(arg2);
            return `Success`;
        },
        prepare: (arg1, arg2) => {
            let result = '';
            let recipe = recipes[arg1];
            for (let r in recipe) {
                let outOfStorage = recipe[r] * arg2;
                if (storage[r] > outOfStorage) {
                    storage[r] -= outOfStorage;
                    result = 'Success'
                }
                else {
                    return `Error: not enough ${r} in stock`;
                }
            }
            return result;
        },
        report: () => {
            let array = [];
            Object.keys(storage)
            .forEach((key) => array.push(`${key}=${storage[key]}`));
            return array.join(' ');
        }
    }

    function doSomething(input) {
        let args = input.split(' ');
        return func[args[0]](args[1], args[2]);

    }

    return doSomething
}


console.log(solve('restock carbohydrate 10'));
console.log(solve('restock flavour 10'));
console.log(solve('prepare apple 1'));
console.log(solve('restock fat 10'));
console.log(solve('prepare burger 1'));
console.log(solve('report'));

*/
/*

function calculator(){
    let field1 = null;
    let field2 = null;
    let result = null;
    return {
        init,
        add,
        subtract
    };
    function init(f1,f2,fr){
        field1 = document.querySelector(f1)
        field2 = document.querySelector(f2) 
        result = document.querySelector(fr)
    }
    function add(){
        result.value = Number(field1.value) + Number(field2.value);
    }
    function subtract(){
        result.value = Number(field1.value) - Number(field2.value);
    }
}
*/
/*
function getArticleGenerator(articles){
    const div = document.getElementById('content');


    return function(){
        const article = articles.shift();
        if(article != undefined){
            const element = document.createElement('article');
            element.textContent = article;
            div.appendChild(element)
        }
    }
}
 */

/*5. Functional Sum 
function add(a) {
    let sum = a;

    function addToInternal(b) {
        sum += b;
        return addToInternal;
    }

    addToInternal.toString = () => {
        return sum;
    }

    return addToInternal;
}

console.log(add(1)(6)(-3).toString());
*/

/* 6.Central Cinema
function solve() {
    const [name, hall, ticketPrice] = document.querySelectorAll("#container input");
    const movieSection = document.querySelector("#movies ul");
    const archiveSection = document.querySelector("#archive ul");
    const clearButton = archiveSection.parentElement.querySelector("button");
    clearButton.addEventListener("click", ()=> {
        archiveSection.innerHTML = "";
    })
    const addMovieButton = document.querySelector("#container button");
    addMovieButton.addEventListener("click", addMovie);
 
 
 
    function addMovie(e) {
        e.preventDefault();
        if (name.value !== "" && hall.value !== "" && ticketPrice.value != "" && !isNaN(Number(ticketPrice.value))) {
            const movie = document.createElement("li");
            movie.innerHTML =
                `<span>${name.value}</span>
                 <strong>Hall: ${hall.value}</strong>
                <div>
                    <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                    <input placeholder="Tickets Sold">
                    <button >Archive</button>
                </div>`
            movieSection.appendChild(movie);
 
            const button = movie.querySelector("div button");
            button.addEventListener("click", addToArchive);
            name.value = "";
            hall.value = "";
            ticketPrice.value = "";
        }
    }
 
 
    function addToArchive(e) {
        const inputValue = e.target.parentElement.querySelector("input");
        const ticketPrice = e.target.parentElement.querySelector("strong");
        const movieName = e.target.parentElement.parentElement.querySelector("span");
        if (inputValue.value != "" && !isNaN(Number(inputValue.value))) {
            const income = Number(inputValue.value) * Number(ticketPrice.textContent);
 
            const liEl = document.createElement("li");
            liEl.innerHTML = `<span>${movieName.textContent}</span>
                              <strong>Total amount: ${income.toFixed(2)}</strong>
                              <button>Delete</button>`
 
            const button = liEl.querySelector("button");
            button.addEventListener("click", deleteEntry);
            archiveSection.appendChild(liEl);
        }
 
        e.target.parentElement.parentElement.remove();
    }
 
    function deleteEntry(e) {
        e.target.parentElement.remove();
    }
}

*/