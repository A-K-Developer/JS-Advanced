/* 
function solve(area, vol, input){
    let figures = JSON.parse(input);

    let result = figures.map(function(figure){
        return {
            area: area.call(figure),
            volume: vol.call(figure)
        }
    });
    return result;
}

*/


/*add
function solution(number) {
    function functioAdd(newNumber) {
        return Number(number) + Number(newNumber);
    };
    return functioAdd;
}
*/

/*3.Currency Format
function createFormatter(separator, symbol, symbolFirst, CurrencyFormatter) {
    return function(value) {
        return CurrencyFormatter(separator, symbol, symbolFirst, value);
    }
    function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

}


let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71
*/

/*4. Filter Employes
function filter(data, criteria) {
    let parsedData = JSON.parse(data);
    let [key, value] = criteria.split('-');
    
    let result = parsedData.filter(p => (p[key] == value));
    for (i = 0; i < result.length; i++ ) {
        console.log(
            `${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`
        )
    }
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female'
)
*/

/*5.Command proccesor
function createProcessor() {
    let state = '';

    function append(str) {
        state += str;
    }

    function removeStart(n) {
        state = state.slice(n);
    }

    function removeEnd(n) {
        state = state.slice(0, -n);
    }

    function print() {
        console.log(state);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let proc = createProcessor();
proc.append('hello'); 
proc.append('again'); 
proc.removeStart(3); 
proc.removeEnd(4); 
proc.print();
*/

/*6.List Proccessor
function createProcessor(input) {

    let list = [];

    function add(string) {
        list.push(string);
    }

    function remove(string) {
        list = list.filter(s => s != string);
        
    }

    function print() {
        console.log(list.join(','));
    }

    for (let el of input) {
        [instruction, string] = el.split(' ');
        switch (instruction) {
            case 'add': add(string); break;
            case 'remove': remove(string); break
            case 'print': print(); break
        }
    }

}

createProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

*/

/*7.Cars
function solve(input) {
    const data = {};
 
    const commandsMap = {
        create: (name, inherits, parentName) => {
            data[name] = inherits ? Object.create(data[parentName]) : {};
        },
        set: (name, k, v) => data[name][k] = v,
        print: name => {
            const entries = [];
            for (const key in data[name]) {
                entries.push(`${key}:${data[name][key]}`);
            }
            console.log(entries.join(','));
        },
    }
 
    input.forEach(x => {
        const [command, name, k, v] = x.split(" ");
        commandsMap[command](name, k, v);
    });
}

// createModify([
//     'create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ]);

createModify([
    'create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat'
])
*/