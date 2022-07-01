/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy";
const urlBase = "https://randomfox.ca/images/"
const mountNode = document.getElementById("images")
const addbutton = document.querySelector("button");
const maximum = 122;
const minimum = 1;


const createImage = () => {
    const random = () => Math.floor(Math.random()*(maximum - minimum)) + minimum
    const urlApi = `${urlBase}${random()}.jpg`
    const container = document.createElement("div");
    container.className = "p-4";

    const image = document.createElement("img");
    image.className = "mx-auto";
    image.width = "320";
    image.dataset.src = urlApi

    container.appendChild(image)

    return container
}




const addImage = () => {
    const newImage = createImage();
    mountNode.appendChild(newImage)
    registerImage(newImage)
}

addbutton.addEventListener("click", addImage)