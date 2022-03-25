//ejercicio_1
var precio, cantidad, pagar;

precio=parseFloat(prompt("Introduzca el precio del producto"));
cantidad=parseInt(prompt("Introduzca la cantidad que desea comprar"));
pagar=precio*cantidad;

document.write("Deberá pagar " + pagar + "€ por la cantidad de " + cantidad + " unidades del producto");