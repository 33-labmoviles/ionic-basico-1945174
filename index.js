console.log("Pruebas");
//Paso 1: Calcular total

var total = 0;
var monto = 0;
var descripcion = "a";

var montoTxt = document.getElementById("monto");
var descripcionTxt = document.getElementById("descripcion");
var totalMsg = document.getElementById("totalMsg");

function nuevoProducto() {

    descripcion = descripcionTxt.value;
    monto = montoTxt.value;
    monto = parseInt(monto);

}

function calcularTotal() {
    //obtener el monto del campo de texto
    
    monto = montoTxt.value;
    monto = parseInt(monto); //resolviendo conflicto de ionic -- revisar error
    total = total + monto;
    
    totalMsg.innerHTML = "Total: $" + total;

}