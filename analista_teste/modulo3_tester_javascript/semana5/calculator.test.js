const {soma, subtracao, multiplicacao, divisao} = require('./calculator')

test('somar dois fatores' , () => {
    expect(soma(7, 8)).toBe(15);
});

test('subtrair dois fatores' , () => {
    expect(subtracao(10, 8)).toBe(2);
});   

test('dividir dois fatores' , () => {
    expect(divisao(10, 5)).toBe(2);
});

test('multiplicar dois fatores' , () => {
    expect(multiplicacao(10, 8)).toBe(80);
});   
