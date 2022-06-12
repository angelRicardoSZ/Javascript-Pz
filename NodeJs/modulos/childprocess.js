const { exec, spawn } = require("child_process");

// example 1: Show the contents of hte current directory 

// exec("dir", (err, stdout, sterr) => {
//     if(err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout)
// })

// Example 2: Run a js file
exec("node modulos/consola.js", (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout)
})

let proceso = spawn('cmd.exe', ['/c','dir'])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function(dato){
    console.log(dato.toString())
})

proceso.on('exit', function(){
    console.log('el proceso termino')
})