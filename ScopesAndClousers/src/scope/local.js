const helloWorld = () => {
    const Hello = "HelloWorld";
    console.log(Hello)
}

helloWorld();
console.log(hello);

var scope = "Im global";

const functionScope = () => {
    var scope = "im just a local";
    const func = () => {
        return scope
    }
    console.log(func());
}

functionScope()