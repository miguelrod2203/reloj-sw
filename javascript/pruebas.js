// aqui pruebo las funciones de manera independiente para no recorrer todo el programa
 
// console.log('vamos con local storage');

const detallesProducto = (e) => {
    const idProducto = e.target.closest('.card_producto').getAttribute('data-id');

    const idJason = JSON.stringify(idProducto);
    localStorage.setItem("productoElegido", idJason);

}


const updateData = (e) => {
    let idProducto = localStorage.getItem('productoElegido');
    idProducto =JSON.parse(idProducto);

    let productoElegido = listaDeProductos.find((producto) => producto.id == idProducto)
 
    console.log('id producto: ' + idProducto)
    console.log('producto elegido: ' + productoElegido)

}
updateData();