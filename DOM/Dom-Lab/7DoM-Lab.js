function edit(element,match,replacer){
    const text = element.textContent;
   //text.replace(match,replacer);
    //let result = text.replace(match,replacer);
//element.textContent = result;

    //const pattern = new RegExp(match, 'g');
    //let resultWithReg = text.replace(pattern,replacer);
   const result = text.split(match).join(replacer);
   element.textContent = result;
    //element.textContent = resultWithReg;
  
}
//2.w

function extractText(){
    const items = Array.from(document.querySelectorAll('li'))
    const result = items.map(e => e.textContent).join('\n');
    document.getElementById('result').value= result;
}

//3. Sum Numbers 

function calc() {
    // TODO: sum = num1 + num2
    let num1= document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = Number(num1) + Number(num2);

    document.getElementById('sum').value = result;


}
//4 Show More;

function showText() {
    // TODO
    document.getElementById('text').style.display = 'inline';
    document.getElementById('more').style.display = 'none';
}

//5. ColorizeTable
function colorize() {
    // TODO

    const rows = document.querySelectorAll('tr');

    for(let i= 1; i< rows.length; i+= 2){
        rows[i].style.background ='teal';
    }
}

// 6. Sum Table
 
function sumTable() {
    const rows = Array.from(document.querySelectorAll('tr')).slice(1,-1);
    let sum = 0;

    for(let row of rows){
        let value = Number(row.lastElementChild.textContent);
        sum +=  value;
    }
    document.getElementById('sum').textContent = sum;
}

//7. Extract Parenthesis 

function extract(content) {
    const text = document.getElementById(content).textContent;
    let result = '';
    const pattern = /\((.+?)\)/g;

    let match =pattern.exec(text);

    while(match != null){
        result += match[1] + ';';
        
        match = pattern.exec(text)
    }
    return result;
}
