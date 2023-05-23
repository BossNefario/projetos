import pytest
from exercicio2 import calcular_total_pedido

def test_calcular_total_pedido():
    # Simula dois pedidos
    codigo1 = 100
    codigo2 = 102

    # Calcula o total dos pedidos
    total = 0.0
    total += calcular_total_pedido(codigo1)
    total += calcular_total_pedido(codigo2)

    # Verifica se o total está correto
    assert total == 21.00