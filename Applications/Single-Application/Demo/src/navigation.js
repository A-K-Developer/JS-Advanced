import {
    isAuthenticated
} from "./auth.js";

function updateNavigation() {

    if (isAuthenticated()) {
        const navigationSection = document.getElementsByClassName('guest');
        for (const navItem of navigationSection) {
            navItem.classList.add('hidden');
        }
    }

}
export default {
    updateNavigation,
}