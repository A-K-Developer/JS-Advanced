const section = document.getElementById('year-2020');
section.remove();
let months = section.querySelectorAll('tr .day');
months.forEach(x => x.addEventListener('click',showMonth))
let month = document.getElementById('month-2020-1');
let montly = document.querySelectorAll('.daysCalendar');
console.log(montly);


function showMonth(e){
    let monthName = e.currentTarget.textContent;
}

export function show2020(){
    document.querySelector('main').replaceChildren(section)
}
