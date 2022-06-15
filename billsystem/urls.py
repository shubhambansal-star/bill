"""billsystem URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from pydoc import render_doc
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.shortcuts import render
from .views import index, CustomTokenObtainPairView
from rest_framework_simplejwt import views as jwt_views
def render_react(request):
    return render(request, "index.html")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/login/',CustomTokenObtainPairView.as_view(),name ='token_obtain_pair'),
    path('api/token/refresh/',jwt_views.TokenRefreshView.as_view()),
    path('api/',include('authentication.urls')),
    path('api/',include('bills.urls')),
    path('api/',include('warehouse.urls')),
    path('api/orders/',include('orders.urls')),
    path('',index)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()

routes = getattr(settings, 'REACT_ROUTES', [])
for route in routes:
    urlpatterns += [
        path('{}'.format(route),index, name="index" )
    ]