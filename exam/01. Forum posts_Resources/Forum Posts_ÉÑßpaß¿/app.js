function solve() {
 
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content'),
  }
  const lists = {
    review: document.getElementById('review-list'),
    published: document.getElementById('published-list'),
  }

  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click',publish);
  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click',clear)


  function publish(e){
    e.preventDefault();
    const title = input.title.value;
    const category = input.category.value;
    const content = input.content.value;

    if(title == '' || category == '' || content == ''){
      return;
    }
    let li = document.createElement('li','','rpost');
    let article = document.createElement('article');
    let editBtn = createElement('button','Edit','action-btn edit');
    let approveBtn = createElement('button','Approve','action-btn approve');
    article.appendChild(createElement('h4',input.title.value));
    article.appendChild(createElement('p','Category: ' + input.category.value));
    article.appendChild(createElement('p','Content: '+ input.content.value));
    li.appendChild(article);
    li.appendChild(approveBtn);
    li.appendChild(editBtn);
    
    editBtn.addEventListener('click',editPost);
    approveBtn.addEventListener('click',approvePost);
    
    input.title.value = '';
    input.category.value ='';
    input.content.value = '';
    
    lists.review.appendChild(li);
    function editPost(){
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;
      li.remove();
    }
    function approvePost(){
    lists.published.appendChild(li);
    editBtn.remove();
    approveBtn.remove();
    }
  }

  function clear(){
    lists.published.innerHTML = '';
  }
  function createElement(type,content,className){
    const element = document.createElement(type);
    element.textContent = content;
    
    if(className){
      element.className = className;
    }
    return element;
  }

}