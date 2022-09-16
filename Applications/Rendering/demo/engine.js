export function createTemplate(templateAsString){
    const pattern = /{{(.+?)}}/g;

    return (data) => templateAsString.replace(pattern,(match, name)=>{
        console.log(name);
        return match; 
    })
}