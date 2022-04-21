const fruits = () => {
    var fruits = "apple"
    console.log(fruit)
};

fruits();
console.log(fruit);


const anotherFunction = () => {
    var x = 1;  // var permite cambiar el valor 
    var x = 2;  // por lo mismo no se recomienda, para evitar reescribir
    let y = 1;
    //let y = 2;
    console.log(x) 
    console.log(y) 
}
anotherFunction();