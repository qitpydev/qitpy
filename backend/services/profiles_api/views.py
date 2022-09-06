from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class ProfileApiView(APIView):
    """Test API VIEW"""
    
    def get(self, request, format=None):
        """Return a list of APIView features"""
        an_apiview = [
            'Uses HTTP methods as function (get, post, put, delete)',
            'Is similar the most control over you application logic',
            'Gives you the most control over you application logic'
            'Is mapped manually to URLs'
        ]
        
        return Response({'message': 'Hello!', 'an_apiview': an_apiview})