async function start(){
    try{
        const[r1, r2, r3] = await Promise.all([
            fletch('https://swapi.dev/api/people/1'),
            fletch('https://swapi.dev/api/people/2'),
            fletch('https://swapi.dev/api/people/3')
        ]);
        const [d1,d2,d3] = await Promise.all([
            r1.json(),
            r2.json(),
            r3.json(),
        ])
        console.log(d1,d2,d3);
        return 5;
    }catch(err){
        alert(err.message);
    }
}
start()

/*

    let button = document.querySelector("#load");
    button.addEventListener('click', onClick);
    function callback() {
        console.log('inside callback')
    }

    function executor(resolve, reject) {
        console.log('before')
        setTimeout(() => resolve(5), 2000);
        console.log('after')

    }

    function start() {
        const myPromise = new Promise(executor);
        console.log(myPromise);
        return myPromise

        //executor(onResolve,onReject);


    }
    function onClick() {
        start().then(onResolve).catch(onReject);
    }
    function onResolve(value) {
        console.log('operation successful');
        console.log('returned value', value);

    }
    function onReject(error) {
        console.log('errror')
        console.log(error.message);


    }
    start();
*/