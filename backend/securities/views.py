from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.settings import api_settings
from rest_framework.views import APIView
from securities import serializers, models, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import BasePermission
from rest_framework import filters
from rest_framework import viewsets
from rest_framework import mixins

class UserLogin(ObtainAuthToken):
    """Handle creating user authentication tokens"""
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        
        user = serializer.validated_data['user']
        isTokenExisted = Token.objects.filter(user=user).exists()
        if isTokenExisted:
            Token.delete(Token.objects.get(user=user))
        token = Token.objects.create(user=user)
        
        return Response({
            'user_id': user.pk,
            'token': token.key,
            'username': user.username,
        })

class UserRegister(APIView):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
    def post(self, request):
        serializer = serializers.AuthenticationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
                