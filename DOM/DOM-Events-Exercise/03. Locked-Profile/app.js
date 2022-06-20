
function lockedProfile(){
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toggle));


    function toggle(e){
        let profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive){
            let div = profile.querySelector('div');

            
            if(e.target.textContent == 'Show more'){

                div.style.display = '';
                e.target.textContent = 'Hide it';
            }else{
                e.target.textContent = 'Show more';
                div.style.display = 'none';
            }
        }
       
    }
}