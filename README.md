# reloj-sw 

*Nombre del proyecto. 
reloj-sw (Smart Watch) 

*Descripción del Proyecto 

Es un E-Commerce para venta de relojes inteligentes, 
el cual cuenta con las siguientes secciones y funcionalidades. 

    Inicio. 

        Desde esta sección se puede acceder, a las  
        secciones (ver más, contacto, carrito). 

        En el índex mostramos con JS la lista de productos 
        que tenemos cargados actualmente. 

        Al hacer click en el botón agregar al carro, se activa  
        un contador en la parte superior derecha, mostrando la 
        cantidad de productos agregados al carrito. 

        Para la función antes mencionada usamos la librería 
        tooastify con el mensaje (producto agregado) 

        Al hacer click en alguna imagen, ingresa a la sección  
        ver más y muestra características adicionales de ese  
        producto especifico.  

    Ver más. 

        Desde esta sección se puede acceder, a las  
        secciones (inicio, contacto, carrito). 

        A esta sección solo se puede acceder desde inicio haciendo 
        click en la imagen. 

        Esta sección se carga con el id desde la imagen al hacer click  
        y muestra toda la información que tenemos cargada en JS de ese  
        producto especifico. 

        Desde allí también se puede observar la cantidad de productos 
        en carrito. 

    Contacto. 

        Desde esta sección se puede acceder, a las  
        secciones (inicio, carrito). 

        Aquí mostramos una dirección RANDON de la ubicación de la 
        tienda. 

        La función principal aquí es el formulario de contacto el 
        cual se encuentra validado cada input con JS, si los campos  
        están vacíos no se envía el mensaje. el correo fue validado  
        con expresiones regulares y también hice uso de los required  
        en cada input y minlength 

        Cuando llenan todos los campos correctamente, el mensaje es  
        enviado y se muestra una alerta de la librería sweetaler2 y 
        limpiamos el formulario. 

    Carrito. 

        Desde esta sección se puede acceder, a las  
        secciones (inicio, contacto). 

        Si el carrito esta vacío muestra un mensaje 
        (tu carrito esta vacio) y un botón de volver. 

        Aquí se muestran los productos agregados al carrito y de cada 
        producto elegido muestra (imagen, modelo, precio, cantidad y 
        subtotal) 

        Cuenta con el botón borrar, para eliminar un producto 
        especifico y al hacerlo se muestra un mensaje de producto 
        eliminado usando la librería tooastify 

        Cuenta con un botón de volver a inicio. 

        Abajo de todos los productos seleccionados, automáticamente  
        se calcula el total a pagar. 

        Cuenta con un botón para vaciar todo el carrito y usamos 
        adicionalmente la librería sweetalert2 para mostrar en mensaje 
        y preguntarle si está seguro de eliminar los productos y se  
        colocaron condiciones para que, si presiona NO, no borre el 
        carrito y si presiona SI. efectivamente borre el carrito y  
        muestra nuevamente el mensaje (tu carrito esta vacio). 

        Cuenta con un botón ir a pagar el cual al presionar deja de 
        mostrar los productos, pero mantiene el precio total a  
        pagar y muestra un formulario para captar datos del cliente 
        (nombre, teléfono, correo, dirección, observación, método de pago) 
        todo el formulario esta validado con js y solo hasta que llene 
        todos los campos pueden presionar el botón pagar. 

        El botón pagar del final muestra un mensaje usando la librería 
        tooastify para avisar que la compra fue finalizada, a su vez, 
        limpia el formulario y vacía el carrito... quedando de nuevo, 
        el mensaje tu carrito esta vacío.

        Finalmente, para que después de realizada la compra no quede el 
        el cliente con la vista del mensaje de tu carrito está vacío, 
        aplique una función asíncrona para redirigirlo a la página de 
        inicio... el mensaje del tooastify tarda 5000 milisegundos en 
        dejar de mostrarse, entonces coloque la función asíncrona que 
        se active en 5000 milisegundos.  