function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn')
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let ration = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    daysBtn.addEventListener('click', onConvert);
    hoursBtn.addEventListener('click', onConvert);
    minutesBtn.addEventListener('click', onConvert);
    secondsBtn.addEventListener('click', onConvert);

    function convert(value, unit){
        let days = value / ration[unit];
        return {
            days: days,
            hours: days * ration.hours,
            minutes: days * ration.minutes ,
            seconds: days * ration.seconds ,      
        }
    }

     function onConvert(event){
         let input = event.target.parentElement.querySelector('input[type="text"]')
         let time = convert(Number(input.velue),input.id);
         days.value = time.days;
         hours.value = time.hours;
         minutes.velue = time.minutes;
         seconds.velue = time.seconds;
     }
    
}