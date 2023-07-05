from django.shortcuts import render
from django.http import HttpResponse
from base.forms import ContatoForm

def inicio(request):
    return render(request, 'inicio.html')

def contato(request):
    sucesso = False
    if request.method == 'GET':
        form = ContatoForm()
    else:
        form = ContatoForm(request.POST)
        if form.is_valid():
            sucesso = True
    contexto= {
        'telefone': '(92) 98239-0513',
        'responsavel': 'Bruno Almeida',
        'form': form,
        'sucesso': sucesso
    }
    return render(request,'contato.html', contexto)
