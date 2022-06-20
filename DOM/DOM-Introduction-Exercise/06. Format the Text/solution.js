function solve(){
  let textArea = document.querySelector('textarea').value;
  let outputId= document.getElementById('output');

  let sentence = textArea.split('.').filter(e => e.length != 0);
  
  while(sentence.length > 0){
    let textForParagraph = sentence.splice(0, 3).join('. ')+'.';
    let p = document.createElement('p');
    p.textContent = textForParagraph;
    outputId.appendChild(p)
  }

}