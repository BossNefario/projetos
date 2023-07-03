function aplicarDescontoTeste1(){
    // Dá desconto de 5 reais no produto de preço 20
    return aplicarDesconto(20,5) === 15;
 }

 function aplicarDescontoTeste2(){
    // Dá desconto de 5 reais no produto de preço 20
    return aplicarDesconto(5,10) === 0;
 }

 function aplicarDesconto(preco, desconto){
    if (desconto > preco)
        return 0;     
 
    return preco - desconto;
 }

 console.log('A aplicação de desconto está funcionando? ');
 console.log(aplicarDescontoTeste1());
 console.log(aplicarDescontoTeste2());
 