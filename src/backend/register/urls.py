from django.urls import path,include
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from .views import UserList, UserDetail

admin.autodiscover()

urlpatterns = [
    path('v1/all/', UserList.as_view()),
    path('v1/details/<int:pk>/', UserDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
