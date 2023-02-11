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

// validando el formulario de contacto

const form = document.getElementById('formId');
const nombre = document.getElementById('nombreId');
const telefono = document.getElementById('telefonoId');
const correo = document.getElementById('correoId');
const asunto = document.getElementById('asuntoId');
const mensaje = document.getElementById('mensajeId');

form.addEventListener("submit", e=>{
    e.preventDefault()
    let entrar = false;
    let expresionRegularCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nombre.value.length < 3){
        document.getElementById('error-nombre').classList.remove("mensaje-error");
        entrar = true;
    } else {
        document.getElementById('error-nombre').classList.add("mensaje-error");
    }

    if(telefono.value.length < 7){
        document.getElementById('error-telefono').classList.remove("mensaje-error");
        entrar = true;
    } else {
        document.getElementById('error-telefono').classList.add("mensaje-error");
    }

    if(!expresionRegularCorreo.test(correo.value)){
        document.getElementById('error-correo').classList.remove("mensaje-error");
        entrar = true;
    } else {
        document.getElementById('error-correo').classList.add("mensaje-error");
    }

    if(asunto.value === ""){
        document.getElementById('error-asunto').classList.remove("mensaje-error");
        entrar = true;
    } else {
        document.getElementById('error-asunto').classList.add("mensaje-error");
    }

    if(mensaje.value.length < 8){
        document.getElementById('error-mensaje').classList.remove("mensaje-error");
        entrar = true;
    } else {
        document.getElementById('error-mensaje').classList.add("mensaje-error");
    }

    if(nombre.value.length >= 3 && telefono.value.length >= 7 && mensaje.value.length >= 8 && expresionRegularCorreo.test(correo.value)){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu mensaje ha sido enviado.',
            showConfirmButton: false,
            timer: 3000
          })
        form.reset();
    }
})






