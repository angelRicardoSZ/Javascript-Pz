type SquareSize = "100x100" | "500x500"


function createPicture(title?: string , date?: string, size?: SquareSize){
    console.log("created picture using", title, date, size)

}

createPicture("My birthday", "2020-03-21","500x500")

createPicture("title 2", "date 2")


// flat array functions
let createPic =  (title:string, date:string, size:SquareSize): object => {
    return {
        title,
        date,
        size
    }   
}


const pic = createPic("session 1", "2020", "500x500")

console.log("pic", pic)



// return type 

function handleError(code: number, message:string): never | string {
    if(message=="error"){
        throw new Error(`${message}. Code error: ${code}`)
    } else {
        return "An error has occurred"
    }

}


try{
    let result = handleError(200,"ok")
    console.log("result",result)  // string

    result = handleError(400,"error") // never
    console.log("result",result)
} catch (e) {
    console.error(e)

}