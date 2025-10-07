export async function obtenerProductos () {
    try {
        
        const responce = await fetch("https://fakestoreapi.com/products", {
            method: "GET"
        })

        const data = await responce.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

export async function obtenerProducto(id) {
    try {
        
        const responce = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: "GET"
        }) 

        const data = await responce.json()
        console.log("DATA: ", data)

    } catch (error) {
        console.log("ERROR CAPTURADO: ",error)
    }
}

export async function agregarProducto(producto) {
    try {
        
        const responce = await fetch(`https://fakestoreapi.com/products`, {
            method: "POST",
            headers:  { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        })

//        const data = await responce.json()
        console.log("RESPUESTA de POST: ",responce)

    } catch (error) {
        console.log(error)
    }
}

export async function eliminarProducto(id) {
    
    try {
        
        const responce =  await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: "DELETE"
        })

        const data = await responce.json()
        console.log("DATA de DELETE: ", data)

    } catch (error) {
        console.log(error)
    }

}