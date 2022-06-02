function search() {
   // let listElement = document.querySelectorAll('ul#towns li');
   // grab specific ul tag
   let towns = Array.from(document.querySelectorAll('li'));
   let townsString = towns.map(e => e.textContent);
   let search = document.getElementById('searchText').value;
   let sum = 0;
   let result = document.getElementById('result');

   for(let i = 0; i < townsString.length; i++){
      let curr = townsString[i].split(search);
      if(curr.length > 1){
         sum++;
         towns[i].style.textDecoration = 'underline';
         towns[i].style.fontWeight = 'bold';
      }
   }
   result.innerHTML = `${sum} matches found`;

}
