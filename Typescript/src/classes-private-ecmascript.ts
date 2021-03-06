export {}
// Typescript > 3.8

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    #id: number;
    #title:string;
    #orientation:PhotoOrientation;

    constructor(id:number, title:string, orientation:PhotoOrientation){
        this.#id = id;
        this.#title=title;
        this.#orientation=orientation;
    }
    public toString() {
        return  `[id: ${this.#id},
                 title: ${this.#title},
                 orientation: ${this.#orientation}]`
    }


}

class Album {
    #id: number;
    #title:string;
    #pictures: Picture[];

    constructor(id:number, title:string){
        this.#id = id;
        this.#title=title;
        this.#pictures = [];
        
    }

    public addPicture(picture: Picture){
        this.#pictures.push(picture)
    }   
}



const album: Album =new Album(1, "Personal Pictures");
const picture: Picture = new Picture(1, "Picutre 1",PhotoOrientation.Panorama);
album.addPicture(picture)

console.log(album)


// Accediendo a los miembros publicos
// picture.id = 100;  // error
// picture.title = "new title" // error

// console.log(album)