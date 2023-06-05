const aluno = {
    nome: "Tobio",
    email: "tobio@tobio.com",
    dataNascimento: "2010/10/10",
    sexo: "masculino",
    cidade: "Manaus",
    matricula: "123456789",

    detalhes: function() {
        console.log(this.matricula, this.nome, this.email, this.dataNascimento, this.sexo, this.cidade)
    }
}

aluno.detalhes();