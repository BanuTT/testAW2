let v1 = "hola";
let vNumero = 3;
let vBoolean = true;

alert("Mensaje al usuario")

let retornoConfirm;
retornoConfirm = confirm("Estas seguro")

if (retornoConfirm == true) {
    alert("Has pulsado 'Aceptar'");
} else {
    alert("Has pulsado 'Cancelar'")
}

alert("Estoy pensando en un color...")
let colorSolucion = "rojo";
let respuesta = prompt("¿Que color estoy pensando?")

if (respuesta == colorSolucion) {
    alert("Has acertado")
} else {
    alert("Pulsa F5 para volver a jugar")
}
//prompt("")