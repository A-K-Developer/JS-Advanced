function calorie(input){
    let result = {};

    for(let i = 0 ; i < input.length; i++){
        result[input[i]] = Number(input[i+1]);
        i++
    }
    console.log(result)
}


// calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

//2.	Construction Crew

function constructionCrew(obj){
    if(obj.dizziness == true){
        obj.levelOfHydrated += obj.weight * obj.experience/10;
        obj.dizziness = false;
    }
    return obj
}
/*
console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));
console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
  */

  // 3.  Car Factory 

function carFactory(wantedCar){
    let engines = [{power: 90, volume: 1800},{power:120, volume:2400},{power: 200, volume:3500}];
    let carriages = [{type: 'hatchback', color: wantedCar.color},{type: 'coupe', color: wantedCar.color}];
    let wheelsize = wantedCar.wheelsize % 2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

    return {
        model: wantedCar.model,
        engine: engines.filter(e => e.power >= wantedCar.power)[0],
        carriage: carriages.filter( c => c.type == wantedCar.carriage)[0],
        wheels: [wheelsize, wheelsize,wheelsize,wheelsize],

    }
}
/*
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
 */
//4.	Heroic Inventory

function inventory(arr){
    
    let result = [];
    for(const iterator of arr){
        let[name,level,items]= iterator.split(' / ');
        level = Number(level);
        items = items? items.split(', '): [];

        result.push({name,level,items});
    }
    console.log(JSON.stringify(result))


}

/* 

console.log(inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));
*/


function lowerPriceCity(arr){
    let obj = {};
    // key : {product => { town , price}}
    for(let index = 0; index< arr.length ; index++){
        let text = arr[index];
        let productInfo = text.split(' | ');
        let town = productInfo[0];
        let product = productInfo[1];
        price = Number(productInfo[2]);
        if(!obj.hasOwnProperty(product)){
            obj[product]= {town, price};
        }else {
            if(price < obj[product].price){
                obj[product] = {town, price}
            }
        }

    }
    //Object.keys, Object.values, Object.entries
    //-NamesOfKeys.
    //let productNames = Object.keys(obj);
    let productNames = Object.keys(obj);
    for(let index = 0; index < productNames.length; index++){
        let productName = productNames[index];
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`)
    }

}
/*
lowerPriceCity(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)
*/
// /6.	Store Catalogue
function storeCatalogue(arr){
    let obj = {};
    for( const line of arr){
        let [name, price]= line.split(' : ');
        let letter = name[0];

        if(!obj.hasOwnProperty(letter)){
            obj[letter] = {};
        }
        obj[letter][name] = Number(price);
    }
    let sortedLetters = Object.keys(obj).sort((a,b) => a.localeCompare(b));

    for(const letter of sortedLetters){
        console.log(letter)
        let sortedProducts = Object.keys(obj[letter]).sort((a,b) => a.localeCompare(b));

        for(const item of sortedProducts){
            console.log(`  ${item}: ${obj[letter][item]}`)
        }
    }
}
/*
console.log(storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']));
*/
//Towns to JSON

function townToJson(arr){
    let result = [];
    class Town{
        constructor(name,latitude,longtitude){
            this.Town = name;
            this.Latitude = +latitude;
            this.Longitude = +longtitude;
        }
    }
    for (let index = 1; index < arr.length; index++) {
        let array = arr[index].split('|').map(t => t.trim()).filter(x => x.length != 0);
        let townName = array[0];
        let latitude = Number(array[1]).toFixed(2);
        let longtitude = Number(array[2]).toFixed(2);
        let town = new Town(townName, latitude,longtitude)
        result.push(town);
        
    }
    return JSON.stringify(result);
}
/* 
townToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)
*/
function rectangle( width, height, color){
    class Rectangle {
        constructor(width,height,color){
            this.width = width;
            this.height = height;
            this.color = color[0].toUpperCase() + color.slice(1);
        }
        calcArea(){
            return this.height * this.width;
        }
    }
    return new Rectangle(width,height,color)
}

// 9 . Sorted List 
function add(x,arr){
    return this.result.push(x)
}
function remove(x,arr){return arr.splice(x,1)};

function get(x,arr){return arr[x]};

function size(arr){return arr.length};

function createSortedList(){
    let result = {
        numbers: [],
        add(x) {
            return this.numbers.push(x);
        },
        remove(x){
            return this.numbers.splice(x,1);
        },
        get(x){
            let arrNum = this.numbers;
            if(x <= arrNum.length){

                return this.numbers[x];
            }
        },
        'size': 0,
    };

    result.numbers.sort((a,b)=> a-b);
    result.size++;

    return result;

}
let list = createSortedList();
list.add(5);

list.add(6);
console.log(list.get(1));

list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.size)
console.log(list.get(1));


// 10. Heroes 

function solve(){
    const canCast = (state) => ({
        cast: (spell) =>{
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    });
    const canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    });
    const fighter = (name) =>{
        let state = {
            name,
            health : 100,
            stamina: 100,
        }
        return Object.assign(state, canFight(state));
    }
    const mage = (name) => {
        let state = {
            name,
            health : 100,
            mana : 100,
        }
        return Object.assign(state,canCast(state));
    }
    return {mage: mage, fighter : fighter};
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
