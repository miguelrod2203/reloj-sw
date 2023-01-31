// funcionalidad del carrito

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoConProductos = document.querySelector("#carritoConProductos");
const contenedorResumenCompra = document.querySelector("#resumenCompra");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        
        contenedorCarritoConProductos.classList.remove("disabled");
        contenedorResumenCompra.classList.remove("disabled");

        contenedorCarritoConProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("contenedor-carrito");
            div.innerHTML = `
                    <div class="row disabled" id="">
                        <div class="col-3 imagen-carrito">
                            <img src="${producto.imagen}" alt="${producto.nombre}" title="reloj">    
                        </div>
                        
                        <div class="col-7 producto-carrito"> 
                            <p><b>Nombre:</b> ${producto.nombre}</p> 
                            <p><b>Precio:</b> $ ${producto.precio}</p> 
                            <p><b>Cantidad:</b> ${producto.cantidad}</p> 
                            <p><b>Subtotal:</b> ${producto.precio * producto.cantidad}</p>
                             
                        </div>
                        
                        <div class="col-2 imagen-carrito">
                            <a href="#" class="btn btn-danger carrito-producto-eliminar" id="${producto.id}">Borrar</a>    
                        </div>
                    </div>
                    <hr>
        
            `;
            contenedorCarritoConProductos.append(div);

        })

        actualizarBotonesEliminar ();

    } else {
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


