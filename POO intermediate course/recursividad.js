const numeros = [0,1,2,3,4,5,6,7,8,9,10]
//let numero = 0;

//for(let index = 0; index <numeros.length; index++) {
//   numero = numeros[index]
//    console.log({index, numero })
//
//}

function recursiva(numbers){
    if (numbers.length != 0) {
        const firstNum = numbers[0];
        console.log(firstNum)
        numbers.shift();
        recursiva(numbers);
    } 
}