var n1,n2, suma, resta, producto, division;
n1=parseInt(prompt("Introduce el primer número"));
n2=parseInt(prompt("Introduce el segundo número"));

if(n1 > n2){
    suma = n1 + n2;
    resta = n1 - n2;
    document.write("Ya que el primer número es mayor al segundo." + "<br>");
    document.write("La suma de " + n1 + " y " + n2 +" es " + suma + "<br>");
    document.write("La diferencia entre " + n1 + " y " + n2 + " es " + resta + "<br>");  
}
else{
    producto = n2 * n1;
    division = n2 / n1;
    document.write("Ya que el primer número es menor al segundo." + "<br>");
    document.write("El producto de multiplicar " + n2 + " y " + n1 + " es " + producto + "<br>");
    document.write("La division de " + n2 + " y " + n1 + " es " + division + "<br>");
}

