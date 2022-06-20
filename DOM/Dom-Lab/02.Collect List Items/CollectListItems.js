function extractText() {
    let items = Array.from(document.querySelectorAll('li'));
    let textArea = document.getElementById('result');
    items.map(e => textArea.value += e.textContent +'\n')  ;

    
}