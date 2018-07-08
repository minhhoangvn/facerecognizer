from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'test', TemplateView.as_view(template_name="base.html")),
    url(r'sample', TemplateView.as_view(template_name="index.html")),
    url(r'register', TemplateView.as_view(template_name="register/index.html")),
]
