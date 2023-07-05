from django import forms

class ContatoForm(forms.Form):
    nome = forms.CharField()
    email = forms.EmailField()
    mensagem = forms.CharField(widget=forms.Textarea)
    
class BanhoForm(forms.Form):
    pet_nome = forms.CharField()
    telefone = forms.CharField()
    data_da_reserva = forms.DateField()
    observacoes = forms.CharField(widget=forms.Textarea)