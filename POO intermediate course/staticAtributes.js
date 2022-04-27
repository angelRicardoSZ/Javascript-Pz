const estudiante = {
    name:"Angel",
    age:20,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("this (function)",this);
        console.log("this.approveedCourses (function)",this.approvedCourses);

        this.approvedCourses.push(newCourse);
    }
}

// propiedades estaticas del super prototipo Object
// console.log(Object.keys(estudiante));
// console.log(Object.getOwnPropertyNames(estudiante));
// console.log(Object.entries(estudiante));
//Se debe tener cuidado con Object.entries, pues aunque en el codigo
// que se muestra a continuacion podemos acceder a la función
// addCourse, this cambia de hacer referencia al objeto "estudiante"
// y ahora hace referencia al array que contiene la clave y valor
// en este caso, this hace referencia a ["addCourse", f]
// console.log(Object.entries(estudiante)[3][1]("curso 2")) 



// Sintaxis 
// Objeto que queremos modificar
// Nombre del nuevo atributo
// objeto de atributos

Object.defineProperty(estudiante, "terminal", {
    value:"WSL",
    enumerable:true,
    writable:true,      // permite editar
    configurable:false, // no deja borrar
})

Object.defineProperty(estudiante, "pruebaNasa", {
    value:"extraterrestres",
    enumerable:false,       
    writable:false,     // no se puede editar
    configurable:false, // no se puede borrar
})

Object.defineProperty(estudiante, "navigator", {
    value:"Chrome",
    enumerable:false,   // no aparece listado con Object.keys
    writable:true,      // se puede editar
    configurable:true,  // se puede eliminar
})

Object.defineProperty(estudiante, "editor", {
    value:"VScode",
    enumerable:true,
    writable:false,     // no permite editar el valor
    configurable:true,
})

console.log(Object.getOwnPropertyDescriptors(estudiante))

Object.keys(estudiante) // no aparece navegator

//Object.seal(estudiante) // no se puede editar ninguna propiedad ni agregar nuevas

Object.freeze(estudiante) // no permite eliminar ni editar
