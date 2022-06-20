function attachGradientEvents(){
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);
    const result = document.getElementById('result');

    function onMouseMove(ev){
        result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) +'%';
    }
}