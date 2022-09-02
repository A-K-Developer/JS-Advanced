let textArea = document.getElementById('messages');
let authorInput = document.getElementById('name');
let contentInput = document.getElementById('sendMessege');
let sendButton = document.querySelectorAll('input')[2];
let refreshButton = document.querySelectorAll('input')[3];
sendButton.addEventListener('click', createMessage);
let baseUrl = 'http://localhost:3030/jsonstore/messenger';


refreshButton.addEventListener('click', getAllMesseges);

async function getAllMesseges() {
    try {
        let getMessagesResult = await fetch(baseUrl);
        let messeges = await getMessagesResult.json();
        console.log(messeges);

        let messageString = Object.values(messeges)
            .map(messege => `${messege.author}: ${messege.content}`)
            .join('\n');
        textArea.value = messageString
    } catch (err) {
        console.log(err);
    }

}

async function createMessage() {
    try {


        let authorInput = document.getElementById('name');
        let contentInput = document.getElementById('sendMessege');

        let newMessege = {
            author: authorInput.value,
            content: contentInput.value,
        }

        let createREsponse = await fetch(baseUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'Post',
            body: JSON.stringify(newMessege)
        })
        let createResult = await createREsponse.json();
        console.log(createResult);
    } catch (err) {
        console.log(err);
    }
}