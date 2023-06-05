let pessoa = new Object();

pessoa.nome = "Davi";
pessoa.sobrenome = "Bruno";

pessoa.cpf = 71431451227;

console.log(pessoa.nome);
console.log(pessoa['cpf']);

for (key in pessoa) {
    console.log(pessoa[key]);
 }

let point = {
    x: 1000,
    y: 2000
}

JSON.stringify([point]);

let cor = "verde";

function exibirCor() {
    var cor;
    console.log(cor);    
 }
    exibirCor();    