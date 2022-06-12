process.on("beforeExit", ()=>{
    console.log("El proceso va a terminar")
}) 
process.on("exit", ()=>{
    console.log("El proceso acabo") // sale del event loop
    setTimeout(()=>{
        console.log("Esto no se va a ver nunca")
    }, 0);

}) 
process.on("uncaughtException", (err, origen)=>{
    console.error("Se nos olvido capturrar un error")
    console.error(err)
})
//funcionquenoexiste();
//process.on("uncaughtRejection")
console.log("Esto si el error no se recoje, no sale")