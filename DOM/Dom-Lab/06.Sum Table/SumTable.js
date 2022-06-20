function sumTable(){
    const rows = Array.from(document.querySelectorAll('tr')).slice(1,-1);
    let sum = 0;
    
    for(row of rows){
        sum += Number(row.lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = sum;
}