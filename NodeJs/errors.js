// function serompe() {
//     return 3 + z;
// }

// try {
//     serompe();
// } catch(err){
//     console.error("Vaya, algo salio mal");
//     console.error("error: "+ err.message);
//     console.log("El proceso se detiene")
// }



// Example 2
// function otraFuncion(){
//     return serompe();
// }

// function serompe(){
//     return 3+z;
// }

// try {
//     otraFuncion();
// } catch(err){
//     console.error("Vaya, algo salio mal");
//     console.error("error: "+ err.message);
//     console.log("El proceso se detiene")
// }

// Example 3: asynchronous function
function serompeAsincona(cb){
    setTimeout(function(){
        try{
            return 3 + z;
        } catch (err){
            console.error("error en mi funcion asincrona")
            cb(err);
        }
        
    })
}
try {
    serompeAsincona(function(err){
        console.log(err.message)
    });
}catch(err){
    console.error("Vaya, algo salio mal");
    console.error("error: "+ err.message);
    console.log("El proceso se detiene")
}
console.log("Esto de aqui esta al final")