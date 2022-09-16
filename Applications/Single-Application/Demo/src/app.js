import registerPage from './registerPage.js';
import loginPage from './loginPage.js';
import moviesPage from './movies.js'
import{isAuthenticated} from './auth.js'
import navigation from './navigation.js';

let headerElement = document.querySelector( '.navbar-nav');

let pages = {
    'register': registerPage,
    login: loginPage,
    movies: moviesPage,
}
navigation.updateNavigation();
if(isAuthenticated){
    moviesPage.showPage();
}
headerElement.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName == 'A'){
        let dataLinkk = e.target.getAttribute('data-link');
        if(!Object.keys(pages).includes(dataLinkk)){
            return;
        }
        hidePages();
        let currentView = pages[dataLinkk];

        currentView.showPage();
    }
}
)

function hidePages(){
    Object.values(pages).forEach(x => x.hidePage());
}