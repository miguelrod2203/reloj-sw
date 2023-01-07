// DATOS DE LOS RELOJES DESDE AHORA PRODUCTO.

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


// MIS PRODUCTOS

let producto1 = new Producto( 01, 'APPLE', 'Apple Watch Se (44Mm, Gps)', 'Azul media noche', './imagenes/smarwatch01.jpg', 'Digital', 'Unisex', 339990, 'IOS');
let producto2 = new Producto( 02, 'APPLE', 'Apple Watch Ultra (49mm, GPS + Cellular)', 'Blanco estelar', './imagenes/smarwatch02.jpg', 'Digital', 'Unisex', 1079990, 'IOS');
let producto3 = new Producto( 03, 'APPLE', 'Apple Watch series 7 (41mm, GPS)', 'Rojo', './imagenes/smarwatch03.jpg', 'Digital', 'Unisex', 429990, 'IOS');
let producto4 = new Producto( 04, 'APPLE', 'Apple Watch Series 3 (42Mm, Gps)', 'Negra', './imagenes/smarwatch04.jpg', 'Digital', 'Unisex', 249990, 'IOS');
let producto5 = new Producto( 05, 'APPLE', 'Apple Watch Series 8 (45mm, GPS)', 'Blanco estelar', './imagenes/smarwatch05.jpg', 'Digital', 'Unisex', 549990, 'IOS');

let producto6 = new Producto( 06, 'HUAWEI', 'Huawei Watch Gt 3 42Mm Gold Huawei', 'Dorado', './imagenes/smarwatch06.jpg', 'Digital', 'Mujer', 219990, 'Android/IOS');
let producto7 = new Producto( 07, 'HUAWEI', 'Watch 3 Active Sport Nigth Black', 'Negro', './imagenes/smarwatch07.jpg', 'Digital', 'Unisex', 249990, 'Universal');
let producto8 = new Producto( 08, 'HUAWEI', 'Huawei Gt 3 Pro 43Mm Silver + Freebuds 4', 'Plateado', './imagenes/smarwatch08.jpg', 'Digital', 'Mujer', 329990, 'Android/IOS');
let producto9 = new Producto( 09, 'HUAWEI', 'HUAWEI BAND 7', 'Negro', './imagenes/smarwatch09.jpg', 'Digital', 'Mujer', 169990, 'Android/IOS');

let producto10 = new Producto( 10, 'SAMSUNG', 'Smartwatch Reloj Inteligente Galaxy Watch4 40mm', 'Rosado', './imagenes/smarwatch10.jpg', 'Digital', 'Mujer', 154990, 'Android');
let producto11 = new Producto( 11, 'SAMSUNG', 'Galaxy Watch4 Classic 46 mm Bluetooth', 'Negro', './imagenes/smarwatch011.jpg', 'Digital', 'Unisex', 199990, 'Android');
let producto12 = new Producto( 12, 'SAMSUNG', 'Galaxy Watch4 Classic 46 mm LTE', 'Plateado', './imagenes/smarwatch012.jpg', 'Digital', 'Unisex', 174990, 'Android');
let producto13 = new Producto( 13, 'SAMSUNG', 'Galaxy Watch5 Pro 45mm BT Samsung', 'Titanium', './imagenes/smarwatch013.jpg', 'Digital', 'Unisex', 389990, 'Android');

let producto14 = new Producto( 14, 'XIAOMI', 'Mi Smart Band 6', 'Negro', './imagenes/smarwatch014.jpg', 'Digital', 'Unisex', 39990, 'Android/IOS');
let producto15 = new Producto( 15, 'XIAOMI', 'Redmi Watch 2 Lite Gl Black', 'Negro', './imagenes/smarwatch015.jpg', 'Digital', 'Unisex', 59990, 'Android/IOS');
let producto16 = new Producto( 16, 'XIAOMI', 'amazfit gts4 mini smartwatch', 'Rosado', './imagenes/smarwatch016.jpg', 'Digital', 'Mujer', 99990, 'Android');
let producto17 = new Producto( 17, 'XIAOMI', 'Smartwatch Xiaomi Kieslect Lora Llamadas', 'Rosado', './imagenes/smarwatch017.jpg', 'Digital', 'Mujer', 79990, 'Android/IOS');

