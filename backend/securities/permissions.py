from rest_framework import permissions

class OnlyRead(permissions.BasePermission):
    """Allows users read my pages"""
    
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        else: return False
        
        
class OnlyOwner(permissions.BasePermission):
    """Allows users with have authentication to access theirs data"""
    
    def has_object_permission(self, request, view, obj):
        return obj.user_profile.id == request.user.id