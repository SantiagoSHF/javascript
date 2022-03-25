var n1,n2, n3;
n1=parseInt(prompt("Introduce el primer número"));
n2=parseInt(prompt("Introduce el segundo número"));
n3=parseInt(prompt("Introduce el tercer número"));


if(n1 > n2 && n1 > n3){
    window.alert("El número mayor es " + n1) 
}
if (n2 > n1 && n2 > n3) {
    window.alert("El número mayor es " + n2) 
} else {
    window.alert("El número mayor es " + n3) 
}