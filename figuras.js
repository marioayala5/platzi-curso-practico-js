//Codigo del cuadrado
console.group("Cuadrado");
const ladocuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladocuadrado + " cm");

const perimetrocuadrado = ladocuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetrocuadrado + " cm");

const areacuadrado = ladocuadrado * ladocuadrado;
console.log("El area del cuadrado es: " + areacuadrado + " cm2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");
const ladotriagunlo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
const alturatriangulo = 5.5;
console.log("Los lados del triangulo miden: " + ladotriagunlo1 + " cm " + ladotriangulo2 + " cm " + basetriangulo + " cm");

const perimetrotriangulo = ladotriagunlo1 + ladotriangulo2 + basetriangulo
console.log("El perimetro del triangulo es: " + perimetrotriangulo + " cm");

const areatriangulo = (basetriangulo *alturatriangulo) / 2;
console.log("El area del triangulo es: " + areatriangulo + " cm");
console.groupEnd();