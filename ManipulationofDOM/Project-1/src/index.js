/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/



// console.log('Happy hacking :)')

const urlBase = "https://platzi-avo.vercel.app/"
const urlApi = `${urlBase}api/avo`
const appNode = document.querySelector("#app")

const formatPrice = (price) => {
    
    const newPrice = new window.Intl.NumberFormat("en-EN",{
        style:"currency",
        currency:"USD"

    }).format(price)
    return newPrice 

}

window.fetch(urlApi)
.then(response => response.json())
.then( responseJson=> {
    // console.log(responseJson)
    console.log(responseJson.data)

    const allItems = []

    responseJson.data.forEach(item => {
        // console.log(item.name)
        const image = document.createElement("img");
        image.src= `${urlBase}${item.image}`
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

        const title = document.createElement("h2");
        title.className = "text-lg"
        title.textContent = item.name
        console.log(item.name)

        const price = document.createElement("div");
        price.className = "text-gray-600"
        price.textContent = formatPrice(item.price)


        const priceAndTitle = document.createElement("div")
        priceAndTitle.className = 'text-center md:text-left'
        priceAndTitle.appendChild(title)
        priceAndTitle.appendChild(price)

        const card =document.createElement("div");
        card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300"
        card.append(image,priceAndTitle)



        allItems.push(card);

    });
    appNode.append(...allItems);
})
