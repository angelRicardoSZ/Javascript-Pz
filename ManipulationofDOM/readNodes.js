document.getElementById("firstName")

document.getElementsByTagName("input")

document.getElementsByClassName("form-control")

document.querySelector("#address")  // first element

document.querySelector(".form-control")

document.querySelector('div[class="invalid-feedback"]')

document.querySelectorAll('input')

document.querySelectorAll('.mb-3')


// transform nodelist to array 


const nodeList =  document.querySelectorAll('div')
nodeList.length // 40


nodeList.forEach  // ok
// nodeList.map // error
nodeList.some  // error
nodeList.filter  // error
nodeList.reduce  // error

const nodeListAsArray = [...nodeList]


// append 
const container = document.querySelector('div.py-5.text-center')
const h3 = document.createElement('h3')
container.appendChild(h3)
const texto = document.createTextNode("some text")
h3.appendChild(texto)
container.append("another text", document.createElement("div"))

// Insert before
const title = document.createElement("h1")
const reference = document.querySelector("h2")
container.insertBefore(title, reference)

// Insert adjacent
const reference2 =  document.querySelector("h2");
const node= document.createElement("span");

reference2.insertAdjacentElement("beforebegin",node)
reference2.insertAdjacentElement("afterbegin",node)
reference2.insertAdjacentElement("beforeend",node)
reference2.insertAdjacentElement("afterend",node)