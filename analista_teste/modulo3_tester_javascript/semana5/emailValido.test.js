// nome do arquivo emailValido.test.js

const validateEmail = require('./emailValido');

test('validateEmail deve retornar verdadeiro para xxx@ultima.com', () => {
   expect(validateEmail('xxx@ultima.com')).toBeTruthy();
});