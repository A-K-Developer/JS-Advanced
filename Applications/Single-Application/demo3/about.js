let section = document.getElementById('aboutView');
section.remove();

export function showAbout(ctx){
    ctx.render(section)
}