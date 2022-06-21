export = {};
let user: [number, string];
user = [1,"Angel"]

console.log("user",user)
console.log("user",user[0])
console.log("user",user[1].length)

// tuples with several values
let userInfo: [number, string, boolean];
userInfo = [2,"anotherUser", false]


console.log("userinfo",userInfo)

// Array of tuples
let array: [number, string][] = [];
array.push([1,"User1"])
array.push([2,"User2"])
array.push([3,"User3"])
console.log(array)

// array functions 
array[2][1]= array[2][1].concat("001");
console.log("array",array)