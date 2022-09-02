function solve() {
//1. Get all element
//2.depart func => fetch data for next stop,start from depot
//3.update infoElement with text from server data
//4.arrive button disabled = false 
//5. arrive func => update btns
    let infoElement = document.querySelector('.info');
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');
    let busStop = {
        next: 'depot',
    }

    function depart() {
        departButton.disabled = true;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                busStop = JSON.parse(JSON.stringify(data));
                infoElement.textContent = `Next stop ${busStop.name}`;
            })
            .catch(error => console.log(error))
            arriveButton.disabled = false;
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${busStop.name}`
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();