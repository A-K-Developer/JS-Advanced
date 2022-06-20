function encodeAndDecodeMessages(){
    let textArea = document.querySelectorAll('textarea');
    let button = document.querySelectorAll('button');

    button[0].addEventListener('click', encode);
    button[1].addEventListener('click',decode);


    function encode(){
        let currentMessage = '';
        let input = textArea[0].value;

        for(let i = 0; i < input.length; i++){
            currentMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }
        textArea[1].value = currentMessage;
        textArea[0].value = '';

    }

    function decode(){
        let currentMessage = '';
        let input = textArea[1].value;

        for(let i = 0; i < input.length; i++){
            currentMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        textArea[1].value = currentMessage;
        
    }
}