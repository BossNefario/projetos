a = float(input('Digite a Primeira Nota : '))
b = float(input('Digite a Primeira Nota : '))
resultado = (a + b) / 2
print(f'Sua nota foi {resultado:.2f}')
if resultado >= 6:
    print('Parabéns, você foi Aprovado')
else:
    print('Reprovado')