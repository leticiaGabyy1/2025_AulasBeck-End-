function PI (){
    let pi = 3.1415;
    return pi;
}
PI()
console.log(PI());


let circunferencia = 1
function calcularRaio(circunferencia){
    return circunferencia / (2 * PI());
}
console.log(calcularRaio(10));
