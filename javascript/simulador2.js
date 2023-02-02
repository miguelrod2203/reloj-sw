// "use strict" 

// // este simulador contempla los temas de
// // variables / control de flujo / ciclos / funciones
// // objetos / arrays / funciones de orden superior

// function saludar (){
//     alert('hola. Bienvenido a SW donde encontraras los mejores smartWatch.');
// }

// saludar();

// // datos de los relojes desde ahora producto.
// class Producto {
//     constructor(id, marca, nombre, color, imagen, pantalla, genero, precio, sistemaOperativo){
//         this.id = id;
//         this.marca = marca;
//         this.nombre = nombre;
//         this.color = color;
//         this.imagen = imagen;
//         this.pantalla = pantalla
//         this.genero = genero;
//         this.precio = precio;
//         this.sistemaOperativo = sistemaOperativo;
//     }
// }

// // mis productos
// let producto1 = new Producto( 1, 'APPLE', 'Apple Watch Se (44Mm, Gps)', 'Azul media noche', './imagenes/smarwatch01.jpg', 'Digital', 'Unisex', 339990, 'IOS');
// let producto2 = new Producto( 2, 'APPLE', 'Apple Watch Ultra (49mm, GPS + Cellular)', 'Blanco estelar', './imagenes/smarwatch02.jpg', 'Digital', 'Unisex', 1079990, 'IOS');
// let producto3 = new Producto( 3, 'APPLE', 'Apple Watch series 7 (41mm, GPS)', 'Rojo', './imagenes/smarwatch03.jpg', 'Digital', 'Unisex', 429990, 'IOS');
// let producto4 = new Producto( 4, 'APPLE', 'Apple Watch Series 3 (42Mm, Gps)', 'Negra', './imagenes/smarwatch04.jpg', 'Digital', 'Unisex', 249990, 'IOS');
// let producto5 = new Producto( 5, 'APPLE', 'Apple Watch Series 8 (45mm, GPS)', 'Blanco estelar', './imagenes/smarwatch05.jpg', 'Digital', 'Unisex', 549990, 'IOS');
// let producto6 = new Producto( 6, 'HUAWEI', 'Huawei Watch Gt 3 42Mm Gold Huawei', 'Dorado', './imagenes/smarwatch06.jpg', 'Digital', 'Mujer', 219990, 'Android/IOS');
// let producto7 = new Producto( 7, 'HUAWEI', 'Watch 3 Active Sport Nigth Black', 'Negro', './imagenes/smarwatch07.jpg', 'Digital', 'Unisex', 249990, 'Universal');
// let producto8 = new Producto( 8, 'HUAWEI', 'Huawei Gt 3 Pro 43Mm Silver + Freebuds 4', 'Plateado', './imagenes/smarwatch08.jpg', 'Digital', 'Mujer', 329990, 'Android/IOS');
// let producto9 = new Producto( 9, 'HUAWEI', 'HUAWEI BAND 7', 'Negro', './imagenes/smarwatch09.jpg', 'Digital', 'Mujer', 169990, 'Android/IOS');

// // lista de mis productos 
// let listaDeProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];

// // mostrar lista de productos 
// let productosDisponibles = '';

// function mostrarProductosDisponibles (){
//     listaDeProductos.map(producto => {
//         productosDisponibles += (`\n ${producto.id}. ${producto.nombre} ${producto.precio}cpl`);
//     });
// }

// mostrarProductosDisponibles();

// // seleccion de producto mediante un prompt
// let idProducto = 0;
// let productoElegido = 0;
// let compra = '';
// let precio = 0;

// function seleccionProducto(){
//     idProducto = Number(prompt(`Indicame cual de nuestros ${listaDeProductos.length} productos estas interesado 
//     ${productosDisponibles}`));

//     productoElegido = listaDeProductos[idProducto -1];

//     if (idProducto > 0 && idProducto <= listaDeProductos.length){
//         compra = productoElegido.nombre;
//         precio = productoElegido.precio;
//     }    
// }

// seleccionProducto();

// // repetir operacion para que seleccione un valor valido o salir
// while(idProducto <= 0 || idProducto > listaDeProductos.length || idProducto === "no"){
//     alert(`El valor ingresado no es valido intente un numero del 1 al ${listaDeProductos.length} o escriba no para salir`);
//     seleccionProducto();
// }

// // unidades a comprar
// let unidades = 0;

// function cantidadDeUnidades () {
//     unidades = Number(prompt(`¿Cuantas unidades del ${productoElegido.nombre} quieres comprar?`));
// }
// cantidadDeUnidades ()

