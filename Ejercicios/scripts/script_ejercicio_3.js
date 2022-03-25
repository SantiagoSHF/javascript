//Ejercicio 3
function comparar() {
    var n1, n2;
    n1 = parseInt(document.getElementById("n1").value);
    console.log(n1)
    
    n2= parseInt(document.getElementById("n2").value);
    console.log(n2)
    
    if (n1 > n2){
        window.alert(n1 + " es mayor a " + n2)

    }
    else if (n1 == n2) {
        window.alert(n1 + " es igual a " + n2)
    }
    else {
        window.alert(n1 + " es menor a " + n2)
    }

}
