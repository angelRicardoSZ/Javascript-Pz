console.log("First message");

let i = 0
setInterval(function(){
    console.log(i)
    i++;
    // if(i === 5) {
    //     console.log("forzamos error");
    //     var a = 3 + z;  // This create an error, then all the execution is ending
    // }
})

console.log("Second message") // Due the asynchronous character of node, this line is executed secondly