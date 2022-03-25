var sueldo, antiguedad, total;
sueldo=parseInt(prompt("Introduce el sueldo del operario" ));
antiguedad=parseInt(prompt("Introduce los años de antigüedad en la empresa" ));

if (antiguedad >= 10 && sueldo < 1000)
{
    total = (((sueldo * 20) / 100) + sueldo)
    window.alert("Su sueldo es " + total + "€ por tener 10 o más años de antigüedad")
}
else if (antiguedad < 10 && sueldo < 1000)
{
    total = (((sueldo * 5) / 100) + sueldo)
    window.alert("Su sueldo es " + total + "€ por tener menos de 10 años de antigüedad")
}
else if (sueldo >= 1000)
{
    total = sueldo
    window.alert("Su sueldo es " + total + "€ debido a que es superior o igual a 1000€")

}