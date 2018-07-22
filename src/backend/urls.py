from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from backend.register.views import RegisterIndex
urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'(r|R)egister$', RegisterIndex.as_view()),
    url(r'(u|U)ser/', include('backend.register.urls')),
]
