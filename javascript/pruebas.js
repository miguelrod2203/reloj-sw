// aqui pruebo las funciones de manera independiente para no recorrer todo el programa
 
let metodosDePago = ['1. Efectivo', '2. Debito', '3. Credito', '4. PayPal', '5. Gif card'];
let seleccionDePago = '';

function mostrarMetodosDePago (){
    metodosDePago.forEach(metodo => {
        seleccionDePago += (`\n${metodo }`);
    });   
}
mostrarMetodosDePago();


let idPago = 0;
let metodoDePagoSeleccionado = '';
function seleccionMetodoDePago(){
    idPago = Number(prompt(`Elige con un numero el tipo de pago ${seleccionDePago} `));
    metodoDePagoSeleccionado = metodosDePago[idPago -1];
}
seleccionMetodoDePago();

while(idPago <= 0 || idPago > metodosDePago.length){
    alert(`El valor ingresado no es valido intente un numero del 1 al ${metodosDePago.length}`);
    seleccionMetodoDePago();
}
console.log(metodoDePagoSeleccionado);