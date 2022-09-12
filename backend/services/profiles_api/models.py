from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager

from django.conf import settings


# Create your models here.
class UserProfileManager(BaseUserManager):
    """Manager user profile"""

    def create_user(self, email, name, password=None):
        """Create a new user"""
        if not email:
            raise ValueError("Please provide an email address")
            
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        
        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_superuser(self, email, name, password):
        """Create a new superuser with the given details"""
        user = self.create_user(email, name, password)
        
        user.is_superuser = True    # is_superuser is a field in PermissionsMixin class
        user.is_staff = True        # is_staff is a field in UserProfile class
        user.save(using=self._db)
        
        return user

class UserProfile(AbstractBaseUser, PermissionsMixin):
    '''Database model for users in the system'''
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = UserProfileManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    def get_full_name(self):
        """Retrieve the full name of the user"""
        return self.name
    
    def get_short_name(self):
        """Retrieve the short name of the user"""
        return self.name
    
    def __str__(self):
        """Return string representation of user"""
        return self.email
    
    
class ProfileFeedItem(models.Model):
    """Profile status update"""
    user_profile = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    
    status_text = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        """Return string representation of"""
        return self.status_text