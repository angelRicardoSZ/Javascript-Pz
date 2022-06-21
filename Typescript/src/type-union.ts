
export {};

// alias
type IdUser = number | string;
type Username = string;
let idUser : IdUser;

idUser = 10;
idUser = "10";

// search username given an ID
function getUsernamebyID (id:IdUser):Username {
    return "angel";

}

getUsernamebyID(20);
getUsernamebyID("20");

// literals

type SquareSize = "100x100" | "500x500" |"1000x1000";
//let smallPictures: SquareSize = "100x100"; // error
// let smallPictures: SquareSize = "100x100"; // ok
