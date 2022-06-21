let suma = 0;
console.time("bucle")
for (let i = 0; i < 1000000; i++) {
    suma += 1;
}
console.timeEnd("bucle");



console.time("asincrona")
asincrona()
    .then(
        ()=> {
            console.timeEnd("asincrona");            
        }
    )


function asincrona() {
    return new Promise( (resolve) => {
        setTimeout(function (){
            console.log("Termina el proceso asincrono")
            resolve();
        })
    })
}
