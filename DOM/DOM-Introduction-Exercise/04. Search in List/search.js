function search(){
   let result = document.getElementById('result');
   let towns = document.querySelectorAll('li');
   let input = document.querySelector('input').value;
   let sum = 0;

   for(town of towns){
      if(town.textContent.includes(input)){
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         sum += 1;
      }
   }
   result.textContent =`${sum} matches found`;


}
