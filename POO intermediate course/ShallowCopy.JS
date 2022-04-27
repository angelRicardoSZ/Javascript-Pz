const obj1 = {
    a:"a",
    b:"b",
}

const obj2 = {};

for(prop in obj1){
    obj2[prop] = obj1[prop];
}


console.log(obj1)

console.log(obj2)

obj2.a = "a nueva"
console.log(obj1)

console.log(obj2) // no se modifica el objeto 1



const obj3 = {
    a:"a",
    b:"b",
    c: {
        d: "d",
        e:"e"
    }
}

const obj4 = {};

for(prop in obj3){
    obj4[prop] = obj3[prop];
}

console.log("Obj3")
console.log(obj3)
console.log("Obj4")
console.log(obj4)

obj3.c.d="nueva d" // se modifica tambien el objeto 4

console.log("Obj3 modificado")
console.log(obj3)
console.log("Obj4 no modificado")
console.log(obj4)


// usando un metodo estatico

const obj5 = Object.assign(obj3); // Obj5 sigue afectado por obj3


const obj6 = Object.create(obj3)  // permite asignar los valores de obj3
                                 // con lo cual al editar la copia no afecta al original
                                 // excepto que sea un objeto dentro de un objeto
                                 // tambien si editamos el original cambia la copia

console.log(obj6)
