var total = 0;
var monto = 0;
var descripcion = 0;
var i = 0;

var montoTxt = document.getElementById("monto");
var descripcionTxt = document.getElementById("descripcion");
var totalMsg = document.getElementById("totalMsg");


function imrpimirDescripcion() {

    descripcion = descripcionTxt.value;
    descripcion = String(descripcion);

    if(i==0){
        descripcionMsg.innerHTML =  descripcion;
    }else{
        descripcionMsg.innerHTML =  descripcionMsg.innerHTML + "<br/>" + descripcion;
    }
    
    imrpimirMonto();
}

function imrpimirMonto() {

    monto = montoTxt.value;
    monto = parseInt(monto);
    
    if(i==0){
        montoMsg.innerHTML = "$" + monto + "\n";
        i++;
    }else{
        montoMsg.innerHTML = montoMsg.innerHTML + "<br/>$" + monto;        
    }
        
    calcularTotal();
}

function calcularTotal() {
    
    monto = montoTxt.value;
    monto = parseInt(monto);
    total = total + monto;

    totalMsg.innerHTML = "Total: $" + total;
}