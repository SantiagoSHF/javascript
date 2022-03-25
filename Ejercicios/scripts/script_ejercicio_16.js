var marca, modelo, precio, total;
marca=prompt("Introduce la marca del coche" );
modelo=prompt("Introduce el modelo del coche" );
precio=parseFloat(prompt("Precio del coche"));

if (marca == "Renault" || marca == "renault" ){
    total = (precio * 100) / 15;
    window.alert("Esta marca tiene un 15% de descuento. Su precio quedaría en " + total + "€");
}
else if (marca == "Ford" || marca == "ford" && modelo == "Fiesta" || modelo == "fiesta"){
    total = (precio * 100) / 7;
    window.alert("Esta marca con este modelo tiene un 7% de descuento. Su precio quedaría en " + total + "€");
}
else if (marca == "Ford" || marca == "ford" && modelo == "Focus" || modelo == "focus"){
        total = (precio * 100) / 10;
        window.alert("Esta marca con este modelo tiene un 10% de descuento. Su precio quedaría en " + total + "€");

    }
else{
    total = (precio * 100) / 5;
    window.alert("Esta marca tiene un 5% de descuento. Su precio quedaría en " + total + "€");
}