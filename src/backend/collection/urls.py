from django.urls import path,include
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns

from .views import CollectionView, PersonView, UploadView, ListImagesView


urlpatterns = [
    path('collection/',CollectionView.as_view(),name='collections'),
    path('person/',PersonView.as_view(), name='person'),
    path('images/', ListImagesView.as_view(),name='list-image'),
    path('upload/',  UploadView.as_view(), name='image-upload'),
]
