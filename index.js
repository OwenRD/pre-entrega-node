import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto } from "./fakestoreAPI.js"

const argumentos = process.argv.slice(2)


    const [metodo, agg] = argumentos

    if(metodo === "GET" && agg === "products"){

        obtenerProductos()

    }else if(metodo === "GET" && agg.startsWith("products/") ){
        const arg = agg.split("/")

        console.log(arg)
        obtenerProducto(arg[1])

    }else if(metodo === "POST" && agg === "products"){

        console.log({
            "id": 21,
            "price": argumentos[3],
            "description": "test",
            "category": argumentos[4],
            "image": "http://example.com",
            "title": argumentos[2],
        })

        agregarProducto({
            "id": 21,
            "price": argumentos[3],
            "description": "test",
            "category": argumentos[4],
            "image": "http://example.com",
            "title": argumentos[2],
        })

    }else if(metodo == "DELETE" && agg.startsWith("products/")){
        const arg = agg.split("/")

        eliminarProducto(arg[1])

    }else{
        console.log("NO se reconocio el comando")
    }
