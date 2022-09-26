from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager

from django.conf import settings

class UserAccountManager(BaseUserManager):
    def create_user(self, username, password):
        """Create a new user"""
        if not username or not password:
            raise ValueError('You must provide a username/password')
        
        username = username.lower()
        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_superuser(self, username, password):
        user = self.create_user(username, password)
        user.is_superuser = True
        user.save(using=self._db)
        
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    """Basic user account model"""
    username = models.CharField(max_length=30, unique=True)
    # created_at = models.DateTimeField(auto_now_add=True)
    objects = UserAccountManager()
    
    
    USERNAME_FIELD = 'username'
    
    def __str__(self):
        return self.username
    
