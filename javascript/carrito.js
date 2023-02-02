// funcionalidad del carrito

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoConProductos = document.querySelector("#carritoConProductos");
const contenedorResumenCompra = document.querySelector("#resumenCompra");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const contenedorTotal = document.querySelector("#total");
const botonVaciar = document.querySelector("#vaciar-carrito")

function cargarProductosCarrito() {
    console.log('productosEnCarrito: ', productosEnCarrito.length);
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        contenedorCarritoConProductos.classList.remove("disabled");
        contenedorResumenCompra.classList.remove("disabled");

        contenedorCarritoConProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("contenedor-carrito");
            div.setAttribute("id","producto-"+producto.id);
            div.innerHTML = `
                    <div class="row">
                        <div class="col imagen-carrito">
                            <img src="../${producto.imagen}" alt="${producto.nombre}" title="reloj">    
                        </div>
                        
                        <div class="col producto-carrito"> 
                            <p><b>Nombre:</b> ${producto.nombre}</p> 
                            <p><b>Precio:</b> $ ${producto.precio}</p> 
                            <p><b>Cantidad:</b> ${producto.cantidad}</p> 
                            <p><b>Subtotal:</b> ${producto.precio * producto.cantidad}</p>
                             
                        </div>
                        
                        <div class="col eliminar-carrito">
                            <a href="#" class="btn btn-danger carrito-producto-eliminar" id="${producto.id}">Borrar</a>
                            <a href="../index.html" class="btn btn-primary" id="volver">Volver</a> 
                        </div>
                    </div>
                    <hr>
        
            `;
            contenedorCarritoConProductos.append(div);

        });

        actualizarBotonesEliminar ();
        actualizarTotal();
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoConProductos.classList.add("disabled");
        contenedorResumenCompra.classList.add("disabled");
    }
}

cargarProductosCarrito();


// botones eliminar
function actualizarBotonesEliminar (){
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
    botonesEliminar.forEach((boton) => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);

    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// para vaciar todo el carrito 

botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}


// calculando la sumatoria de precios del producto

function actualizarTotal () {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$ ${totalCalculado}`;
}

