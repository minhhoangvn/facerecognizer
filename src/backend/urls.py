from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from backend.register.views import RegisterIndex
from backend.settings.basesettings import MEDIA_URL, MEDIA_ROOT, DEBUG
from django.conf.urls.static import static

from rest_framework.permissions import AllowAny
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path('register/', RegisterIndex.as_view()),
    path('user/', include('backend.register.urls')),
    path('api/', include('backend.collection.urls')),
    path('api/docs/', include_docs_urls(title="Face Recognizer",
                                        permission_classes=(AllowAny,))),
]

if DEBUG:
    urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
