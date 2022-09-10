from django.urls import path, include

from rest_framework.routers import DefaultRouter
from services.profiles_api import views

router = DefaultRouter()
router.register('profiles-viewset', views.ProfileViewSet, basename='profiles-viewset')

urlpatterns = [
    path('hello-view', views.ProfileApiView.as_view()),
    path('hh/', include(router.urls))
]