function company(arr){
    let carRegister = {};

    arr.forEach(e => {
        let [brand, model, qty] = e.split(' | ');

        if(!carRegister.hasOwnProperty(brand)){
            carRegister[brand] = {};
        }

        if(!carRegister[brand].hasOwnProperty(model)){
            carRegister[brand][model]= 0;
        }
        carRegister[brand][model] += Number(qty);
    })
    for (const brand in carRegister) {
        console.log(brand);
        Object.entries(carRegister[brand]).forEach(el => console.log('###'+ el[0] + ' -> '+ el[1]))
    }
}