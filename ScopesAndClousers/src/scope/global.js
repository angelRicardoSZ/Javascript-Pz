var hello = "Hello";
var hello = "hello +";
let world = "World";
//let world = "Hello"
const helloWorld = "Hello world!";

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld);
}

const helloWorld2 = () => {
    // mala practica dentro del desarrollo de software
    globalVar = "im global";
}

const anotherFunction2 = () => {
    var localVar = globalVar = "Im Global";
}

anotherFunction2()
console.log(globalVar)

helloWorld2();
console.log(globalVar)
anotherFunction();