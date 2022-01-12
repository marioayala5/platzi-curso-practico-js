//Codigo del cuadrado
console.group("Cuadrado");
// const ladocuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladocuadrado + " cm");

function perimetrocuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetrocuadrado + " cm");

function areacuadrado(lado) {
    return lado * lado
}
// console.log("El area del cuadrado es: " + areacuadrado + " cm2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");
// const ladotriagunlo1 = 6;
// const ladotriangulo2 = 6;
// const basetriangulo = 4;
// const alturatriangulo = 5.5;
// console.log("Los lados del triangulo miden: " + ladotriagunlo1 + " cm " + ladotriangulo2 + " cm " + basetriangulo + " cm");

function perimetrotriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
// console.log("El perimetro del triangulo es: " + perimetrotriangulo + " cm");

function areatriangulo(base, altura) {
    return (base * altura)/2;
}
// console.log("El area del triangulo es: " + areatriangulo + " cm");
console.groupEnd();