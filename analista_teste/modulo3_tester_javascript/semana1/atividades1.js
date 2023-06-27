// Leitura das notas
let nota1 = 7; // primeira nota atribuida
let nota2 = 8; // segunda nota atribuida

// Cálculo da média
let media = (nota1 + nota2) / 2;

// Exibição da nota e resultado
console.log("A nota obtida foi:", media.toFixed(2)); // exibe a nota com duas casas decimais


if (media >= 6) {
  console.log("Aprovado"); // imprimir o resultado "Aprovado"
} else {
  console.log("Reprovado"); // imprimir o resultado "Reprovado"
}

// console.log(media >= 6 ? "Aprovado" : "Reprovado");
