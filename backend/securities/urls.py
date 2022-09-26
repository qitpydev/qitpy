from django.urls import path, include
from securities import views
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register('ahihi/', views.UserViewSet)

urlpatterns = [
    path('login', views.UserLogin.as_view()),
    path('register', views.UserRegister.as_view()),
    # path('view-set/', include(router.urls)),
    
    # path('user/register/', views.UserViewSet.as_view()),
    # path('user/change-password/', views.UserChangePassword.as_view()),
    # path('user/change-username/', views.UserChangeUsername.as_view()),
]