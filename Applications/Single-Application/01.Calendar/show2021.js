const section = document.getElementById('year-2021');
section.remove();

export function show2021(){
    document.querySelector('main').replaceChildren(section)
}