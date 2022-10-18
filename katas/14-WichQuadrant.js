// Crea una función llamada whichQuadrant(x,y) que reciba la coordenada de un punto en el plano cartesiano;
// es decir, recibe dos valores enteros x e y. Evalúe en qué cuadrante se ubica dicho punto.
// Retorne Cuadrante I X > 0 , Y > 0
// Retorne Cuadrante II X < 0 , Y > 0
// Retorne Cuadrante III X < 0 , Y < 0
// Retorne Cuadrante IV X > 0 , Y < 0


function whichQuadrant( x , y ){
    if ( x > 0 && y > 0){
        return "Cuadrante I"
    }
    if ( x < 0 && y > 0){
        return "Cuadrante II"
    }
    if (x < 0 && x < 0){
        return "Cuadrante III"
    }
    if( x > 0 && y < 0){
        return "Cuadrante IV"
    }
}