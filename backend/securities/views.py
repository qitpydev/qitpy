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

class UserLogin(ObtainAuthToken):
    """Handle creating user authentication tokens"""
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
        })
        
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AuthenticationSerializer
    queryset = models.UserAccount.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (BasePermission)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('username',)