from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from reserva.models import Reserva
from rest_api.serializers import AgendamentoModelSerializer, PetAgendamentoSerializer, DataAgendamentoSerializer

#Create your views here

class AgendamentoModelViewSet(ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = AgendamentoModelSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
        
class AgendamentoDataViewSet(ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = DataAgendamentoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class AgendamentoPetViewSet(ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = PetAgendamentoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

@api_view(['GET', 'POST'])
def hello_world(request):
    if request.method == 'POST':
        return Response({'message': f'Hello, {request.data.get("name")}'})
    
    return Response({'Hello': "World API"})