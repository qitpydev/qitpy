from rest_framework import serializers

class ProfileSerializer(serializers.Serializer):
    """Serializer for ProfileSerializer classes"""
    name = serializers.CharField(max_length=10)