export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    _id: number;
    _title:string;
    _orientation:PhotoOrientation;

    constructor(id:number, title:string, orientation:PhotoOrientation){
        this._id = id;
        this._title=title;
        this._orientation=orientation;
    }

    get id(){
        return this._id;
    }

    set id(id:number) {
        this._id=id;
        
    }

    
    get title(){
        return this._title;
    }

    set title(title: string) {
        this._title=title;
        
    }

    get orientation(){
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation) {
        this._orientation=orientation;
        
    }


    toString() {
        return  `[id: ${this._id},
                 title: ${this._title},
                 orientation: ${this._orientation}]`
    }


}

class Album {
    _id: number;
    _title:string;
    _pictures: Picture[];

    constructor(id:number, title:string){
        this._id = id;
        this._title=title;
        this._pictures = [];
        
    }
    get id(){
        return this._id;
    }

    set id(id:number) {
        this._id=id;
        
    }

    get title(){
        return this._title;
    }

    set title(title: string) {
        this._title=title;
        
    }

    public addPicture(picture: Picture){
        this._pictures.push(picture)
    }   
}



const album: Album =new Album(1, "Personal Pictures");
const picture: Picture = new Picture(1, "Picutre 1",PhotoOrientation.Panorama);
album.addPicture(picture)

console.log(album)


//Accediendo a los miembros publicos
console.log("picture.id", picture.id)
picture.id = 100;  // error
picture.title = "new title" // error

console.log(album)