#views.py

from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from reserva.models import Reserva, Petshop
from rest_api.serializers import PetshopModelSerializer, AgendamentoModelSerializer, TamanhoModelSerializer

#Create your views here

class AgendamentoModelViewSet(ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = AgendamentoModelSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
     
    
class PetshopModelViewSet(ReadOnlyModelViewSet):
    queryset = Petshop.objects.all()
    serializer_class = PetshopModelSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    
class TamanhoModelViewSet(ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = TamanhoModelSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

@api_view(['GET', 'POST'])
def hello_world(request):
    if request.method == 'POST':
        return Response({'message': f'Hello, {request.data.get("name")}'})
    
    return Response({'Hello': "World API"})

