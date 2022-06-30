// https://getbootstrap.com/docs/5.2/examples/checkout/

const input = document.getElementById("firstName")

// function
const action = () => {
    console.log("Ha sucedido un click")
}

const action2 = () => {
    console.log("Ha ingresado un valor")
}

const action3 = (event) => {
    if(event.data === "p") {
        console.log("Ha ingresado una p")
    }
}



// click
input.addEventListener("click", action)

// input
input.addEventListener("input", action2)
input.addEventListener("input", action3)


// remove events
const email = document.getElementById("email")

const event1 = () => console.log("event 1")
const event2 = () => console.log("event 2")

email.addEventListener("click",event1)
email.addEventListener("click",event2)

email.removeEventListener("click",event1)


// event propagation

const accion = (event) => console.log(event.target.nodeName) 
const accion2 = (event) => console.log("hola desde: "+event.currentTarget.nodeName)
$0.addEventListener("click", accion2)

// stop propagation
const accion3 = (event) =>  {
        event.stopPropagation()
        console.log( "hola desde: "+event.currentTarget.nodeName)
    }
$0.addEventListener("click", accion3)



// event delegation
nodeFather.addEventListener("click", (event)=> {
    if (event.target.nodeName ==="nodechild") {
        window.alert("hola")
    }
})

