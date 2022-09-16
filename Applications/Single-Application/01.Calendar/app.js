import { show2020 } from "./show2020.js";
import { show2021 } from "./show2021.js";
import { show2022 } from "./show2022.js";
import { show2023 } from "./show2023.js";

let years = document.getElementById('years').querySelectorAll('.day').forEach(e => e.addEventListener('click',showMonths));
const section = document.getElementById('years');
section.remove();
showYears()

function showYears(){
    document.querySelector('main').replaceChildren(section)
}

function showMonths(e){
    let targetYear = e.currentTarget.querySelector('.date').textContent;
    
    if(targetYear == '2020'){
        show2020();
    }else if(targetYear == '2021'){
        show2021();
    }else if(targetYear == '2022'){
        show2022();
    }else{
        show2023();
    }
}
