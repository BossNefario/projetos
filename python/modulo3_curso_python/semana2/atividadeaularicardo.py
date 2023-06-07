def decorator_resumo(func):
    def wrapper(valor_pratos, taxa_servico):
        resultado = func(valor_pratos, taxa_servico)
        print("VALOR PRATOS: {}, TAXA DE SERVIÇO: {}, TOTAL: {}".format(valor_pratos, taxa_servico, resultado))
        return resultado
    return wrapper

@decorator_resumo
def calcula_conta(valor_pratos, taxa_servico):
    total = sum(valor_pratos)
    total += total * taxa_servico
    return total

valor_pratos = []
taxa_servico = 0.1
pratos = int(input('quantidade de pratos requisitados: '))
while pratos > 0:
    valor_prato = float(input('valor do prato: '))
    valor_pratos.append(valor_prato)
    pratos -= 1

calcula_conta(valor_pratos, taxa_servico)