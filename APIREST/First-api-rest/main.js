const API_KEY = 'f1f3f4e6-a5fe-420a-ae84-bc7f162d013c'

// Axios instance
//const api = axios.create({
//    baseURL: 'https://api.thecatapi.com/v1',
//}) 
//api.defaults.headers.common['x-api-key'] = API_KEY

//const API_URL = 'https://api.thecatapi.com/v1/images/search'
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=2';
const API_URL_FAV = 'https://api.thecatapi.com/v1/favourites?limit=10';
const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';
const API_URL_FAV_DELETE = (id)=> `https://api.thecatapi.com/v1/favourites/${id}`;

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
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
    
        img1.src = data[0].url;
        img2.src = data[1].url;


        btn1.onclick = ()=>saveFav(data[0].id);
        btn2.onclick = ()=> saveFav(data[1].id);
    }
    
    

    
}


async function loadFavorites() {
    const res = await fetch(API_URL_FAV, {
         method: 'GET',
         headers:{
             'x-api-key':API_KEY
        }
    });
    const data = await res.json();

    // With axios
    //const {data,status} = await api.get('/favourites')
    //console.log("FAV")
    //console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status;
        
    } else {
        const section = document.getElementById('favoritesMichis')
        section.innerHTML = ""
        const h2 = document.createElement('h2')
        const h2text = document.createTextNode('Gatos favoritos')
        h2.appendChild(h2text)
        data.forEach(gato=>{
            
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btn_text = document.createTextNode('Sacar al gato de los favoritos');
            btn.appendChild(btn_text)
            img.src=gato.image.url
            img.width = 150;
            btn.onclick = ()=> deleteFav(gato.id)
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article)
        })
    
    }
}
//const Button = document.querySelector("button");
//console.log(Button)
//Button.onclick = cat;

async function saveFav(id){
    const res = await fetch(API_URL_FAV, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key':API_KEY
        },
        body: JSON.stringify(
            {
                image_id:id
            }
        )
    })
    const data = await res.json();
    console.log("Saving fav")
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status + data.message;
        
    } else {
        console.log("Gato guardado en favoritos")    
        loadFavorites()
    }

    console.log("save")
    console.log(res)
}


async function deleteFav(id){
    const res = await fetch(API_URL_FAV_DELETE(id), {
        method: 'DELETE',
        headers:{
            'x-api-key':API_KEY
        }
    })
    const data = await res.json();
    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status + data.message;
        
    } else {
        console.log("Gato eliminado de favoritos") 
        loadFavorites()   
    }
}


async function uploadGato() {
    const form = document.getElementById('uploadingForm')
    console.log(form)
    const formData = new FormData(form);
    console.log("Upload")
    console.log(formData.get('file'))
    const res = await fetch(API_URL_UPLOAD,{
        method: 'POST',
        headers: {
            //'Content-Type':'multipart/form-data',
            'X-API-KEY':API_KEY
        },
        body: formData,
    })
    const data = await res.json();
    if (res.status !== 201) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
        console.log({data})
    } else {
        console.log('Foto de michi subida :)')
        console.log({data})
        console.log(data.url)
        saveFav(data.id);
      }
}   

cat()
loadFavorites()