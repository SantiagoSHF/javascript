let altura, edad, sexo, resul;
sexo=prompt("Introduce su sexo (hombre o mujer)" );
altura=parseFloat(prompt("Introduzca su altura en cm"));
edad=parseFloat(prompt("Introduzca su edad"));

if(sexo == "Hombre" || sexo == "hombre"){
    resul = 50 +((altura -150)/4)*3 + (edad-20)/4
    window.alert("Su peso ideal es " + resul)
}
else{
    resul = 50 +((altura -150)/4)*3 + (edad-20)/4 * 0,9
    window.alert("Su peso ideal es " + resul)
}