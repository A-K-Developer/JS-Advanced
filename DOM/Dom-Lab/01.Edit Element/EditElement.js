
function editElement(element,match,replace) {
    let text= element.textContent;
    let result = text.split(match).join(replace);
    element.textContent = result
    console.log(result);

}