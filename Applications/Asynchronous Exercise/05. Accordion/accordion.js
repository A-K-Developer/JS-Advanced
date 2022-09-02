async function solution() {
    /* fetch all articles from server
    create divs with titles // toogle buttons 
    oon click fetch details data
    uupdate html with data
    */

    try{
        let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        let response = await fetch(url);

        if(!response.ok){
            throw new Error('Error obtaining article list')
        }

        let data = await response.json();
        data.forEach(element => {
            let articleElement = document.createElement('div');
            articleElement.classList.add('accordion');
            articleElement.innerHTML = 
            `
            <div class= 'head'>
                <span>${element.title}</span>
                <button class='button' id= '${element._id}' onclick= 'moreOnClick(event)'>More</button>
            </div>
            <div class='extra'></div>
            `
            let main = document.getElementById('main')
            main.appendChild(articleElement)
            console.log(response)
        });

    }catch(error){
        console.log(error)
    }
}

async function moreOnClick(e){
    try{
        let currentTarget = e.currentTarget;
        let url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + currentTarget.id;
        let parent = currentTarget.parentNode.parentNode;
        let extraDiv = parent.querySelector('div.extra');

        let response = await fetch(url)
        if(!response.ok){
            throw new Error('Eror');
        }

        let data = await response.json();
        extraDiv.innerHTML = `<p>${data.content}</p>`;

        if(currentTarget.textContent == 'More'){
            currentTarget.textContent = 'Less';
            extraDiv.style.display = 'block';
        }else{
            currentTarget.textContent = 'More';
            extraDiv.style.display = 'none';
        }
    }catch(error){

    }
}
solution()  