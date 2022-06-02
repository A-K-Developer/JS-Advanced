function create(words) {
  let content = document.getElementById('content');

  for(const word of words){
     let div = document.createElement('div');
     let p = document.createElement('p');
     p.textContent = word;
     p.style.display = 'none';
     div.appendChild(p);

     div.addEventListener('click', review);
     content.appendChild(div);

     function review(e){
        e.currentTarget.children[0].style.display = '';
        
     }
  }
}