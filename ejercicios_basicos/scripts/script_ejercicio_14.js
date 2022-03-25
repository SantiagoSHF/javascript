var nombre,preg, correctas, resul;
nombre=prompt("Introduce el nombre del aspirante" );
preg=parseInt(prompt("Introduce el número de preguntas" ));
correctas=parseInt(prompt("Introduce el número de respuestas correctas" ));

document.write("Nombre: " + nombre + "<br>");
document.write("Total de preguntas: " + preg + "<br>");
document.write("Preguntas correctas: " + correctas + "<br>");

resul = (correctas * 100) / preg;
if (resul >= 90)
{
    document.write("Nivel por porcentaje: Nivel Superior");
}
else if(resul >= 75)
{
    document.write("Nivel por porcentaje: Nivel medio");
}
else if (resul >= 50)
{
    document.write("Nivel por porcentaje: Nivel Bajo");
}
else if (resul < 50)
{
    document.write("Nivel por porcentaje: Fuera de nivel");
}
