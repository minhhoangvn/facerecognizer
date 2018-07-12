
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from .views import UserList, UserDetail

admin.autodiscover()

urlpatterns = [
    url(r'^v1/all$', UserList.as_view()),
    url(r'^v1/details/(?P<pk>[0-9]+)/$', UserDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
