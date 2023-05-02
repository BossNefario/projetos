// usando while

let minhalista = []
let i = 1

while (i <= 10) {
    minhalista.push(i)
    i++
}

console.log(minhalista)

// usando do-while

let minhalista2 = []
j = 1

do {
    minhalista2.push(j)
    j++
} while (j <= 10)

console.log(minhalista2)

// usando laço for

let minhalista3 = []

for (k = 1; k <= 10; k++) {
    minhalista3.push(k)
}

console.log(minhalista3)

// usando laço forEach

const fator = 2
let resultado = 0

minhalista.forEach(i => {
    resultado = i * fator
    console.log(fator," x ",i," = ", resultado)
})


// Crie um array com 5 números reais, e para cada elemento utilize funções matemáticas para exibir respectivamente:

const tabela = [7.6, 5.5, 9.7, 2.1, 17.4]
let quadrado = 0
let raiz = 0
let parteinteira = 0
let arredondarcima = 0
let arredondarbaixo = 0


tabela.forEach(n => {
    quadrado = Math.pow(n, 2).toFixed(3)
    raiz = Math.sqrt(n).toFixed(3)
    parteinteira = Math.floor(n)
    arredondarcima = Math.ceil(n)
    arredondarbaixo = Math.floor(n)
    console.log("Para o elemento ", n)
    console.log("O Quadrado é ", quadrado)
    console.log("A Raiz Quadrada é ", raiz)
    console.log("A parte inteira é ", parteinteira)
    console.log("O número arredondado para cima é ", arredondarcima)
    console.log("O número arredondado para baixo é ", arredondarbaixo)
})