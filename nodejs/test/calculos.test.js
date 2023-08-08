const {sum, multiply, sub, div} = require('../src/calculos');

describe('TESTES ADIÇÃO', () => {
    test('SOMA DE NÚMEROS POSITIVOS', () => {
        expect(sum(2,3)).toBe(5);
    });

    test('SOMA DE NÚMEROS NEGATIVOS', () => {
        expect(sum(-1,-2)).toBe(-3);
    });

    test('SOMA DE NÚMEROS DECIMAIS', () => {
        expect(sum(0.2,4.2)).toBe(4.4);
    });
});

describe('TESTES MULTIPLICAÇÃO', () => {
    test('MULTIPLICAÇÃO DE DOIS NÚMEROS POSITIVOS', () => {
        expect(multiply(2,3)).toBe(6);
    });

    test('MULTIPLICAÇÃO DE DOIS NÚMEROS NEGATIVOS', () => {
        expect(multiply(-1,-2)).toBe(2);
    });

    test('MULTIPLICAÇÃO DE NÚMERO NEGATIVO E POSITIVO', () => {
        expect(multiply(-1,2)).toBe(-2);
    });

    test('MULTIPLICAÇÃO DE NÚMEROS DECIMAIS', () => {
        expect(multiply(1.2,1.2)).toBe(1.44);
    });
});

describe('TESTES SUBTRAÇÃO', () => {
    test('SUBTRAÇÃO DE DOIS NÚMEROS POSITIVOS', () => {
        expect(sub(2,3)).toBe(-1);
    });

    test('SUBTRAÇÃO DE DOIS NÚMEROS NEGATIVOS', () => {
        expect(sub(-1,-2)).toBe(1);
    });

    test('SUBTRAÇÃO DE NÚMERO NEGATIVO E POSITIVO', () => {
        expect(sub(-1,2)).toBe(-3);
    });

});

describe('TESTES DIVISÃO', () => {
    test('DIVISÃO DE DOIS NÚMEROS POSITIVOS', () => {
        expect(div(4,2)).toBe(2);
    });

    test('DIVISÃO DE DOIS NÚMEROS NEGATIVOS', () => {
        expect(div(-2,-2)).toBe(1);
    });

    test('DIVISÃO DE NÚMERO NEGATIVO E POSITIVO', () => {
        expect(div(-4,2)).toBe(-2);
    });

    test('DIVISÃO DE NÚMEROS COM RESULTADO NÃO INTEIRO', () => {
        expect(div(5,2)).toBe(2.5);
    });

    test('DIVISÃO DE NÚMEROS DECIMAIS', () => {
        expect(div(3.4,2)).toBe(1.7);
    });
});