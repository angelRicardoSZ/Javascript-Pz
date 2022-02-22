const obj = {
    name1: "oscar",
    age:32,
    contry:"MX",
}

let {name1, ...all} = obj;
console.log(all);

// { age: 32, contry: 'MX' }



// Creando objeto apartir de otro


const obj = {
    name2 : "Oscar",
    age: 32,
}

const obj2 = {
    ...obj,
    contry: "MX",
}

console.log(obj2)

// { name2: 'Oscar', age: 32, contry: 'MX' }



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello world"), 3000 )
            :reject(new Error("Test error"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log("finalizo"))


    

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec("2018-04-20");

const year = match[1]

const month = match[2]

const day = match[3]

console.log(year, month, day)


