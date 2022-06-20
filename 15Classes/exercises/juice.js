function juiceFlavors(arr){
    let juices = {};
    let bottles = {};

    function createBottle(flavor){
        if(juices[flavor] >= 1000){
            if(!bottles.hasOwnProperty(flavor)){
                bottles[flavor] = 0;
            }

            let numberOfBottles = Math.floor(juices[flavor] / 1000);
            bottles[flavor] += numberOfBottles;
            juices[flavor] -= (numberOfBottles * 1000);

        }
    }

    for(let juice of arr){
        let [flavor,qty] = juice.split(' => ');

        if(!juices.hasOwnProperty(flavor)){
            juices[flavor] = 0;
        }
        juices[flavor] += Number(qty)
        createBottle(flavor);
    }

    for(const flavor in bottles){
        console.log(flavor + ' => ' + bottles[flavor]);
    }
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Orange => 2000',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)