let producto18 = new Producto( 18, 'UNIVERSAL', 'SMART WATCH DIGITAL M7', 'Varios', './imagenes/smarwatch018.jpg', 'Digital', 'Unisex', 7990, 'Android/IOS');

let producto19 = new Producto( 19, 'GARMIN', 'Smartwatch Garmin Fenix 6', 'Zafiro Gris', './imagenes/smarwatch019.jpg', 'Digital', 'Unisex', 799990, 'Android/IOS');
let producto20 = new Producto( 20, 'GARMIN', 'Smartband Garmin Vivofit 4', 'Negro', './imagenes/smarwatch20.jpg', 'Digital', 'Unisex', 99990, 'Android/IOS');
let producto21 = new Producto( 21, 'GARMIN', 'Smartwatch Garmin Venu Sq', 'Azul marino', './imagenes/smarwatch21.jpg', 'Digital', 'Unisex', 319990, 'Android/IOS');
let producto22 = new Producto( 22, 'GARMIN', 'Smartwatch Lily Blanco Silicona GARMIN', 'Blanco', './imagenes/smarwatch22.jpg', 'Digital', 'Mujer', 249990, 'Android/IOS');
let producto23 = new Producto( 23, 'GARMIN', 'Smartband Garmin Vivosmart 5 Garmin', 'blanco', './imagenes/smarwatch23.jpg', 'Digital', 'Unisex', 179990, 'Android/IOS');


let producto24 = new Producto( 24, 'FOXYSMART', 'Smartwatch DT7 PRO Series 7 44 mm', 'Negro', './imagenes/smarwatch24.jpg', 'Digital', 'Unisex', 78990, 'Android/IOS');
let producto25 = new Producto( 25, 'FOXYSMART', 'Smartwatch Watch Ultra 8 49mm', 'Negro', './imagenes/smarwatch25.jpg', 'Digital', 'Hombre', 98990, 'Android/IOS');
let producto26 = new Producto( 26, 'FOXYSMART', 'Smartwatch  Amazing Y20 Smartwatch 44mm', 'Negro', './imagenes/smarwatch26.jpg', 'Digital', 'Hombre', 46990, 'Sin os');

let producto27 = new Producto( 27, 'POLAR', 'Reloj Fitness Polar Unite', 'Azul', './imagenes/smarwatch27.jpg', 'Digital', 'Unisex', 164990, 'Android');
let producto28 = new Producto( 28, 'POLAR', 'Reloj deportivo Polar Ignite 2 Pink Rose talla S', 'Rosado', './imagenes/smarwatch28.jpg', 'Digital', 'Mujer', 239990, 'Android/IOS');
let producto29 = new Producto( 29, 'POLAR', 'Reloj deportivo Grit X Polar', 'Negro', './imagenes/smarwatch29.jpg', 'Digital', 'Unisex', 459990, 'Android');

let producto30 = new Producto( 30, 'LENOVO', 'Reloj Inteligente S2 Pro Cardio Touch Lenovo', 'Negro', './imagenes/smarwatch30.jpg', 'Digital', 'Unisex', 53590, 'IOS');
let producto31 = new Producto( 31, 'LENOVO', 'Smartwatch S2 Black Lenovo', 'Azul', './imagenes/smarwatch31.jpg', 'Digital', 'Unisex', 54990, 'Android/IOS');

let producto32 = new Producto( 32, 'ZUKO', 'Reloj Inteligente Smartband M6', 'Negro', './imagenes/smarwatch32.jpg', 'Digital', 'Unisex', 8990, 'Android/IOS');
let producto33 = new Producto( 33, 'ZUKO', 'Smartwatch Reloj Inteligente T500 PRO MAX - SERIE 7', 'Negro', './imagenes/smarwatch33.jpg', 'Digital', 'Unisex', 39990, 'Android/IOS');
let producto34 = new Producto( 34, 'ZUKO', 'Smartwatch Reloj Inteligente - M11', 'Negro', './imagenes/smarwatch34.jpg', 'Digital', 'Unisex', 39990, 'Android/IOS');


// LISTA DE TODOS LOS PRODUCTOS

let todosLosProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34 ];

