"use strict" 
alert('hola. Bienvenido a SW donde encontraras los mejores smartWatch.');



// productos con su precio

let producto1 = "Appe Watch Ultra";
let precioProducto1 = 999990;

let producto2 = "Smartwatch Fenix 6X";
let precioProducto2 = 849990;

let producto3 = "Smartwatch Suunto 9";
let precioProducto3 = 637490;

let producto4 = "Smartwatch Forerunner 955";
let precioProducto4 = 749990;

let producto5 = "Appe Watch Series 8";
let precioProducto5 = 719990;

let producto6 = "Smartwatch Instinct 2";
let precioProducto6 = 599990;



// seleccion de productos de la lista por numeracion 

let productoSeleccionado = Number(prompt(`Indicame en cual de nuestros 6 productos estas interesado
1. ${producto1} $ ${precioProducto1}
2. ${producto2} $ ${precioProducto2}
3. ${producto3} $ ${precioProducto3}
4. ${producto4} $ ${precioProducto4}
5. ${producto5} $ ${precioProducto5} 
6. ${producto6} $ ${precioProducto6}
`));



// mostrando el resumen de la compra dependiendo de la seleccion

if (productoSeleccionado > 0 ){
    switch (productoSeleccionado){
        case 1 :
            alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto1} por $ ${precioProducto1}`);
            break;

        case 2 :
            alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto2} por $ ${precioProducto2}`);
            break;

        case 3 :
            alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto3} por $ ${precioProducto3}`);
            break;

        case 4 :
            alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto4} por $ ${precioProducto4}`);
            break;

        case 5 :
            alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto5} por $ ${precioProducto5}`);
            break;

        case 6 :
            alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto6} por $ ${precioProducto6}`);
            break;
    
        default: 
            alert(`El producto ${productoSeleccionado}, no existe o no esta habilitada`);
            break;           
    }
} else{
    alert("producto no encontrado")
}



// solicitando datos del comprador (nombre)

let usuario = prompt("Ingresa tu nombre");

while((usuario.length < 3)){
    alert('Debes incluir por lo menos 3 caracteres');
    usuario = prompt("Intenta ingresando tu nombre y apelido");
}
alert(usuario);



// solicitando datos del comprador (direccion)

let direccion = prompt("Ingrese su direccion");

while((direccion.length < 6)){
    alert('Debes incluir por lo menos 6 caracteres');
    direccion = prompt("Intenta colocando el nombre de la calle y su numero");
}
alert(direccion);



// solicitando datos del comprador (correo y confirmacion de correo)

let correo = prompt("Ingrese su correo");
alert("hola para continuar queremos confirmar tu correo");
let correoConfirmado = "";

do {
    correoConfirmado = prompt("Confirma tu correo");
    if (correo === correoConfirmado){
        alert("Genial se ha confirmado correctamente tu correo");
    }else{
        alert("correo ingresado no coincide");
    }
}while(correo != correoConfirmado);



// tipo de entrega

let envio = 3000;
let retiroEnTienda = "gratis";

let entrega = prompt(`Elige un tipo de entrega
1. Envio $ ${envio};
2. Retiro en tienda ${retiroEnTienda};
`);

while(entrega != 1 && entrega != 2){
    entrega = prompt(`Ingresa una opcion valida`)
}    

if (entrega == 1){
        alert(`Envio por $ ${envio}`)
    }
else if(entrega == 2){
    alert(`Retiro en tienda ${retiroEnTienda}`)
}



// seleccionar tipo de pago

let tipoDePago = Number(prompt(`Elige el tipo de pago
1. Efectivo.
2. Debito.
3. Credito.
`))

while(tipoDePago <= 0  || tipoDePago >= 4){
    tipoDePago = prompt(`Ingresa una opcion valida`)
}   

if (tipoDePago == 1){
    alert(`Pago con Efectivo Ingresado`);
}
else if (tipoDePago == 2){
    alert(`Pago con Debito Ingresado`);
}
else if (tipoDePago == 3){
    alert(`Pago con Credito Ingresado`);
}

alert("magicamente su pago se ha registrado correctamente");




