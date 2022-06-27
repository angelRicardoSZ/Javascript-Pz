export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

abstract class Item {
    protected readonly _id : number;
    protected readonly _title: string;
    constructor(id:number, title:string){
        this._id = id;
        this._title=title;
    }
    get id(){
        return this._id;
    }
    // set id(id:number) {
    //     this._id=id;
        
    // }
    get title(){
        return this._title;
    }
//     set title(title: string) {
//         this._title=title;
        
//     }
}



class Picture extends Item {
    static photoOrientation = PhotoOrientation;
    private _orientation:PhotoOrientation;

    constructor(id:number, title:string, orientation:PhotoOrientation){
        super(id,title)
        this._orientation=orientation;
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

class Album extends Item {

    _pictures: Picture[];

    constructor(id:number, title:string){
        super(id,title)
        this._pictures = [];
        
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
// picture.id = 100;  // error
// picture.title = "new title" // error

console.log(album)


// const item = new Item(5,"Test title");  // error
// console.log("item", item)


// test static member
console.log("PhotoOrientation", Picture.photoOrientation.Panorama)


