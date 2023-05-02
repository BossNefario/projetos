// remover do final da lista - usar pop

const numeros1 = [50, 20, 15, 14, 8];
 numeros1.pop();

 console.log(numeros1); // 20, 15, 14, 8

// remover do começo da lista - usar shift

const numeros2 = [50, 20, 15, 14, 8];
 numeros2.shift();

 console.log(numeros2); // 20, 15, 14, 8

// Juntar dois arrays

 const numerosA = [50, 20, 15];
 const numerosB = [14, 8];
 const numerosC = numerosA.concat(numerosB);

 console.log(numerosC); // 50, 20, 15, 14, 8

 // While

 let salario = 1000;

 while (salario < 5000) {
    salario = salario + 500;

    // imprime o salário até o valor se igualar a 5000
    console.log("Salário: R$ ", salario); 
 };

 // Do-While

 let aumento = 100;

 do {
    console.log("Aumento de: R$ ", aumento); 

    aumento = aumento + 50;
 } while (aumento < 100);

 // Do-While - pares de 0 a 100

 let verif = 1; // verif representa o número a ser verificado

 do {
   if (verif % 2 != 0)
      console.log(verif); 

    verif = verif + 1;
 } while (verif < 20);

 // utilizando for

 for (let i=1; i<20; i++) {
   if(i % 2 != 0)
       console.log(i);
};

// for em um array

const valores = [100, 200, 300, 400, 500];

 for (let i = 0; i < valores.length; i++) {
    console.log("Indice:", i, "Valor:", valores[i]); 
 }

 // foreach

 const notas1 = [8, 9, 10, 6.5, 8.5];

 let soma1 = 0;

 notas1.forEach(nota => { // so funcionou quando substitui foreach por forEach
    soma1 += nota;
 });

 let media1 = soma1/notas1.length;

 console.log("Média: ", media1);

 // soma usando laço for

 const numbers = [2, 4, 5, 7, 10, 11, 12];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0)
   sum += numbers[i];
}

console.log("Sum:", sum);