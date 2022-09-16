import {saveToken} from './auth.js';
import moviesPage from './movies.js';

let baseUrl = 'http://localhost:3030';
let registerSection = document.querySelector('.register');

let registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(registerForm);
    console.log(data.get('email'));

    fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password'),
        })
    })
    .then(res => res.json())
    .then(responseData => {
        console.log(responseData.accessToken);
        saveToken(responseData.accessToken)
        hidePage();
        moviesPage.showPage();
    })
})

function showPage(){
    console.log('show Register');
    registerSection.classList.remove('hidden');

}

function hidePage(){
    registerSection.classList.add('hidden')
}

export default {
    showPage,
    hidePage,
    saveToken,
}