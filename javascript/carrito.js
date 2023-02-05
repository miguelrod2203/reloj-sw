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
                            <p>
                                <b>${producto.nombre}</b><br>
                                <b>Precio:</b> $ ${producto.precio} <br>
                            </p>
                             
                        </div>
                        <div class="col producto-carrito"> 
                        <p>
                            <b>Cantidad:</b> ${producto.cantidad} <br>
                            <b>Subtotal:</b> $ ${producto.precio * producto.cantidad}<br>
                        </p>
                         
                    </div>
                        
                        <div class="col eliminar-carrito">
                            <a href="#" class="btn btn-outline-danger carrito-producto-eliminar" id="${producto.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                Borrar
                            </a>
                            <a href="../index.html" class="btn btn-outline-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
                                </svg>
                                Volver
                            </a> 
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
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #dc3545 60%, #141212)",
          borderRadius: "2rem",
          fontSize: ".75rem",
          padding: "5px"
        },
        offset: {
            x: '5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '2rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();


    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);

    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// para vaciar todo el carrito 

botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito() {
    Swal.fire(
        'Estas Seguro?',
        'Se van a eliminar todos tus productos',
        'question'
      )
      Swal.fire({
        title: '¿Estas Seguro?',
        icon: 'question',
        html:
          'Se van a eliminar todos los productos',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          'Si',
        cancelButtonText:
          'No',
      }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
      })
}


// calculando la sumatoria de precios del producto

function actualizarTotal () {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `Total a pagar: $ ${totalCalculado}`;
}

