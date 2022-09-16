const section = document.getElementById('year-2023');
section.remove();

export function show2023(){
    document.querySelector('main').replaceChildren(section)
}