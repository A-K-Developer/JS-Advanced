let loadBooksBtn = document.getElementById('loadBooks');
loadBooksBtn.addEventListener('click', getBooks);

let booksTableBody = document.querySelector('#booksTable tbody');
booksTableBody.querySelectorAll('tr').forEach(tr => tr.remove());

let bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', handleFormSubmit);

let url = 'http://localhost:3030/jsonstore/collections/books';

function handleEdit(e){
    let currentBook = e.target.closest('.book')
    let currentTitle = currentBook.querySelector('.title');
    let currentAuthor = currentBook.querySelector('.author')
    console.log(currentBook);
    let formHendling = bookForm.querySelector('h3');
    formHendling.textContent = 'Edit Form';
    bookForm.dataset.entryId = currentBook.dataset.id;
    bookForm.dataset.isEdit =true
    let titleInput = bookForm.querySelector('input[name="title"]');
    let authorInput = bookForm.querySelector('input[name = "author"]');
    titleInput.value = currentTitle.textContent;
    authorInput.value = currentAuthor.textContent;

    
}

async function handleFormSubmit(e){
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);

    if(form.dataset.isEdit !== undefined){
        let id = form.dataset.entryId;
        editBook(formData, id);
    }else{
        createBook(formData)
    }
}
async function deleteBook(e){
    let bookToDelete = e.target.closest('.book');
    let id = bookToDelete.dataset.id;
    url = url + `/${id}`;
    let deleteResponse = await fetch(url, {
        method: 'Delete'
    });
    if(deleteResponse.status === 200){
        console.log('yes');
        bookToDelete.remove()
    }
}
async function createBook(formData){

    let newBook = {
        title: formData.get('title'),
        author: formData.get('author'),   
    };

    let createResponse = await fetch(url, {
        headers: {
            'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newBook)
    })

    let createResult = await createResponse.json();
    let createdHTMlBook= createHtmlBook(createResult,createResult._id);
    booksTableBody.appendChild(createdHTMlBook)
    console.log(createResult);
}

async function getBooks(){
    let getBooksResponse  = await fetch(url);
    let books = await getBooksResponse.json();
    console.log(books);

    booksTableBody.querySelectorAll('tr').forEach(tr => tr.remove());

    Object.keys(books).forEach(key => {
        let htmlBook = createHtmlBook(books[key], key);
        booksTableBody.appendChild(htmlBook)
    })
}
async function editBook(formData, id){
    url = url + `/${id}`
    let editBook = {
        title: formData.get('title'),
        author: formData.get('author'),   
    };

    let editResponse = await fetch(url, {
        headers: {
            'Content-Type':'application/json'
        },
        method: 'Put',
        body: JSON.stringify(editBook)
    })

    let editResult = await editResponse.json();
    let editedBook = booksTableBody.querySelector(`tr.book[data-id="${id}"]`)
    let editHTMlBook= createHtmlBook(editResult,editResult._id);
    editedBook.replaceWith(editHTMlBook)
    
    console.log(editResult);
}

function createHtmlBook(book, id){
    let titleId = ce('td',{class: 'title'}, book.title);
    let authorId = ce('td',{class: 'author'},book.author);
    let editBtn = ce('button',undefined, 'Edit');
    editBtn.addEventListener('click',handleEdit);
    let deleteBtn = ce('button',undefined,'Delete');
    deleteBtn.addEventListener('click',deleteBook)
    let buttonsId = ce('td',undefined,editBtn,deleteBtn);
    let tr = ce('tr',{class: 'book'},titleId,authorId,buttonsId);
    tr.dataset.id = id;
    return tr
}
function ce(tag,attributes, ...params){
    let element = document.createElement(tag);
    let firstValue = params[0];
    if(params.length === 1 && typeof(firstValue) !== 'object'){
        if(['input', 'textarea'].includes(tag)){
            element.value = firstValue;
        } else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }

    if(attributes !== undefined){
        Object.keys(attributes).forEach(key =>{
            element.setAttribute(key,attributes[key]);
        })
    }

    return element
}