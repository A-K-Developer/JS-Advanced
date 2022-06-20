function solve(){
   let textArea = document.querySelector('textarea');
   let total = 0 ;
   let list = [];
   let checkoutBtn = document.querySelector('.checkout')

   function addItem(ev){
      let product = ev.target.parentElement.parentElement
      let name = product.querySelector('.product-title').textContent;
      let price = product.querySelector('.product-line-price').textContent;
      total += Number(price);
      if(!list.includes(name)){
         list.push(name);
      }
      textArea.textContent += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`;

}

   function checkout(e){
      addBtns.forEach(e => {
         e.removeEventListener('click',addItem);
      })

      textArea.textContent += `You bought ${list.join(', ')} for ${total.toFixed(2)}.`;
      checkoutBtn.removeEventListener('click', checkout)
   }

   let addBtns = Array.from(document.querySelectorAll('button')).splice(0,3)
   addBtns.forEach(e => {
      e.addEventListener('click',addItem);

   })

  
   checkoutBtn.addEventListener('click',checkout)



   
 
   
}
/*



Also, after clicking over "Checkout" and every from above is done you should disable all buttons. (You can't add products or checkout again if once the checkout button is clicked).

 */
