var n1;
n1=parseInt(prompt("Introduce un número entero positivo (Máximo 3 cifras)"));
//Comprabador del número introducido
while(n1 < 0 || n1 > 999)
{
    n1=parseInt(prompt("Introduce un número entero positivo (Máximo 3 cifras)"));
}
// Contador de cifras
if(n1 < 10){
    window.alert("Su número es de 1 cifra") 
}
else if(n1 >= 10 && n1 <= 99){
    window.alert("Su número es de 2 cifras") 
}
else  {
    window.alert("Su número es de 3 cifras") 
} 

