function addItem(){
   let item = document.querySelector('input').value;
   let items = document.getElementById('items');
   let li = document.createElement('li');
   li.textContent = item;
   items.appendChild(li);
   document.getElementById('newItemText').value = '';
}