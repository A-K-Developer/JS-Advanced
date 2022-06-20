function solve(){
  
  const string = document.getElementById('text').value;
  const inCase = document.getElementById('naming-convention').value;
  const resultDiv = document.getElementById('result')
  let lowerCase = string.toLowerCase().split(' ');
  let result = '';
  if(inCase == 'Camel Case'){
    result = lowerCase.splice(0,1);
    let string = lowerCase.slice(0)
    
    for(letter of string){
      let currentLetter = letter.slice(0,1).toUpperCase();
      result += currentLetter;
      result+= letter.slice(1);

    }
  }else if(inCase == 'Pascal Case'){
    for(letter of lowerCase){
      result += letter.slice(0,1).toUpperCase();
      result += letter.slice(1);
      console.log(result)
    }
    
  }else{
    result = 'Error!';
  }
  resultDiv.textContent = result;
}


solve("this is an example", "Camel Case");
solve("secOND eXamPLE", "Pascal Case");