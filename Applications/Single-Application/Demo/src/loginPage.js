let loginSection = document.querySelector('.login-form');

function showPage(){
    console.log('show Login');
    loginSection.classList.remove('hidden');
}
function hidePage(){
    loginSection.classList.add('hidden')
}

export default {
    showPage,
    hidePage,
}