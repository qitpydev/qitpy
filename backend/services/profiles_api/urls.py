from django.urls import path, include

from rest_framework.routers import DefaultRouter
from services.profiles_api import views

router = DefaultRouter()
router.register('profiles-viewset', views.ProfileViewSet, basename='profiles-viewset')
router.register('profile', views.UserProfileViewSet)
router.register('feed', views.UserProfileFeedViewSet)

urlpatterns = [
    path('hello-view/', views.ProfileApiView.as_view()),
    path('view-set/', include(router.urls)),
    path('login/', views.UserLoginAPiView.as_view()),
]