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


// Another ways to add 
// in the browser  $0 returns the actual node
// Example
// $0 
// output: <h2>Checkout form</h2>  
$0.outerHTML   // Returns a string. Read  
$0.innerHTML   // Returns a string. Read ans write the content
// We can use outer and inner to replace something
const newHTML = $0.outerHTML.replace("Checkout form","Checkout form edited")

$0.innerHTML = newHTML


// warning: avoid if the string comes from the user



// Attributes
$0.className 
$0.text
$0.value
// attribute is the initial state in our HTML
// property is the variable that we can change throughout the execution of the program using JavaScript



// Remove nodes 
const nodetoDelete = $0
const nodeFather = $0 
const nodeFather2 = nodetoDelete.parentElement  // another way

nodeFather.removeChild(nodetoDelete)
$0.parentElement.removeChild($0)  // another way


// Example with remove
const reference3 = document.querySelector("h2")
reference3.remove()


 // replace child
 const father = document.querySelector("div.py-5.text-center")
 const toReplace = document.querySelector("h2")
 const node4 = document.createElement("h1")
 node4.textContent = "New Form "
 father.replaceChild(node4, toReplace)


// add nodes
const nodes = []
for (let i = 0; i <100; i++){
    const node = document.createElement("input")
    nodes.push(node)
}

document.body.append(...nodes)
