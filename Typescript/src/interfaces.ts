export {};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date:string;
    orientation: PhotoOrientation;
}


interface   PictureConfig {
    title?:string;
    date?:string;
    orientation?:PhotoOrientation

}


function showPicture(picture:Picture) {
    console.log(`[title: ${picture.title},
                date: ${picture.date},
                orientation: ${picture.orientation}]`)
}

let myPic = {
    title: "Test title",
    date: "2022-06",
    orientation: PhotoOrientation.Panorama
}


showPicture(myPic);
showPicture({
    title:"test title 2",
    date:"2021-22",
    orientation:PhotoOrientation.Landscape,
});




function generatePicture(config: PictureConfig) {
    const pic = {title: "Default", date: "2020-04"};
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date
    }
    return pic;
}



let picture = generatePicture({});
let picture2 = generatePicture({title:"Travel pic"});
console.log("picture", picture);
console.log("picture", picture2);


// read only
interface User {
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: "angel", isPro:true}
console.log("user", user);
user.username = "paparatzi"
console.log("user edit", user)
// user.id = 150; // error
console.log("id edited", user)