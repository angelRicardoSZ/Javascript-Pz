function hola(nombre,callback) {
    console.log("funcion asincrona")
    setTimeout(function(){
        console.log("hola, " + nombre)
        callback(nombre)
    },1500)
}

function adios(nombre, otroCallback){
    setTimeout(
        function(){
        console.log("Adios" + nombre);  
        otroCallback()    
    },1000)

}


console.log("Iniciando proceso...")
hola("Angel",function(nombre){
    adios(nombre,function(){
        console.log("Terminando proceso...")
    })
    
});


// Si una funcion asincrona tarda menos, se ejecutara antes
// si ajustamos hola, para que tarde 1500 ms
// mientras que adiostarde 1000 ms, entonces se
// imprimira primero adios y luego hola
// hola("Ricky", function(){})
// adios("Ricky", function(){})





