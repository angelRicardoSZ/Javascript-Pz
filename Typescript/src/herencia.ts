export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}


interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity{
    description: string;
}

interface Picture extends Entity{
    orientation:PhotoOrientation;
}

const album: Album = {
    id: 2,
    title: "title1",
    description: "Some description"
}

const picture: Picture = {
    id: 3,
    title: "Family",
    orientation: PhotoOrientation.Panorama
}


let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = "Moon";


console.log("Album", album)
console.log("picture", picture)
console.log("new Picture", newPicture)
