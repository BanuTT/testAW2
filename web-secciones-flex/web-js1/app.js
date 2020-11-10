// alert("Hola Mundo");

// Comentario de una linea

/*
Esto es
un comentario multilinea
*/



/*Tipos de datos*/

//Tipos de cadena de texto
// alert("Esto es una cadena de texto");
// alert(`Esto tambien es una cadena de texto`);
// alert("I`m theteacher");
// alert(`I\`m the teacher`);

// // Tipo numero entero
// // alert(2 * 3);
// // alert(2 - 3);
// // alert(2 * 3);
// // alert(2 / 3);


// // Tipo numero decimal
// alert(2.5 * 3.5);
// alert(2.5 - 3.5);
// alert(2.5 * 3.5);
// alert(2.5 / 3.5);

// // Tipo booleano
// // operaciones logicas
// alert(true && true);
// alert(false || false);








// let mensaje = "Hola mundo";
// let nombre = "BANU TRWALLY";
// alert("Hola" + nombre);
// console.log(mensaje);
// alert(mensaje);
// let numero = 3;
// numero = 3 + 2;
// numero++;
// alert(numero);



// Declarar 3 variables con valores numericos
// imprimir el resultado de la suma de las 3
// 3 variables a traves de un alert


// let V1 = 10
// let V2 = 5
// let V3 = 0
// alert(V1 + V2 + V3);

/* Declarar 2 variables con valores nimercos 
   declarar una variable llamada resultado
   que contenga el producto de las 2 variables anteriores*/

// let vn1 = 6
// let vn2 = 9
// let resultado = vn1 * vn2;
// alert(resultado);



// alert("Mira el h1")
// let elemento = document.getElementById("encabezado");
// elemento.innerHTML = "Hola clase";

// let resultado;

// resultado = confirm("¿Quieres que te salude?")

// if (resultado == true) {
//     alert("Hola");
// } else {
//     alert("Pues nada desgraciado")
// }
// alert("Fin del Programa")

let incognita = "3" // Este es el numero que hay que adivinar
let respuesta; // Aqui guardaremos lo que introduzca el usuario

respuesta = prompt("Escribe un numero del 1 al 10");

if (respuesta == null) {
    alert("Fin del Juego, le has dado a 'cancelar'")
} else if (respuesta == incognita) {
    alert("Enhorabuena, has ganado")
} else if (respuesta == "4") {
    alert("UY!. Dale F5 y prueba otra vez")
} else if (respuesta == "2") {
    alert("NOP!. Dale F5 y prueba otra vez")
} else {
    alert("Lo siento, no ha podido ser. Dale F5 para continuar")
}