window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById('publish-btn');
  const clearBtn = document.getElementById('clear-btn');
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  } 
  let review = document.getElementById('review-list');
  publishBtn.addEventListener('click', publish);
  clearBtn.addEventListener('click', clearUploaded);
  let published = document.getElementById('published-list');

  function publish(e) {
    if (input.title.value != '' && input.category.value != '' && input.content.value != '') {
      let li = createElement('li', '', 'rpost');
      review.appendChild(li);
      let article = createElement('article');
      li.appendChild(article);
      
      let edit = createElement('button', 'Edit', 'action-btn edit');
      edit.addEventListener('click', editPost);
      let approve = createElement('button', 'Approve', 'action-btn approve');
      approve.addEventListener('click', approvePost);
      li.appendChild(approve);
      li.appendChild(edit);

      article.appendChild(createElement('h4', input.title.value));
      article.appendChild(createElement('p', 'Category: ' + input.category.value));
      article.appendChild(createElement('p', 'Content: ' + input.content.value));
      input.title.value = '';
      input.category.value = '';
      input.content.value = '';
    }
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    console.log(element);
    if (className) {
        element.className = className;
    }
    return element;
  }

  function editPost(e) {
    let currentArticle = e.target.previousSibling.previousSibling;
    console.log(currentArticle);

    input.title.value = currentArticle.querySelector('h4').textContent;
    console.log(input.title.value);
    input.category.value = currentArticle.querySelectorAll('p')[0].textContent.slice(10);
    console.log(input.category.value);
    input.content.value = currentArticle.querySelectorAll('p')[1].textContent.slice(9);
    console.log(input.content.value);
    
    currentArticle.parentNode.remove();
  }

  function approvePost(e) {
    let currentArticle = e.target.parentNode;
    let btn1 = currentArticle.querySelectorAll('button')[0];
    let btn2 = currentArticle.querySelectorAll('button')[1];
    btn1.remove();
    btn2.remove();
    published.appendChild(currentArticle);
  }
  
  function clearUploaded() {
    published.innerHTML = '';

  }
}
/*
function solve(){
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content'),
  }
  const lists = {
    review: document.getElementById('review-list'),
    published: document.getElementById('published-list'),
  }
  if(input.title == '' || input.category == "" || input.content == ''){
    return ;
  }
  document.getElementById('publish-btn').addEventListener('click',publish);

  function publish(e){
    let title = input.title.value;
    let category = input.category.value;
    let content = input.content.value;
    input.title.value = '';
    input.category.value = '';
    input.content.value= '';
    let liElement = createElement('li','','rpost');
    let article = createElement('article');
    let h4Element = createElement('h4', title);
    let pElement = createElement('p',category);
    let pContent = createElement('p',content);
    article.appendChild(h4Element)
    article.appendChild(pElement);
    article.appendChild(pContent)
    liElement.appendChild(article);
    let editBtn = createElement('button','Edit','action-btn');
    let approveBtn = createElement('button','Approve','action-btn');
    editBtn.classList.add('edit');
    approveBtn.classList.add('approve')
    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);
    lists.review.appendChild(liElement)
    editBtn.addEventListener('click',edit);
    function edit(e){
      e.currentTarget.parentElement.remove();
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;  
    }
    approveBtn.addEventListener('click',approve);
    function approve(){
      lists.published.appendChild(liElement)
      editBtn.remove();
      approveBtn.remove();
    }
    let clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click',clear);
    function clear(){
      lists.published.innerHTML = '';
    }
    function createElement(type,content,className){
      const element = document.createElement(type);
      element.textContent = content;
      
      if(className){
        element.classList.add(className);
      }
      return element;
    }
  }
  

  
}
*/