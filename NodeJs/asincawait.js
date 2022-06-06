async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("hola, " + nombre)
            resolve(nombre)
        },1000)
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Adios, " + nombre)
            resolve(nombre)
        },1000)
    })
}

async function hablar(nombre) {
    return new Promise( (resolve, reject)=>{
        setTimeout(
            function(){
                console.log("Some text "+nombre)
                resolve(nombre)
                //reject("An error has occurred")
            }, 2000)
    })
}
// async function main(nombre) {
//     await hola(nombre); 
//     await hablar(nombre);
//     await adios(nombre);
// }
//main("angel");

async function main() {
    let name = await hola("angel"); 
    await hablar(name);
    await adios(name);
}
main();
