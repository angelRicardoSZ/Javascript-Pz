let nombre = process.env.NOMBRE || "Sin nombre"; //Using environment variables assign a value
let web = process.env.WEB || "No tengo web";
console.log("hola "+ nombre)
console.log("Mi web es "+web)