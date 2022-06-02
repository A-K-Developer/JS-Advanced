function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');

    if(text.style.display == 'none'){
        btn.textContent = 'Less';
        text.style.display = 'block';
    }else{
        btn.textContent = 'More';
        text.style.display = 'none';
    }
}