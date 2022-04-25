// Aunque no se declara al inicio, el hoisting eleva las declaraciones
// asi que eleva el valor de var a
a = 2;
var a;
console.log(a)

// En este caso, no estamos generando el valor, sino tratando
// de acceder a un valor
console.log(a);
var a = 2;


nameofDog("Elmo")
function nameofDog(name) {
    console.log(name)
}

