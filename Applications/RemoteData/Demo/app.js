let registerForm = document.getElementById('register-form');
let loginForm = document.getElementById('login-form');
let baseUrl = 'http://localhost:3030';
let movieForm = document.getElementById('add-movie-form')
let movieListElement = document.getElementById('movie-list')
let showAllMoviesButton = document.getElementById('show-all-movies')
let movieSection = document.querySelectorAll('.add-movie-section')[0];
registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let data = new FormData(e.currentTarget);

    let email = data.get('email');
    let password = data.get('password');
    

    fetch(`${baseUrl}/users/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })

    })
    .then(res => res.json())
    .then(data => {
        saveToken(data.accessToken)
        console.log(data);
        registerForm.classList.add('hide')
    })
    .catch(err =>{
        console.log(err);
    })
})


//--------------------LOGIN---------------------------
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let data = new FormData(e.currentTarget);

    let email = data.get('email');
    let password = data.get('password');
    

    fetch(`${baseUrl}/users/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })

    })
    .then(res => res.json())
    .then(data => {
        saveToken(data.accessToken),
        console.log(data);
        registerForm.classList.add('hide');
        movieSection.classList.remove('hide')
    })
    .catch(err =>{
        console.log(err);
    })
})
movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl')
    let token = getToken();

    fetch(`${baseUrl}/data/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({
            title,
            description,
            imageUrl,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })

    e.currentTarget.reset();
})

showAllMoviesButton.addEventListener('click',() => {
    fetch(`${baseUrl}/data/movies`)
        .then(res => res.json())
        .then(movies => {
            movies.forEach(element => {
                let movieElement = document.createElement('div')
                let headerElement =document.createElement('header')
                let contentElement= document.createElement('p');
                let posterElement = document.createElement('img')
                posterElement.setAttribute('src', element.imageUrl);

                contentElement.textContent= element.description;
                headerElement.textContent = element.title;
                movieElement.appendChild(headerElement)
                movieElement.appendChild(posterElement)
                movieElement.appendChild(contentElement)
                movieListElement.appendChild(movieElement)
            });
        })
})
function saveToken(token){
    localStorage.setItem('auth_token',token)
}

function getToken(){
    let token = localStorage.getItem('auth_token');

    return token;
}