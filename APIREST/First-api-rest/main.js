//const API_URL = 'https://api.thecatapi.com/v1/images/search'
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=';
const API_URL_FAV = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=';
//fetch(URL)
//    .then(res => res.json())
//    .then(data => {
//        const img = document.querySelector('img')
//        img.src = data[0].url
//    })
const spanError = document.getElementById('error');

async function cat() {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data)
    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status;
        
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
    
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
    
}


async function loadFavorites() {
    const res = await fetch(API_URL_FAV);
    const data = await res.json();
    console.log("FAV")
    console.log(data)
    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status;
        
    }
    
}
//const Button = document.querySelector("button");
//console.log(Button)
//Button.onclick = cat;

loadFavorites()