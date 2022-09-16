const section = document.getElementById('year-2022');
section.remove();

export function show2022(){
    document.querySelector('main').replaceChildren(section)
}