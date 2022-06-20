function subtract(){
    let num1 = document.querySelectorAll('input')[0].value;
    let num2 = document.querySelectorAll('input')[1].value;
    document.getElementById('result').textContent = num1 - num2;
}