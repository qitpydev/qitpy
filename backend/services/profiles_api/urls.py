from django.urls import path
from services.profiles_api import views


urlpatterns = [
    path('hello-view', views.ProfileApiView.as_view())
]