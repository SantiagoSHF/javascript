var n1,n2, n3, resul;
n1=parseInt(prompt("Introduce el primer número"));
n2=parseInt(prompt("Introduce el segundo número"));
n3=parseInt(prompt("Introduce el tercer número"));


if(n1 == n2 && n1 == n3){
    resul = (n1 + n2) * n3;
    window.alert("Ya que los números son iguales sumamos los 2 primeros y se multiplica por el tercero dando como resultado " + resul) 

}
 else {
    window.alert("Ya que los números no son iguales no realizamos ninguna operación") 
}