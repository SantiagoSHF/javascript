var n1,n2, n3, media;
n1=parseFloat(prompt("Introduce la primera nota"));
n2=parseFloat(prompt("Introduce la segunda nota"));
n3=parseFloat(prompt("Introduce la tercera nota"));

media = (n1 + n2 + n3) / 3;


if(media < 5){
    window.alert("Repetidor con media de " + media );
}
else if (media >= 5 && media < 7) {
    window.alert("Superado con media de " + media);
} else if (media >= 7 && media <= 10) {
    window.alert("Promocionado con media de " + media);
}
else{
    window.alert("Las notas introducidas no son correctas");
}