function solve(){
   document.querySelector('#searchBtn').addEventListener('click', onclick);

   let search = document.getElementById('searchField');
   let infoArr = document.querySelectorAll('tbody tr'); 


   function onclick(){
      for(row of infoArr){
         row.classList.remove('select');
         if(row.innerHTML.includes(search.value)){
            row.className = 'select';
         }
      }
      search.value = '';
   }
}