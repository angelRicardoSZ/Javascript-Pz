const data = {
    fronted: "Angel",
    backend: "Isabel",
    design: "Ana",
}

// transform to matrix

const entries = Object.entries(data); 
console.log(entries);
console.log(entries.length);


// transform

const data = {
    fronted: "Angel",
    backend: "Isabel",
    design: "Ana",
}

const Values = Object.values(data);

console.log(Values);



const string = "hello";

console.log(string.padStart(9,"hi"));

// hihihello


console.log(string.padEnd(12," -----"));



const obj = {
    name: "oscar",
}





const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(()=> resolve("Hello world"), 3000)
        : reject(new Error("Test Error"))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();