import { create } from "json-server";

console.log('hi');
let a = 'skoaskda'

const host = 'http://localhost:3030';

async function request(method,url, data){
    const options = {
        method,
        headers: {}
    }
    if(data != undefined){
        options.headers['Content-Type']= 'application/json';
        options.body = JSON.stringify(data);
    }
    try{
        let response = await fetch(host + url, options);
        if(response.ok != true){
            if(response.status == 403){
                //Auth headers <=> Token <=> Session storage
                //remove the token
                sessionStorage.removeItem('userData')
            }
            const error = await response.json();
            throw new Error(error.message)
        }

        if(response.status == 204){
            return response;
        }else{
            return response.json();
        }
        
    }catch(error) {
        alert(error.message);
        throw error;
    }
}

function createOption(method = 'get',data){
    

    

    let userData = JSON.parse(sessionStorage.getItem('userData'));

    if(userData != null){
        options.headers['X-Authorization'] = userData.token;
    }
    return options
}



export async function login(email,password){
    let result = await post('/users/login', {email,password})

    let userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }

    sessionStorage.setItem('userData',JSON.stringify(userData))
}

export async function logout(){
    await get('/users/logout');
    sessionStorage.removeitem('userData');
}

export async function register(emai, password){
    let result = await post('users/register', {email,password})

    let userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    sessionStorage.setItem('userData',JSON.stringify(userData))
}
const get = request.bind(null, 'get');
const post = request.bind(null,'post');
const put = request.bind(null,'put');
const del = request.bind(null,'delete');

export {
    request,
    post,
    put,
    get,
    del as delete
}