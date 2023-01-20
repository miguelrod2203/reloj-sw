"use strict"

// funcion para mostrar nuestros productos

const nuestrosProductos = document.querySelector('#nuestrosProductos');

const renderizarNuestrosProductos = () => {
    listaDeProductos.forEach((producto) => {
        const cardProducto = document.createElement('div')
        cardProducto.classList.add('card_producto')
        cardProducto.setAttribute('data-id', producto.id)
        cardProducto.innerHTML = `
            <div class="imagen_producto">
                <a href="./html/verMas.html">
                    <img src="${producto.imagen}" alt="${producto.nombre}" title="${producto.nombre}">
                </a>    
                    <hr>
            </div>
            
            <div class="Informacion_producto">
                <p> 
                    ${producto.marca} <br>
                    ${producto.nombre} <br>
                    $ ${producto.precio}.
                </p>
            </div>

            <div class="boton_comprar d-grid">
                <a href="#" class="btn justify-content-md-center btn-outline-success">Agregar al Carro</a>
            </div>
            `
        nuestrosProductos.append(cardProducto)
    })
}
renderizarNuestrosProductos();










