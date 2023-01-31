// aqui pruebo las funciones de manera independiente para no recorrer todo el programa
class Producto {
    constructor(id, marca, nombre, color, imagen, pantalla, genero, precio, sistemaOperativo){
        this.id = id;
        this.marca = marca;
        this.nombre = nombre;
        this.color = color;
        this.imagen = imagen;
        this.pantalla = pantalla
        this.genero = genero;
        this.precio = precio;
        this.sistemaOperativo = sistemaOperativo;
    }
}

let producto1 = new Producto( '1', 'APPLE', 'Apple Watch Se (44Mm, Gps)', 'Azul media noche', '/imagenes/smarwatch01.jpg', 'Digital', 'Unisex', 339990, 'IOS');
let producto2 = new Producto( '2', 'APPLE', 'Apple Watch Ultra (49mm, GPS + Cellular)', 'Blanco estelar', '/imagenes/smarwatch02.jpg', 'Digital', 'Unisex', 1079990, 'IOS');
let producto3 = new Producto( '3', 'APPLE', 'Apple Watch series 7 (41mm, GPS)', 'Rojo', '/imagenes/smarwatch03.jpg', 'Digital', 'Unisex', 429990, 'IOS');
let producto4 = new Producto( '4', 'APPLE', 'Apple Watch Series 3 (42Mm, Gps)', 'Negra', '/imagenes/smarwatch04.jpg', 'Digital', 'Unisex', 249990, 'IOS');
let producto5 = new Producto( '5', 'APPLE', 'Apple Watch Series 8 (45mm, GPS)', 'Blanco estelar', '/imagenes/smarwatch05.jpg', 'Digital', 'Unisex', 549990, 'IOS');

let listaDeProductos = [producto1, producto2, producto3, producto4, producto5]



const nuestrosProductos = document.querySelector('#nuestrosProductos');

let carrito = [];

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
                    $ ${producto.precio}.
                </p>
            </div>

            <div class="boton_comprar d-grid">
                <button class="btn justify-content-md-center btn-outline-success" type="submit">Agregar al Carro</button>
            </div>
            `
        nuestrosProductos.append(cardProducto)

    })
    
    const verMasDelProducto = document.querySelectorAll('.card_producto')
    verMasDelProducto.forEach((verMas) => {
        verMas.addEventListener('click', detallesProducto)
    })


}



renderizarNuestrosProductos();


