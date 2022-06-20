// explicit 

let nullVariable: null;
nullVariable=null;  // ok
// nullVariable = 1; // error

let otherVariable = null;  // se asigna como any
otherVariable = "test"

console.log("nullVariable",nullVariable)
console.log("other", otherVariable)


// Undefined
let undefinedVariable: undefined = undefined ; 
// undefinedVariable = "test" // error
let otherUndefined = undefined; // lo define como any
otherUndefined = 1 // ok

console.log("undefined", undefinedVariable)
console.log("otherUndefined", otherUndefined)


// null and undefined as subtypes
// strickNullChecks
let albumName : string;
// albumName = null;
// albumName = undefined;