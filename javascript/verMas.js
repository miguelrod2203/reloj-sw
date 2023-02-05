"use strict"

const contador = document.querySelector('#contador');

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarcontador()
} else {
    productosEnCarrito = [];
}

// contador de productos en carrito
function actualizarcontador() {
    let contadorProductos = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contador.innerText = contadorProductos;
}


// funcion para mostrar detalle de un producto especifico
const caracteristicasDeProducto = (e) => {
    let idProducto = localStorage.getItem('productoElegido');
    idProducto =JSON.parse(idProducto);

    let productoElegido = listaDeProductos.find((producto) => producto.id == idProducto);

    let imagenes = document.querySelector('.imagenes');
    let marca = document.querySelector('.marca');
    let nombre = document.querySelector('.nombre');
    let precio = document.querySelector('.precio');
    let color = document.querySelector('.color');
    let pantalla = document.querySelector('.pantalla');
    let genero = document.querySelector('.genero');
    let sistemaOperativo = document.querySelector('.sistemaOperativo');

    imagenes.textContent = productoElegido.imagenes
    marca.textContent= productoElegido.marca
    nombre.textContent= productoElegido.nombre
    precio.textContent= productoElegido.precio
    color.textContent= productoElegido.color
    pantalla.textContent= productoElegido.pantalla
    genero.textContent= productoElegido.genero
    sistemaOperativo.textContent= productoElegido.sistemaOperativo


    let img = document.createElement("img");
    img.src = '../'+productoElegido.imagen;
    img.alt = productoElegido.modelo;
    img.title = productoElegido.modelo;
    
    document.querySelector('.imagen').appendChild(img)
}
caracteristicasDeProducto();








