// 1. City Record

function cityRecord(name,population,treasury){
    let obj = {
        name,
        population,
        treasury,
    }
    return obj;
}

//cityRecord('Tortiga',7000,15000);

//2.	Town Population

function townPopulation(input){
    let register = {};
    while(input.length >0){
        let [town,population] = input.shift().split(' <-> ');
        register.town = population;
        
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])