// const landscape = 0;
// const porttrait = 1;
// const square = 2;
// const panorama = 3;
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
const portrait: PhotoOrientation = PhotoOrientation.Portrait;
console.log("landscape", landscape)
console.log("Portrait", portrait)


enum Country {
    Bolivia = "bol",
    Colombia = "col",
    Mexico = "mex",
    EEUU = "usa",
    Espana = "esp"
}

const country : Country = Country.Bolivia;
console.log("Country", country)
