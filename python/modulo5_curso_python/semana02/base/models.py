from django.db import models

class Contato(models.Model):
    nome = models.CharField(max_length=50)
    email = models.EmailField(max_length=75)
    mensagem = models.TextField()
    data = models. DateTimeField(auto_now_add=True)
    
class ReservaBanho(models.Model):
    petnome = models.CharField(max_length=50)
    telefone = models.IntegerField()
    datareserva = models.DateTimeField()
    observacoes = models.TextField()
    datacriacao = models. DateTimeField(auto_now_add=True)
    
