// "use strict" 

// // valido para primera entrega
// // este simulador contempla los temas de
// // variables / control de flujo / ciclos / funciones

// alert('hola. Bienvenido a SW donde encontraras los mejores smartWatch.');
// console.log("Resumen de compra");

// // productos con su precio

// let producto1 = "Appe Watch Ultra";
// let precioProducto1 = 999990;

// let producto2 = "Smartwatch Fenix 6X";
// let precioProducto2 = 849990;

// let producto3 = "Smartwatch Suunto 9";
// let precioProducto3 = 637490;

// let producto4 = "Smartwatch Forerunner 955";
// let precioProducto4 = 749990;

// let producto5 = "Appe Watch Series 8";
// let precioProducto5 = 719990;

// let producto6 = "Smartwatch Instinct 2";
// let precioProducto6 = 599990;


// // seleccion de productos de la lista por numeracion 

// let productoSeleccionado = Number(prompt(`Indicame en cual de nuestros 6 productos estas interesado
// 1. ${producto1} $ ${precioProducto1}
// 2. ${producto2} $ ${precioProducto2}
// 3. ${producto3} $ ${precioProducto3}
// 4. ${producto4} $ ${precioProducto4}
// 5. ${producto5} $ ${precioProducto5} 
// 6. ${producto6} $ ${precioProducto6}
// `));

// while(productoSeleccionado <= 0 || productoSeleccionado > 6){
//     alert("el valor ingresado no es valido intente un numero del 1 al 6");
//     productoSeleccionado = Number(prompt(`Indicame en cual de nuestros 6 productos estas interesado`));
// }

// if (productoSeleccionado > 0 ){
//     switch (productoSeleccionado){
//         case 1 :
//             alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto1} por $ ${precioProducto1}`);
//             console.log(`Producto : ${producto1}`);
//             console.log(`Precio : ${precioProducto1}`);
//             break;

//         case 2 :
//             alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto2} por $ ${precioProducto2}`);
//             console.log(`Producto : ${producto2}`);
//             console.log(`Precio : ${precioProducto2}`);
//             break;

//         case 3 :
//             alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto3} por $ ${precioProducto3}`);
//             console.log(`Producto : ${producto3}`);
//             console.log(`Precio : ${precioProducto3}`);
//             break;

//         case 4 :
//             alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto4} por $ ${precioProducto4}`);
//             console.log(`Producto : ${producto4}`);
//             console.log(`Precio : ${precioProducto4}`);
//             break;

//         case 5 :
//             alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto5} por $ ${precioProducto5}`);
//             console.log(`Producto : ${producto5}`);
//             console.log(`Precio : ${precioProducto5}`);
//             break;

//         case 6 :
//             alert(`Usted ah seleccionado el producto ${productoSeleccionado}. ${producto6} por $ ${precioProducto6}`);
//             console.log(`Producto : ${producto6}`);
//             console.log(`Precio : ${precioProducto6}`);
//             break;
    
//         default: 
//             alert(`El producto ${productoSeleccionado}, no existe o no esta habilitada`);
//             break;           
//     }
// } else{
//     alert("Producto no encontrado");
// }


// // solicitando datos del comprador (nombre)

// let usuario = prompt("Ingresa tu nombre");

// function validarNombre (){

//     while((usuario.length < 3 )){
//         alert('Debes incluir por lo menos 3 caracteres');
//         usuario = prompt("Intenta ingresando tu nombre y apelido");
//     }
//     alert(`Hemos registrado correctamente el nombre : ${usuario}`);
//     console.log(`Cliente : ${usuario}`);
//     return usuario;
// }

// validarNombre() ;


// // solicitando datos del comprador (direccion)

// let direccion = prompt("Ingrese su direccion");

// function validarDireccion () {

//     while((direccion.length < 6)){
//         alert('Debes incluir por lo menos 6 caracteres');
//         direccion = prompt("Intenta colocando el nombre de la calle y su numero");
//     }
//     alert(`Hemos registrado correctamente su direccion en ${direccion}`);
//     console.log(`Direccion : ${direccion}`);
//     return direccion;
// }

// validarDireccion()

// // solicitando datos del comprador (correo y confirmacion de correo)

// let correo = prompt("Ingrese su correo");
// alert("Para continuar queremos confirmar tu correo");
// let correoConfirmado = "";

// function validarCorreo (){

//     do {
//         correoConfirmado = prompt("Confirma tu correo");
//         if (correo === correoConfirmado){
//             alert("Genial se ha confirmado correctamente tu correo");
//             console.log(`correo : ${correo}`);
//         }else{
//             alert("correo ingresado no coincide");
//         }
//     }while(correo != correoConfirmado);

//     return correo;
// }

// validarCorreo();


// // tipo de entrega

// let envio = "gratis";
// let retiroEnTienda = "gratis";

// let entrega = prompt(`Elige un tipo de entrega
// 1. Envio a domicilio : ${envio}
// 2. Retiro en tienda : ${retiroEnTienda}
// `);

// function validarEntrega (){

//     while(entrega != 1 && entrega != 2){
//         entrega = prompt(`Ingresa una opcion valida
//         1. Envio a domicilio : ${envio}
//         2. Retiro en tienda : ${retiroEnTienda}
//         `);
//     }    

//     if (entrega == 1){
//         alert(`Envio a domicilio ${envio}`);
//         console.log(`Tipo de entrega : Envio a domicilio`);
//     }
//     else if(entrega == 2){
//         alert(`Retiro en tienda ${retiroEnTienda}`);
//         console.log(`Tipo de entrega : Retiro en tienda`);
//     }

//     return entrega;
// }

// validarEntrega();


// // seleccionar tipo de pago

// let tipoDePago = Number(prompt(`Elige el tipo de pago
// 1. Efectivo.
// 2. Debito.
// 3. Credito.
// `));

// function validarFormaDePago (){

//     while(tipoDePago <= 0  || tipoDePago >= 4){
//         tipoDePago = prompt(`Ingresa una opcion valida
//         1. Efectivo.
//         2. Debito.
//         3. Credito.
//         `)
//     }   

//     if (tipoDePago == 1){
//         alert(`Pago con Efectivo Ingresado`);
//         console.log(`Tipo de pago : Efectivo`);
//     }
//     else if (tipoDePago == 2){
//         alert(`Pago con Debito Ingresado`);
//         console.log(`Tipo de pago : Debito`);
//     }
//     else if (tipoDePago == 3){
//         alert(`Pago con Credito Ingresado`);
//         console.log(`Tipo de pago : Credito`);
//     }

//     alert("Magicamente su pago se ha registrado correctamente");
// }

// validarFormaDePago();

// /*
// ***************** NOTA*************************
// todos los resultados de la simulacion tambien
// se pueden ir observando en consola de esta
// manera no se pierde la informacion seleccionada
// despues de avanzar a la siguiente linea a menos
// que refresques la pagina.
// */