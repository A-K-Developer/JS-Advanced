function deleteByEmail() {
    const input = document.querySelector('input[name ="email"]').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    let found = false ;
    for(let row of rows){
        if(row.children[1].textContent == input){
            // const parent = row.parentElement; dont need this if we use remove();;
            //parent.removeChild(row);
            row.remove();
            found =  true;
        }
        

    }
    document.getElementById('result').textContent = found ? 'Deleted.' : 'Not found.'
    /*
    if(found){

        document.getElementById('result').textContent = 'Deleted.'
    }else{
        document.getElementById('result').textContent = 'Not found.'

    }
    */
}