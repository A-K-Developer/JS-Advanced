class CarDealership {
    constructor(name,availableCars,soldCars,totalIncome){
        this.name = name ;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0 ;
    }
    addCar(model,horsepower,price,mileage){
        if(model ==  ''|| !Number.isInteger(horsepower)  || price < 0 || mileage < 0){
            throw new Error('Invalid input!');
        }else{
            this.availableCars.push({
                model,
                horsepower,
                price,
                mileage,
            });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
    }
    sellCar(model, desireMileage){
        let car = this.availableCars.find(c => c.model == model);
        
        
        if(car == undefined){
            throw new Error(`${model} was not found!`);
        }
        let price = car.price;
        if(car.mileage <= desireMileage){
            price = car.price;
        }else{
            let difference = car.mileage - desireMileage;
            if(difference  <= 40000){
                price = car.price * 0.95;
            }else{
                price = car.price * 0.90;
            }
        }
        let horsepower = car.horsepower;
        this.soldCars.push({model, horsepower, price })
        let carIndex = this.availableCars.findIndex(c => c.model == model);     
        this.availableCars.splice(carIndex,1); 
        this.totalIncome += price;
        car.price = price;

        return `${car.model} was sold for ${price.toFixed(2)}$`;
        
    }
    currentCar(){
        let availableCars = this.availableCars;
        if(this.availableCars.length <= 0 ){
            return `There are no available cars`;
        }else{
            let returnArr = ['-Available cars:',];
            this.availableCars.forEach(x => {
                returnArr.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`)
            })
            return returnArr.join('\n');
        }
    }
    salesReport(criteria){
        let sorted;
        if(criteria !== 'horsepower' && criteria !== 'model'){
            throw new Error('invalid criteria!')
        }
        if(criteria == 'horsepower'){
            sorted = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        }else{
            sorted = this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }
        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,`-${this.soldCars.length} cars sold:`,];
        sorted.forEach(x => {
            result.push(`---${x.model} - ${x.horsepower} HP - ${x.price.toFixed(2)}$`);
        })
        
        return result.join('\n');


    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000)
dealership.addCar('Mercedes C63', 300, 29000, 187000)
dealership.addCar('Audi A3', 120, 4900, 240000)
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
dealership.sellCar('Audid A3', 250000)
console.log(dealership.currentCar())







