function funcao1(){
    setTimeout( function(){
    console.log('Oi após 5 segundos');
    }, 5000 );
 }

 function funcao2(){
    console.log('Olá');
 }

 funcao1();
 funcao2();


 function exibeMensagem(mensagem, callback) {
    console.log(mensagem);
    callback();
 }

 exibeMensagem('Primeira mensagem exibida', function() {
    console.log('Segunda mensagem exibida');
 });