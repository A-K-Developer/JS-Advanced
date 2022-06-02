function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(i => {
            i.addEventListener('focus', onFocus);
            i.addEventListener('blur', onBlur);
        });

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused');
    }

    function onBlur(ev) {
        ev.target.parentElement.className = '';
    }

    const btn = document.querySelector('button');

    btn.addEventListener('click',onClick);
    btn.parentElement.addEventListener('click', onClick);
    btn.parentElement.parentElement.addEventListener('click', onClick);

    function onClick(ev){
        console.log('clicked', ev.currentTarget);
        console.log('target' , ev.target);
    }
}