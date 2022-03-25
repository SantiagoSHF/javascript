//Ejercicio_5
function opcion(){
    var i, opciones;
     opciones = document.getElementsByName("opciones");
     console.log(opciones);

for (i = 0; i < opciones.length; i++)
    {
        if(opciones[i].checked)
        {
           alert("Se ha selecionado la " + opciones[i].value)
        }
    }
}