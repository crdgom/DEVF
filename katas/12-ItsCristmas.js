// Crea una función llamada isChristmas() que reciba como parámetro una fecha cualquiera
// (“dia-mes-año”), y verifica si dicha fecha corresponde a Navidad.
// Retorna true. En caso de que sea Navidad.
// Retorna false. En caso de no sea Navidad.

function itCrismas(date){
    a = date.split("-");
    if(a[0] == 25 && a[1] == 12){
        return true;
    }else {
        return false;
    }
}