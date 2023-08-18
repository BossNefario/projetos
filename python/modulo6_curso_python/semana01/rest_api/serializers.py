from rest_framework.serializers import ModelSerializer

from reserva.models import Reserva


class AgendamentoModelSerializer(ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'

class PetAgendamentoSerializer(ModelSerializer):
    class Meta:
        model = Reserva
        fields = ['nome_pet']
        
class DataAgendamentoSerializer(ModelSerializer):
    class Meta:
        model = Reserva
        fields = ['data']
    