const fs = require("fs");

function leer(ruta, cb){
    fs.readFile(ruta, (err,  data)=> {
        cb(data.toString());
    })
}

leer(__dirname + "/file.txt", console.log)



function escribir(ruta, contenido, cb){
    console.log("sdsd")
    fs.writeFile(ruta, contenido, function(err){
        
        if(err) {
            console.error("No he podido escribirlo", err)
        } else {
            console.log("Se ha escrito correctamente")
        }
    })
}
console.log("sdsdasd")


escribir(__dirname + "/file2.txt", "soy un archivo nuevo",console.log)


function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}
borrar(__dirname   + "/file2.txt", console.log)