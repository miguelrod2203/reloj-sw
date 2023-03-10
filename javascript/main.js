"use strict"

// aplicando fetch para llamar mi lista de productos

let listaDeProductos = [];

fetch("javascript/date.json")
    .then(response => response.json())
    .then(data => {
        listaDeProductos = data;
        renderizarNuestrosProductos(listaDeProductos)
    })


// funcion para guardar el id del producto

const detallesProducto = (e) => {
    const idProducto = e.target.closest('.card_producto').getAttribute('data-id');

    const idJason = JSON.stringify(idProducto);
    localStorage.setItem("productoElegido", idJason);

}


// funcion para mostrar nuestros productos 

const nuestrosProductos = document.querySelector('#nuestrosProductos');
let botonesAgregar = document.querySelectorAll('.agregar-producto');
const contador = document.querySelector('#contador');

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
                    $ ${producto.precio}
                </p>
            </div>

            <div class="boton_comprar d-grid">
                <button class="btn justify-content-md-center btn-outline-success agregar-producto" id="${producto.id}">Agregar al Carro</button>
            </div>
            `
        nuestrosProductos.append(cardProducto)

    })
    
    const verMasDelProducto = document.querySelectorAll('.card_producto')
    verMasDelProducto.forEach((verMas) => {
        verMas.addEventListener('click', detallesProducto)
    })

    actualizarBotonesAgregar();
}

renderizarNuestrosProductos();


// actualizar el id de los botones
function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll('.agregar-producto');
    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}


// agregar producto al carrito

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarcontador()
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: false,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #198754, #96c93d)",
          borderRadius: "2rem",
          fontSize: ".75rem",
          padding: "5px"
        },
        offset: {
            x: '1.5rem', 
            y: '2rem' 
          },
        onClick: function(){} 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = listaDeProductos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarcontador();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// contador de productos en el carrito

function actualizarcontador() {
    let contadorProductos = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contador.innerText = contadorProductos;
}

