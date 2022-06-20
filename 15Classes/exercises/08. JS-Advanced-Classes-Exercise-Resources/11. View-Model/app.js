class Textbox {
    constructor(selector, regex){
        this._value = '';
        this._element = Array.from(document.querySelectorAll(selector));
        this._invalidSymbol = regex;
    }

    get value(){
        return this._value;
    }

    set value(v){
        this._value  = v;
        for(let i = 0 ; i< this._element.length; i++){
            this._element[i].value = v; 
        }
    }

    get elements(){
        return this._element;
    }

    isValid(){
        return !this._invalidSymbol.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
