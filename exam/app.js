window.addEventListener("load", solve);

function solve() {
    let [make,model,year,originalCost,selingPrice] = document.querySelectorAll('input');
    make = make.value;
    year = year.value;
    model = model.value;
    originalCost = originalCost.value;
    selingPrice = selingPrice.value
    let selectFuel = document.getElementById('fuel');
    console.log(selectFuel.value);
    if(make == '' || model == '' || year == ''||originalCost =='' || selingPrice == '' || originalCost > selingPrice){
        return;
    }
    
}
