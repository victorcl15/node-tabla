
//const { argv } = require("yargs")
const { boolean } = require("yargs")
const {crearArchivo} = require("./tablas/multiplicar")
const argv = require("./tablas/config/yargs")
//const base = 3
console.clear()

console.log(argv)

//console.log("base: yargs", argv.base)
// const [ , , arg3] = process.argv
// const [, base = 5] = arg3.split("=")
//console.log( base)
crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch( err => console.log(err))
