def decorator_imprimir(func):
    def inner(capital, taxa, tempo):
        print("CAPITAL: " + str(capital) + " TAXA: " + str(taxa) + " TEMPO: " + str (tempo))
        resultado = func(capital, taxa, tempo)
        print(f'RESULTADO: {resultado}')
        return func(capital, taxa, tempo)
    return inner

@decorator_imprimir
def juros_simples(capital, taxa, tempo):
    return capital * (taxa / 100) * tempo


capital = float(input())
taxa = float(input())
tempo = float(input())
juros_simples(capital, taxa, tempo)