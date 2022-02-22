// We declare the function that we will use //
// Principal function //
function sum(par1, par2) {
    return par1 + par2;
}

// We declare the function that uses the function already declared //

// Auxiliar function //
function calc(par1, par2, callback){
    return callback(par1, par2);
}

// we use the function declared by the auxiliary function //

console.log(calc(2,2,sum));




// Auxiliar function //

function date(callback) {
    console.log("fecha de date " + new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);   
    },3000)
} 

// Principal function //
function printDate(dateNow){
    console.log( "fecha de printDate " + dateNow);
}

//   Call date function with parameter =principal function
//  In first place, the function "date" show the current date "new Date"
//  In second place, the auxiliary function calls to setTimeout
//  In this last function, the callback is called


date(printDate);