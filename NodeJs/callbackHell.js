function hola(nombre,callback) {
    console.log("funcion asincrona")
    setTimeout(function(){
        console.log("hola, " + nombre)
        callback(nombre)
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(
        function(){
        console.log("Adios" + nombre);  
        otroCallback()    
    },1000)

}


function hablar(callbackHablar){
    setTimeout(function(){
        console.log("texto");
        callbackHablar()
    },1000)
}


function conversacion(nombre, veces, callback){
    if(veces >=0 ){
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    } else {
        adios(nombre, callback)
    }
    
    
}


hola("angel", function(nombre){
    conversacion(nombre,3,function(){
        console.log("Proceso terminado")
    })
})
// hola("Angel", function(nombre){
//     adios(nombre, function(){
//         console.log("Terminamos")
//     });
// })
// hola("Angel",function(nombre){
//     hablar(function(){
//         hablar(function(){
//             adios(nombre,function(){
//                 console.log("Terminando proceso...")
//             })
//         })
//     })
// });





// Si una funcion asincrona tarda menos, se ejecutara antes
// si ajustamos hola, para que tarde 1500 ms
// mientras que adiostarde 1000 ms, entonces se
// imprimira primero adios y luego hola
// hola("Ricky", function(){})
// adios("Ricky", function(){})


