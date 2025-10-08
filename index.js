import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto } from "./fakestoreAPI.js"

const argumentos = process.argv.slice(2)
const [metodo, agg, ...rest] = argumentos

if (metodo) {

    switch (metodo) {
        case "GET":

            if (agg) {

                if (agg === "products") {

                    obtenerProductos()

                } else if (agg.startsWith("products/")) {
                    const arg = agg.split("/")

                    if (arg[1]) {
                        obtenerProducto(arg[1])
                    } else {
                        console.log("falta datos")
                    }

                } else {
                    console.log("NO se reconocio el comando")
                }

            } else {
                console.log("Faltan argumentos")
            }

            break;
        case "POST":

            if (agg) {

                if (agg == "products") {

                    if (rest.length == 3) {
                        agregarProducto({
                            "id": 21,
                            "price": argumentos[3],
                            "description": "test",
                            "category": argumentos[4],
                            "image": "http://example.com",
                            "title": argumentos[2],
                        })
                    } else {
                        console.log("Faltan argumentos")
                    }

                } else {
                    console.log("NO se reconocio el comando")
                }

            } else {
                console.log("Faltan argumentos")
            }

            break;
        case "DELETE":

            if (agg) {

                if (agg.startsWith("products/")) {
                    const arg = agg.split("/")

                    if(arg[1]){
                        eliminarProducto(arg[1])
                    }else{
                        console.log("Faltan argumentos")
                    }

                }else{
                    console.log("NO se reconocio el comando")
                }

            } else {
                console.log("Faltan argumentos")
            }

            break;
        default:
            console.log("NO se reconocio el comando")
    }

} else {
    console.log("Se debe agregar un comando")
}