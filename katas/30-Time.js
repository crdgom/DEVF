/* Crea una función llamada time() que calcule el tiempo necesario para que un automóvil
que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km.

(Tiempo = distancia/velocidad)
 */
function time(d,v){
    d = 120
    v = 7300
    t = (d/v)*100
    return Number(t.toFixed(2))
}