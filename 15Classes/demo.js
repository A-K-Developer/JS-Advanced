


class Modal {
    constructor(message){
        this.message = message;
        this.element = this._init();
        this.render();

    }

    _init(){
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `<div class ="modal">
        <p>${this.message}</p>
        <button>Ok</button>
        </div>`;
        overlay.querySelector('button').addEventListener('click', this.close.bind(this));
        window.addEventListener('keydown',(event) => {
            if(event.key == 'Escape'){
                this.close();
            }
        })
        return overlay;
    
    }
    render(){
        document.body.appendChild(this.element)
    }
    close(){
        this.element.remove();
    }

}
function create(){
    const modal = new Modal('this is massege');
    document.body.appendChild(modal.element);
    setTimeout(() => modal.close(),2000);
    modal.close();
}

/*
const cache = new Map();

function withCache(func){
    if(!cache.has(func)){
        const value = func();
        cache.set(func, value);
    }
    return cache.get(func);
}

function test(){
    console.log(`Its called`);
    return 5;
}

const cahcedTest = withCache(test);
console.log(cahcedTest)
console.log(cahcedTest)
console.log(cahcedTest)



const myMap = new Map();
myMap.set('first', 5);
myMap.set('second',3);

console.log(myMap);

console.log(myMap.entries());// Not Massive
console.log(myMap.keys());// Not Massive
console.log(myMap.values());// Not Massive

for(let entry of myMap.keys()){ // with For Of loop u can take the values
    console.log(entry)
    
}

console.log(myMap.get('second'));
myMap.set('first',8);
console.log(myMap.has('third'));
myMap.delete('first');
console.log(myMap);
console.log(myMap.set('first', 8))
console.log(myMap.size)
myMap.clear();
console.log(myMap)
myMap.set('first', 8)
myMap.set('second',3);

let sorted = Array.from(myMap).sort((a,b) => a[0] - b[0]);
console.log(sorted)

myMap.set(func, 11);
console.log(myMap);

function func(){

}


class Point{
    #initFromCoords(x,y){
        this.x = x;
        this.y = y;
    }
    #initFromPoint(point){
        this.x= point.x;
        this.y = point.y;
    }
    constructor(x,y){
        if(y == undefined && x instanceof Point){
            this.#initFromPoint(x);
        }else{
            this.#initFromCoords(x,y);
        }
        
    }

  


    static distance(p1,p2){
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y- p2.y)**2);
    }
}
const point1 = new Point(1,1);
const point2 = new Point(4,5);
console.log(Point)

class Circle {
    constructor(radius){
        this._radius = radius;
    }
    get diameter(){
        return this._radius * 2;
    }
    set diameter(value){
        this._radius = value / 2;
    }
}

const c =new Circle(5);
console.log(c.diameter);// 10

c.radius =6;
console.log(c.diameter); //12
c.diameter = 8;
console.log(c);// radius 4




class Person {

    static innerType = 'Some Person Class'

    constructor(firstName,lastName,age,email){
        if(Number.isInteger(age) == false){
            throw new TypeError('Age must be an integer');
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

    static printType(){
        console.log(this.innerType);
    }
    static compare(a,b){
        return a.age - b.age;
    }
}
const guy1 = new Person('class Person{
    constructor(firstName,lastName,age,eMail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eMail = eMail;
    }
    toString(){
        return Array.from(Person);
    }

}');
let guy2 = new Person('John','John',21,'asd@gmail.com');
const guy3 = new Person('Peter','John',30,'asd@gmail.com');
let people = [guy1,guy2,guy3];
people.sort(Person.compare)
console.log(people[0]);


//console.log(guy1 instanceof Person);//True


let guy3 = {
    name: 'May',
    age:25,
    sayHello(){
        console.log(`${this.name} ${this.age} says hello!`);
    }
};
guy2.sayHello();
console.log(guy1)

// const myMethod = guy1.sayHello; error this change his content
//myMethod();

guy2.age++;

console.log(guy1);
console.log(guy2)
*/