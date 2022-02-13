console.log("hola mundo!");
//Paso 1: Calcular total

var total = 0;
var monto = 0;
var montoTxt = document.getElementById("monto");

function calcularTotal() {
    //obtener el monto del campo de texto
    monto = montoTxt.value;
    monto = parseInt(monto); //resolviendo conflicto de ionic -- revisar error
    total = total + monto;
    console.log(total);
}