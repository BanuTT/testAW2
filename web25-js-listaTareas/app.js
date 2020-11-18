function anyadirTarea() {
    //tomo el valor del input
    let eTarea = document.getElementById("idTarea");
    // compruebo si tiene algo de texto
    if (eTarea.value != "") {
        //si tiene texto, añado la tarea en la lista
        anyadirElemento(eTarea.value);
        //despues de añadir borro el elento input
        eTarea.value = "";
    }
    //si no tiene texto, no hago nada
}
//funcion añadir elemento a la lista. 
//cogera un parámetro y lo añadirá a la lista listaTareas
function anyadirElemento(textoTarea) {
    //cojo el elemento de la lista
    let listaTareas = document.getElementById("listaTareas");
    //le añado un elemento de lista con el texto
    // del parámetro textoTarea
    listaTareas.innerHTML += "<li>" + textoTarea + "</li>";

    //Esto es equivalente
    //listaTareas.innerHTML = listaTareas.innerHTML + "<li>" + textoTarea + "</li>";
}

function eliminarTarea() {
    let numTarea = prompt("Escribe el numero de la tarea que quieres borrar");

    if (numTarea > 1 && numTarea < lTareas.children.length) {



        numTarea = numTarea - 1;

        let lTareas = document.getElementById("listaTareas");
        console.log(lTareas);

        let eTareaBorrar = lTareas.children[numTarea]
        lTareas.removeChild(eTareaBorrar);
    }
}