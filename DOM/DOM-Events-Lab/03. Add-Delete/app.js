function addItem(){
    let item = document.querySelector('input').value;
    let items = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = item;

    let btn = document.createElement('a');
    btn.textContent= '[Delete]';
    btn.href = '#';
    li.appendChild(btn);

    btn.addEventListener('click',deleteRow);

    function deleteRow(event){
        event.target.parentElement.remove();
    }

    items.appendChild(li);
    document.getElementById('newItemText').value = '';
 }