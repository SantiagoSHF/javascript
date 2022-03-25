let dia, mes, anno;

//Introducir día
dia=parseInt(prompt("Introduce un día"));
while(dia > 31 || dia < 1)
{
    dia=parseInt(prompt("Introduce un día correcto"));
}

//Introducir mes
mes=parseInt(prompt("Introduce un mes"));
while(mes > 12 || mes < 1)
{
    mes=parseInt(prompt("Introduce un mes correcto"));
}

//introducir año
anno=parseInt(prompt("Introduce un año"));

//Calcular si es bisiesto
if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
{
    window.alert("Este mes tiene 31 días")
}
else if(mes == 4 || mes == 6 || mes == 9 || mes == 11)
{
    window.alert("Este mes tiene 30 días")
}
else if(anno % 2 == 0 && mes == 2){
    window.alert("este mes tiene 29 días ya que es un año bisiesto") 
}
else
{
    window.alert("Este mes tiene 28 días")
}

