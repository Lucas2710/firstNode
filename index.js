console.log("Hello world")


const datos = require("./datos.js");
console.log("hola, soy " + datos.datos.Nombre + " y tengo " + datos.datos.Edad + " años.")
console.log(`Hola, soy ${datos.datos.Nombre} y tengo ${datos.datos.Edad} años.`)

var catMe=require("cat-me")


console.log(catMe())