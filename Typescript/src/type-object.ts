// Type: object

let user: object;
user = {}; // Object

user = {
    id:1,
    username:"Angel2",
    firstname: "Angel",
    isPro: true,
}


console.log("user", user);
// Object vs object (Class JS vs tipo TS )
const myObj =  {
    id:1,
    username:"Angel2",
    firstname: "Angel",
    isPro: true,
}

const isInstance = myObj instanceof Object; // Javascript Object Class 

console.log("isInstance", isInstance);


console.log("myObj.username",myObj.username)