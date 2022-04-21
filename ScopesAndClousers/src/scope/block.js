const fruits = () => {
    if(true){
        var fruits1 = "apple";      // con var se puede acceder de forma local dentro de la función
        let fruits2 = "banana";     // con let y const solo dentro del bloque
        const fruits3 = "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);

}
fruits();

// asignacion de valor con let
let x = 1;
{
    let x = 2;
    console.log(x); // x = 2
}
console.log(x)      // x = 1



var x = 1;          //
{
    var x = 2;          
    console.log(x); // x = 2
}
console.log(x)      // x = 2



const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }
}
anotherFunction();