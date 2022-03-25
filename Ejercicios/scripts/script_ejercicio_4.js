//Ejercicio_4
function escribirnombre() {
    let nombre, opcion, lista;
    nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        window.alert("Por favor introduzca un nombre");
    } 
    else {
        opcion = "<li> " + nombre + "</li>";
  
        lista = document.getElementById("lista");
  
        lista.innerHTML += opcion;
  
    }
}