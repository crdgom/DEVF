// Crea una función llamada evaluateGrade() que reciba como parámetro una
// nota (número) y evalúe la calificación según la nota, retornando:
// Si la nota se encuentra entre 0-3: Retorna Muy deficiente
// Si la nota se encuentra entre 4-5: Retorna Insuficiente
// Si la nota se encuentra entre 6-7: Retorna Bien
// Si la nota se encuentra entre 8-9: Retorna Notable
// Si la nota se encuentra entre 10: Retorna Sobresaliente

function evaluateGrade(n){
    if (n >= 0 && n <=3 ){
        return "Muy deficiente"
    }
    if (n >= 4 && n <=5){
        return "Insuficiente"
    }
    if (n >= 6 && n <= 7){
        return"Bien"
    }
    if (n >= 8 && n <= 9 ){
        return "Notable"
    } else{
        return "Sobresaliente"
    }
}