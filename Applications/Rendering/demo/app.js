import {
    data,
    nav as links
} from "./data.js";
import {createTemplate} from "./engine.js"

const articleAsHtml = `<article>
<h2>First Article</h2>
<div class="content">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Cumque rem dignissimos quasi ducimus
    </p>
</div>
<footer>Author:John Smith</footer>
</article>`;

start();

async function start() {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav ul');

    const articleTemplateAsString = await (await (fetch('./templates/article.html'))).text();

    /*
    main.innerHTML = data.map(articleTtemplate).join('');
    nav.innerHTML = links.map(navTemplate)
    */

}