// // solicitando datos del comprador (nombre)
// let usuario = prompt("Ingresa tu nombre");

// function validarNombre (){
//     while((usuario.length < 3 )){
//         alert('Debes incluir por lo menos 3 caracteres');
//         usuario = prompt("Intenta ingresando tu nombre y apelido");
//     }
//     alert(`Hemos registrado correctamente el nombre : ${usuario}`);

// }

// validarNombre() ;

// // solicitando datos del comprador (direccion)
// let direccion = prompt("Ingrese su direccion");

// function validarDireccion () {
//     while((direccion.length < 6)){
//         alert('Debes incluir por lo menos 6 caracteres');
//         direccion = prompt("Intenta colocando el nombre de la calle y su numero");
//     }
//     alert(`Hemos registrado correctamente su direccion en : ${direccion}`);
// }

// validarDireccion();

// // solicitando datos del comprador (correo y confirmacion de correo)
// let correo = prompt("Ingrese su correo");
// alert("Para continuar queremos confirmar tu correo");
// let correoConfirmado = "";

// function validarCorreo (){
//     do {
//         correoConfirmado = prompt("Confirma tu correo");
//         if (correo === correoConfirmado){
//             alert("Genial se ha confirmado correctamente tu correo");
//         }else{
//             alert("correo ingresado no coincide");
//         }
//     }while(correo != correoConfirmado);
//     return correo;
// }

// validarCorreo();

// // tipo de entrega
// let envio = 5000;
// let retiroEnTienda = 0;
// let tipoDeEntrega = '';
// let precioDeEntrega = 0;

// let entrega = prompt(`Elige un tipo de entrega
// 1. Envio a domicilio : ${envio} pcl
// 2. Retiro en tienda : ${retiroEnTienda} pcl
// `);

// function validarEntrega (){
//     while(entrega != 1 && entrega != 2){
//         entrega = prompt(`Ingresa una opcion valida
//         1. Envio a domicilio : ${envio}
//         2. Retiro en tienda : ${retiroEnTienda}
//         `);
//     }    

//     if (entrega == 1){
//         alert(`Envio a domicilio ${envio} pcl`);
//         tipoDeEntrega = 'Envio a domicilio';
//         precioDeEntrega = envio;
//     }
//     else if(entrega == 2){
//         alert(`Retiro en tienda ${retiroEnTienda} pcl`);
//         tipoDeEntrega = 'Retiro en tienda';
//         precioDeEntrega = retiroEnTienda;
//     }
// }

// validarEntrega();

// // mostrar metodo de pago
// let metodosDePago = ['1. Efectivo', '2. Debito', '3. Credito', '4. PayPal', '5. Gif card'];
// let seleccionDePago = '';

// function mostrarMetodosDePago (){
//     metodosDePago.forEach(metodo => {
//         seleccionDePago += (`\n${metodo }`);
//     });   
// }
// mostrarMetodosDePago();

// //seleccionar metodo de pago
// let idPago = 0;
// let metodoDePagoSeleccionado = '';
// function seleccionMetodoDePago(){
//     idPago = Number(prompt(`Elige con un numero el metodo de pago ${seleccionDePago} `));
//     alert(`Motodo de pago seleccionado: ${metodosDePago[idPago -1]}`);
//     metodoDePagoSeleccionado = metodosDePago[idPago -1];
// }
// seleccionMetodoDePago();

// while(idPago <= 0 || idPago > metodosDePago.length){
//     alert(`El valor ingresado no es valido intente un numero del 1 al ${metodosDePago.length}`);
//     seleccionMetodoDePago();
// }

// // resumen de compra o boleta
// function resumenDeCompra (){
//     console.log('RESUMEN DE COMPRA: ');
//     console.log('Cliente: ' + usuario);
//     console.log('Direccion: ' + direccion);
//     console.log('Correo: ' + correo);   
//     console.log('Producto: ' + compra);
//     console.log('Unidades: ' + unidades);
//     console.log('Precio: ' + precio +' pcl');
//     console.log('Subtotal: ' + `${(precio * unidades)} pcl`);
//     console.log('Tipo de entrega: ' + tipoDeEntrega);
//     console.log('Costo de entrega: ' + precioDeEntrega +' pcl');
//     console.log('Total: ' + `${(precio * unidades) + precioDeEntrega} pcl`);
//     console.log('Metodo de pago: ' + metodoDePagoSeleccionado);
//     console.log(`Gracias por participar en el simulador de compras de SW`)
// }

// resumenDeCompra();