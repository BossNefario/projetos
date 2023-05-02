// funções
function hello() {
    console.log("Hello World!");
 }

 hello()

// função texto

 function hello(texto) {
    console.log("Olá,", texto);
 }

 hello("Bruno")

 // exemplo 2

 let numeroA = 5;
 let numeroB = 10;

 function calcularMedia(a, b) {
    let soma = a + b;

    let media = soma / 2;

    console.log("Media: ", media);
 }

 calcularMedia(numeroA, numeroB);

 // calcular área do retangulo

 function calculateRectangleArea(a, b) {
    let area = a * b
    return area
 }
 console.log("Area de : " + calculateRectangleArea(10, 5) + " metros quadrados");

// arrow function

const media = (a, b) => (a + b) / 2;

console.log("A media é: " + media(22,10)) // retorna média 16