function solve(arr,criteria){
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        
    }
    let tickets = [];
    
    for(let line of arr){
        let [destination,price,status]= line.split('|');
        price = Number(price);

        tickets.push(new Ticket(destination,price,status))
    }
    tickets.sort((a,b) => {
        if(criteria == 'destination'){
            return a.destination.localeCompare(b.destination);
        }else if(criteria == 'status'){
            return a.status.localeCompare(b.status);
        }else{
            return a.price - b.price;
        }
    })

    return tickets;
   
}




let a = solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'price');	

console.log(a);
/*
[ Ticket {       destination:           'Boston',
                price:          126.20,
                status: '           departed' }, 

 Ticket {       destination:            'New York City',
                price:           95.99,
                status:             'available' }, 

 Ticket {       destination:            'New York City',
                price:           95.99,
                status:             'sold' }, 

 Ticket {       destination:            'Philadelphia',
                price:           94.20,
                status:             'available' } ]
   */
