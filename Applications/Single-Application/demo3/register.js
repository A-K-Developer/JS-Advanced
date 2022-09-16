import { post } from "./api.js";
import { createSubmitHandler } from "./utl.js";

let section = document.getElementById('registerView');
let form = section.querySelector('form');
createSubmitHandler(form, onSubmit);
section.remove();

let ctx= null;
export function showRegister(ictx) {
    ctx = ictx
    ctx.render(section)
}

async function onSubmit({email,password,repass}) {

    if (email == '' || password == '') {
        throw new Error('All fields are required!');
    }
    if (password != repass) {
        throw new Error(`Passwords don't match!`);
    }

    const {
        accessToken,
        _id
    } = await post('/users/register',{email,password});
    const userData = {
        email,
        accessToken,
        id: _id,
    }
    sessionStorage.setItem('userData', JSON.stringify(userData));
    ctx.checkUserNav();
    ctx.goTo('homeBtn');
}