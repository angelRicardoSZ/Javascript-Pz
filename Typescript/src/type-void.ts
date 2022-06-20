// Void

// Explicit
function showInfo(user: any) : any{
    console.log("User info", user.id, user.username, user.firstName)
}

showInfo({
    id:1,
    username:"angel",
    firstName:"Angel"
})

// Implicit
function showFormattedInfo(user:any) {
    console.log("User info",
    `id: ${user.id} username: ${user.username} firstname: ${user.firstName}`
    )
}
showFormattedInfo({
    id:1,
    username:"angel",
    firstName:"Angel"
});


// void as datatype 
let unusable: void;
// unusable=null;
unusable = undefined;


// Never 
function handleError(code: number, message:string) : never{
    throw new Error(`${message}. Code: ${code}`)
}


try {
    handleError(404, "Not found")
} catch (error){

}


function sumNumbers(limit:number): never {
    let sum = 0;
    while(true) {
        sum++
    }
}
// sumNumbers(10)