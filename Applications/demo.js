/*
To make local server we use 

    in Terminal type --------- npm init -y 
    after that type ---------- npm i json-server
    go to package.json file :
    type this in script object;
        "start": "json-server --watch db.json"    db.json is the name of your file

    now "npm start" and we go LIVE
*/

/* 
    demo app start with 
        npm init -y
        npm i express
        make file server.js 
        "
                const express = require('express');

                const app = express();

                app.get('/',(req,res) => {
                    res.json({message: 'Hello World'});
                })

                app.listen(3500);
        "
*/
function resolveAfter2Second(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    })
}

async function asyncFunc() {
    let result = await resolveAfter2Second();
    console.log(result);
    return 'Pesho';
}

asyncFunc()
    .then(res => {
        console.log(res);
    })