// Number 
// Explicit
let phone : number;
phone = 1;
phone = 13213;
// phone = "asdas"; error

// Implicit
let phoneNumber = 5616;
// phoneNumber = true; Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


// Boolean
// Explicit
let isPro : boolean;
isPro = true;

// implicit
let isUserPro = false;

// String
let username: string = "angel";
username = "Luis";

// backtick
let userInfo: string;
userInfo = `User info: User name: ${username} sanchez,  phone: ${phone}, isPro ${isPro}`
console.log(userInfo)