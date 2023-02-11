// funcionalidad del carrito

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoConProductos = document.querySelector("#carritoConProductos");
const contenedorResumenCompra = document.querySelector("#resumenCompra");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const contenedorTotal = document.querySelector("#total");
const botonVaciar = document.querySelector("#vaciar-carrito");
const botonPagar = document.querySelector("#pagar-carrito");
const captacionDatos = document.querySelector("#captacion-datos");

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
                                Borrar
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
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

// calculando la sumatoria de precios del producto

function actualizarTotal () {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `Total a pagar: $ ${totalCalculado}`;
}

// funcion para vaciar todo el carrito 

botonVaciar.addEventListener("click", vaciarCarrito);
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
            captacionDatos.classList.add("disabled");
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
      })
}

// pagar productos en carrito

botonPagar.addEventListener("click", pagarCarrito);
function pagarCarrito() {
    captacionDatos.classList.remove("disabled");
    contenedorCarritoConProductos.classList.add("disabled");
    botonVaciar.classList.add("disabled");
    botonPagar.classList.add("disabled");
}


// validar formulario de compra

const formularioCliente = document.getElementById('formulario-cliente');
const nombreCliente = document.getElementById('nombreCliente');
const telefonoCliente = document.getElementById('telefonoCliente');
const correoCliente = document.getElementById('correoCliente');
const direccionCliente = document.getElementById('direccionCliente');
const observacionCliente = document.getElementById('observacionCliente');
const metodoPagoCliente = document.getElementById('metodoPagoCliente');

formularioCliente.addEventListener("submit", e=>{
    e.preventDefault()
    let entrar = false;
    let expresionRegularCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nombreCliente.value.length < 3){
        document.getElementById('error-nombreCliente').classList.remove("mensaje-errorCliente");
        entrar = true;
    } else {
        document.getElementById('error-nombreCliente').classList.add("mensaje-errorCliente");
    }

    if(telefonoCliente.value.length < 7){
        document.getElementById('error-telefonoCliente').classList.remove("mensaje-errorCliente");
        entrar = true;
    } else {
        document.getElementById('error-telefonoCliente').classList.add("mensaje-errorCliente");
    }

    if(!expresionRegularCorreo.test(correoCliente.value)){
        document.getElementById('error-correoCliente').classList.remove("mensaje-errorCliente");
        entrar = true;
    } else {
        document.getElementById('error-correoCliente').classList.add("mensaje-errorCliente");
    }

    if(direccionCliente.value.length < 6){
        document.getElementById('error-direccionCliente').classList.remove("mensaje-errorCliente");
        entrar = true;
    } else {
        document.getElementById('error-direccionCliente').classList.add("mensaje-errorCliente");
    }

    if(metodoPagoCliente.value === ""){
        document.getElementById('error-metodoPagoCliente').classList.remove("mensaje-errorCliente");
        entrar = true;
    } else {
        document.getElementById('error-metodoPagoCliente').classList.add("mensaje-errorCliente");
    }

    if(nombreCliente.value.length >= 3 && telefonoCliente.value.length >= 7 && expresionRegularCorreo.test(correoCliente.value) && direccionCliente.value.length >= 6){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '',
            title: 'COMPRA REALIZADA.\nEn un máximo de 5 días hábiles recibirás tu compra .',
            showConfirmButton: false,
            timer: 5000
          })

        productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        captacionDatos.classList.add("disabled");
        cargarProductosCarrito();
        formularioCliente.reset();

        // funcion asincrona para ir a inicio
        setTimeout(inicio => {
            history.pushState(null, 'index', '../index.html');
            history.go(0);
        }, 5000);    
    }
})
