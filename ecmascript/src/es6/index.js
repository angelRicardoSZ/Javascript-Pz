function newF(name,age,country) {
    var name = name || "angel";
    var edad = edad || 25;
    var country = country || "MX";
    console.log(name, edad, country);
}


// es6

function newF2(name="angel", age=25, country="MX"){
    console.log(name, age, country);

}

newF2();
newF2("Juan", 32, "CO");


let hello = "Hello";
let wo = "World";
let epic = hello + " " + wo;
console.log(epic);


let epic2 = `${hello} ${wo}`;
console.log(epic2);

let lorem = "dsdsd asdasdad sdasdasd asdasd \n"
+ "otra frase";


let lo = `una frase 
y otra frase `;
console.log(lorem);
console.log(lo);



let person = {
    "nombre": "Angel",
    "edad": 25,
    "Pais": "MX",
}

console.log(person.nombre, person.edad);
// ecma
let {nombre, edad, Pais } = person;
console.log(nombre, edad, Pais);



let team1 = ["Angel", "Rob", "Jose" ];
let team2 = ["Valeria", "Yessica", "Camila" ];

let education = ["dav", ...team1, ...team2];

console.log(education);


{
    var globalVar = "Global Var";
}

{
    let globalet = "Globval let";
    console.log(globalet);    
}


console.log(globalVar);


const a = "b";
a = "a";



let nombre = "Angel";
let edad = 35;
obj = {name:nombre,age:edad };
// es6
obj2 = {nombre, edad};
console.log(obj2);



const names = [
    {nom: "Angel", ed: "35"},
    {nom: "Yes", ed: "28"}
]


let lisOfNames = names.map(function(item){
    console.log(item.nom);
})

let lisOfNames2 = names.map(item => console.log(item.nom));



// Promise 
const helloP = () => { 
    return new Promise((resolve, reject) =>{
        if(true){
            resolve("Todo Ok");
        } else {
            reject("Algo salio mal");
        }
    });
}


helloP()
    .then(response => console.log(response))
    .catch(error => console.log(error))



// Classes


class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB =valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(2,2));


// module 
import { hello } from "./module";
 
hello;


// generators 

function* helloWorld() {
    if (true) {
        yield "hello";
    }
    if (true) {
        yield "World";
    }
    if (true) {
        yield "Mexico";
    }
};

const generatorHello =helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
