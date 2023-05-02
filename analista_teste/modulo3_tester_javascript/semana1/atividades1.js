// Leitura das notas
let nota1 = 7; // nota atribuida
let nota2 = 8; // nota atribuida

// Cálculo da média
let media = (nota1 + nota2) / 2;

// Exibição da nota e resultado
console.log("A nota obtida foi:", media.toFixed(2)); // exibe a nota com duas casas decimais

if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
