let registerForm = document.getElementById('register');
let loginForm = document.getElementById('login');
registerForm.addEventListener('submit',register);


async function register(e){
    e.preventDefault();
    console.log('prevents');
    let form = e.target;
    let formData = new FormData(form);
    let password = formData.get('password');
    let repeatPassword = formData.get('rePass');

    if(password !== repeatPassword){
        console.error(`Password does not match.Please try again`);
        return
    }

    let newUser = {
        email: formData.get('email'),
        password: password,
    }

    let registerResponse = await fetch('http:localhost:3030/users/register',{
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(newUser)
    });
    let registerResult = await registerResponse.json();
    console.log(registerResult);

    localStorage.setItem('token',registerResult.accessToken);
}