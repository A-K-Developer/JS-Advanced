// 1. City Record

function cityRecord(name, population, treasury) {
    let obj = {
        name,
        population,
        treasury,
    }
    return obj;
}

//cityRecord('Tortiga',7000,15000);

//2.	Town Population

function townPopulation(input) {
    const result = {}

    for (const town of input) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        let pop = Number(tokens[1])
        if (result[name] != undefined) {
            pop += result[name];
        }
        result[name] = pop;

    }
    for (let town in result) {
        //console.log(`${town} : ${result[town]}`);
    }
}
//townPopulation(['Sofia <-> 1200000','Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'])


// 3. City Taxes;

function cityTaxes(name, population, treasury) {
    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(x) {
            return this.population += Math.floor(this.population * x / 100);
        },
        applyRecession(x) {
            return this.treasury -= Math.floor(this.treasury * x / 100);
        }

    }
    return result;
}
const myCity = cityTaxes('Miami', 10000, 30000);
//const {name, treasury, population} = myCity;
cityTaxes(cityTaxes('Tortuga', 7000, 15000));

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
//console.log(city.treasury);
city.applyGrowth(5);
//console.log(city.population);


// 4. Object Factory
/* for every order in list
create object
copy template props
for every element in parts
compose function from libery
store object

return result;

*/
function factory(library, list){
    let result = [];
    
    for(let order of list){
        let object = {};
        let template = order.template; 
        for(let props in template){
            object[props] = template[props];

        }
        result.push(object);
        const parts = order.parts;

        for(let part of parts){
            object[part] = library[part];
            
        }
    }
    return result
}
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [{
        template: {
            name: 'ACME Printer'
        },
        parts: ['print']
    },
    {
        template: {
            name: 'Initech Scanner'
        },
        parts: ['scan']
    },
    {
        template: {
            name: 'ComTron Copier'
        },
        parts: ['scan', 'print']
    },
    {
        template: {
            name: 'BoomBox Stereo'
        },
        parts: ['play']
    }
];

const products = factory(library, orders);
//console.log(products);

// Assembly Line 

const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function createAssemblyLine(){
    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () =>{
                if(car.temp < car.tempSettings){
                    car.temp++;
                }else if(car.temp > car.tempSettings){
                    car.temp--;
                }
            }
        },
        hasAudio: (car) => {
            car.currentTrack = {name : '', artist : '',};
            car.nowPlaying = () =>{
                if(currentTrack != null){
                    console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`);
                };
            };
        },

        hasParktronic: (car) => {
            car.checkDistance = (distance) =>{
                if(distance < 0.1){
                    console.log('Beep! Beep! Beep!');
                }else if( distance >= 0.1 && distance <0.25){
                    console.log('Beep! Beep!');
                }else if(distance >= 0.25 && distance <0.5){
                    console.log('Beep!');
                }else{
                    console.log('');
                }
            }
        }


    }

}
/*
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
*/

// JSON to HTML 

function jsonToHtml(json) {
    function replaceEntity(text) {
        const htmlEntities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;'
        };
        return String(text).replace(/([&<>\"'])/g, match => htmlEntities[match]);
    }
 
    const objects = JSON.parse(json);
    let tr = {td: []};
 
    for (const obj of objects) {
        if (!tr.th) {
            tr.th = Object.keys(obj).map(replaceEntity);
        }
        tr.td.push(Object.values(obj).map(replaceEntity));
    }
 
    console.log('<table>');
    console.log(`<tr><th>${tr.th.join('</th><th>')}</th></tr>`);
    tr.td.forEach(value => console.log(`<tr><td>${value.join('</td><td>')}</td></tr>`));
    console.log('</table>');
}
//jsonToHtml(`[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]`)

