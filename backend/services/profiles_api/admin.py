from django.contrib import admin
from services.profiles_api import models
# Register your models here.

admin.site.register(models.UserProfile)