function solve() {
  let text = document.getElementById('text');
  let option = document.getElementById('naming-convention');
  let printResult = document.getElementById('result');
  let textValue = text.value.toLowerCase();
  console.log(textValue)
  if(option.value == 'Camel Case'){
    let result = '';
    for(let i = 0; i< textValue.length; i++){
      if(textValue[i] == ' '){
        
      }else if(textValue[i-1] == ' '){
        let upperCaseLetter = textValue[i].toUpperCase();
        result+= upperCaseLetter;
      }else{

        result += textValue[i];
      }
    }
    printResult.innerHTML = result;
  }else if(option.value == 'Pascal Case'){
    let result = '';
    for(let i = 0; i< textValue.length; i++){
      if(i == 0){
        let upperCaseLetter = textValue[i].toUpperCase();
        result+= upperCaseLetter;
      }else if(textValue[i] == ' '){

      }else if(textValue[i-1] == ' '){
        upperCaseLetter = textValue[i].toUpperCase();
        result+= upperCaseLetter;
      }else{
        result += textValue[i];
      }
    }
    printResult.innerHTML = result;
  }else{
    printResult.innerHTML = 'Error!';
  }
  console.log(textValue)
}