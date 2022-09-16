from rest_framework import serializers
from securities import models

class AuthenticationSerializer(serializers.ModelSerializer):
    """Serializer for authentication methods"""
    
    class Meta:
        models =  models.UserAccount
        fields = ('id', 'username', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password',
                }
            }
        }
        
    def create(self, validated_data):
        """Create and return new user"""
        user = models.UserAccount.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        return user
    
    def update(self, instance, validated_data):
        """Handle updating username/password"""
        if 'password' in validated_data:
            new_password = validated_data.pop('password')
            instance.set_password(new_password)
            
        return super().update(instance, validated_data)