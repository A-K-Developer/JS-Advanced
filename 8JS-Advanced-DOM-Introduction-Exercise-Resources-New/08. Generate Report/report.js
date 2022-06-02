function generateReport() {
    let checkbox = document.querySelectorAll('input');
    let tableRow = document.getElementsByTagName('tr');

    let resultOfFirstRow = {};
    let tableRowAsString = []
    checkbox.forEach(x => {
        if(x.checked){
            resultOfFirstRow[x.name] = '';
        }
    })
    for(let i = 1 ; i < tableRow.length; i++){
        tableRowAsString.push(tableRow[i].textContent)
    }
    console.log(tableRowAsString)
    console.log(resultOfFirstRow);
}