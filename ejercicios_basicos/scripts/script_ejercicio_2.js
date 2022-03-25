//Ejercicio_2
function escribirtexto() {
    var texto, mostrar;
    texto = document.getElementById("texto");
    console.log(texto)
    

    mostrar = document.getElementById("mostrar_texto");
    console.log(mostrar)
    
    mostrar.innerHTML = texto.value;
}
