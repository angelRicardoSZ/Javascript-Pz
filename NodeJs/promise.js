function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("hola, " + nombre)
            resolve(nombre)
        },1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Adios, " + nombre)
            resolve(nombre)
        },1000)
    })
}

function hablar(nombre) {
    return new Promise( (resolve, reject)=>{
        setTimeout(
            function(){
                console.log("Some text"+nombre)
                //esolve(nombre)
                reject("An error has occurred")
            }, 2000)
    })
}




// console.log("Iniciando el proceso..")
// hola("Angel")
//     .then(nombre => {
//         return adios(nombre);
//     })
//     .then((nombre)=>{
//         console.log("Terminado el proceso")
//     })


console.log("Iniciando el proceso..")
hola("Angel")
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log("Terminado el proceso")
    })
    .catch(error => {
        console.error("Error" + error)
    })