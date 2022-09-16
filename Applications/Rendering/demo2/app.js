import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';
import {
    data
} from './data.js';



const template = (name) => html `<h2>Hello there,${name}</h2>`;

const articleTemplate = (article) => html `<article>
<h2>${article.title}</h2>
<div class="content">
    <p>
       ${article.content}
    </p>
</div>
<footer>${article.author}</footer>
</article>`;

start();

function start() {
    const main = document.querySelector('main');

    const templateResult = template('Peter');

    render(templateResult, main);

    render(data.map(articleTemplate),main)
}

function onClick(){
    const header = document.querySelector('header');
    const templateResult = greatingTemplate('Peter',1);

    render(templateResult,header)
}