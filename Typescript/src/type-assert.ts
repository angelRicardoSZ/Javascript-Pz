export = {}
// <datatype> Angle bracket syntax

let username: any;
username = "als"
// typescript trust me
let message: string = (<string>username).length > 5 ? 
            `Welcome ${username}`:
            "Username is too short";

console.log("message", message);


let usernameId : any = "angericardo 1 ";
// get the username
username = (<string>usernameId).substring(0,10);
console.log("username only ", username)



//  as syntax
let username2: any;
username2 = "alssadasd"
let message2:string = (username2 as string).length > 5 ? 
            `Welcome ${username2}`:
            "Username is too short";

console.log("message", message2);


let helloUser: any;
helloUser = "hello angel";
username2 = (helloUser as string).substring(6)
console.log("username2",username2)
