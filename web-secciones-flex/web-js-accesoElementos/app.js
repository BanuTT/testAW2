let color = prompt("¿Que color quieres para el parrafo?")
let colorMinusculas = color.toLowerCase();
let elementoParrafo = document.getElementById("parrafo")
console.log(elementoParrafo);
elementoParrafo.innerHTML = "Hola clase";

if (colorMinusculas == "rojo" || colorMinusculas == "verde") {
    elementoParrafo.className = colorMinusculas;
} else {
    alert("Solo puede ser rojo o verde")
}