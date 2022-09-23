import{html,render} from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './utl.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/api.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { myBooksPage } from './views/my-books.js';
import { searchPage } from './views/search.js';
import { detailsPage } from './views/details.js';


let root = document.getElementById('site-content');

function decoreteContext(ctx, next){
    ctx.render = (content) => render(content,root)
    ctx.updateUserNav = updateUserNav;

    next();
}

export function updateUserNav(){
    let userData = getUserData();
    if(userData){
        document.getElementById('user').style.display= 'block'
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    }else{
        document.getElementById('guest').style.display= 'block'
        document.getElementById('user').style.display = 'none';
    }
}

document.getElementById('logoutBtn').addEventListener('click', (e) =>{
    logout();
    updateUserNav();
    page.redirect('/')
})

page(decoreteContext);
page('/',homePage)
page('/login',loginPage)
page('/register', registerPage)
page('/create',createPage)
page('/mybooks', myBooksPage)
page('/search', searchPage)
page('/details/:id', detailsPage);
updateUserNav();
page.start();