# reloj-sw

*Nombre del proyecto.
reloj-sw (Smart Watch)

*Descripcion del Proyecto
Es un E-Commerce para venta de relojes inteligentes,
el cual cuenta con las siguientes secciones y funcionalidades.

    Inicio.
        Desde esta seccion se puede acceder, a las 
        secciones (ver mas, contacto, carrito).

        En el index mostramos con JS la lista de productos
        que tenemos cargados actualmente.

        Al hacer click en el boton agregar al carro, se activa 
        un contador en la parte superior derecha, mostrando la
        cantidad de productos agregados al carrito.

        Para la funcion antes mencionada usamos la libreria
        tooastify con el mensaje (producto agregado)
        
        Al hacer click en alguna imagen, ingresa a la seccion 
        ver mas y muestra caracteristicas adicionales de ese 
        producto especifico. 

    Ver mas.
        Desde esta seccion se puede acceder, a las 
        secciones (inicio, contacto, carrito).

        A esta seccion solo se puede acceder desde inicio haciendo
        click en la imagen.

        Esta seccion se carga con el id desde la imagen al hacer click 
        y muestra toda la informacion que tenemos cargada en JS de ese 
        producto especifico.

        Desde alli tambien se puede observar la cantidad de productos
        en carrito.


    Contacto.
        Desde esta seccion se puede acceder, a las 
        secciones (inicio, carrito).

        Aqui mostramos una direccion RANDON de la ubicacion de la
        tienda.

        La funcion principal aqui es el formulario de contacto el
        cual se encuentra validado cada input con JS, si los campos 
        estan vacios no se envia el mensaje. el correo fue validado 
        con expresiones regulares y tambien hice uso de los required 
        en cada input y minlength
        
        Cuando llenan todos los campos correctamente, el mensaje es 
        enviado y se muestra una alerta de la libreria sweetaler2 y
        limpiamos el formulario.

    Carrito.
        Desde esta seccion se puede acceder, a las 
        secciones (inicio, contacto).

        Si el carrito esta vacio muestra un mensaje
        (tu carrito esta vacio) y un boton de volver.

        Aqui se muestran los productos agregados al carrito y de cada
        producto elegido muestra (imagen, modelo, precio, cantidad y
        subtotal)

        Cuenta con el boton borrar, para eliminar un producto
        especifico y al hacerlo se muestra un mensaje de producto
        eliminado usando la libreria tooastify

        Cuenta con un boton de volver a inicio.

        Abajo de todos los productos seleccionados, automaticamente 
        se calcula el total a pagar.

        Cuenta con un boton para vaciar todo el carrito y usamos
        adicionalmente la libreria sweetalert2 para mostrar en mensaje
        y preguntarle si esta seguro de eliminar los producto y se 
        colocaron condiciones para que si preciona NO, no borre el
        carrito y si preciona SI. efectivamente borre el carrito y 
        muestra nuevamente el mensaje (tu carrito esta vacio).

        Cuenta con un boton ir a pagar el cual al precionar deja de
        mostrar los productos, pero mantiene el precio total a 
        pagar y muestra un formulario para captar datos del cliente
        (nombre, telefono, correo, direccion, observacion, metodo de pago)
        todo el formulario esta validado con js y solo hasta que llene
        todos los campos puede precionar el boton pagar.

        El boton pagar del final muestra un mensaje usando la libreria
        tooastify para avisar que la compra fue finalizada, a su vez,
        limpia el formulario y vacia el carrito... quedando de nuevo,
        el mensaje tu carrito esta vacio.