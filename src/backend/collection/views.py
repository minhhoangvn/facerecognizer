from rest_framework import viewsets, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import generics

from .serializers import CollectionSerializer, PersonSerializer, PersonImageSerializer

from .models import Collection, Person, PersonImage


class CollectionView(generics.ListCreateAPIView):
    """
    API endpoint that allows Collections to be viewed or edited.
    """
    permission_classes = (AllowAny,)

    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer


class PersonView(generics.ListCreateAPIView):
    """
    API endpoint that allows People to be viewed or edited.
    """

    permission_classes = (AllowAny,)

    queryset = Person.objects.all()
    serializer_class =  PersonSerializer


class ListImagesView(generics.ListAPIView):
    """
    API endpoint that allows to upload images.
    """

    permission_classes = (AllowAny,)

    queryset = PersonImage.objects.all()

    serializer_class = PersonImageSerializer

class UploadView(APIView):
    
    """
    API endpoint that allows to upload images.
    """

    permission_classes = (AllowAny,)

    parser_classes = (MultiPartParser, FormParser)

    serializer_class = PersonImageSerializer

    def post(self,request, *args, **kwargs):
        person_image_serializer = PersonImageSerializer(data=request.data)
        if person_image_serializer.is_valid():
            person_image_serializer.save()
            return Response(person_image_serializer.data, status=status.HTTP_201_CREATED)
        return Response(person_image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
