var n1;
n1=parseInt(prompt("Introduce un número entero positivo (Máximo 2 cifras)"));
//Comprobador del número
while(n1 < 0 || n1 > 99)
{
    n1=parseInt(prompt("Introduce un número entero positivo (Máximo 2 cifras)"));
}
//Contador de cifras
if(n1 < 10){
    window.alert("Su número es de 1 cifra") 
}
else  {
    window.alert("Su número es de 2 cifras") 
} 

