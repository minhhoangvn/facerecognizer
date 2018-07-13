from .models import User
from .models import UserProfile
from django.http import Http404

from .serializers import UserProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from rest_framework.permissions import AllowAny

class UserList(APIView):
    permission_classes = (AllowAny,)
    """
    List all users, or create a new user.
    """

    def get(self, request: Request, format=None):
        users = UserProfile.objects.all()
        serializer = UserProfileSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request: Request, format=None):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: Request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserDetail(APIView):
    """
    Retrieve, update or delete a user instance.
    """
    permission_classes = (AllowAny,)

    def get_object(self, pk):
        try:
            return UserProfile.objects.get(pk=pk)
        except UserProfile.DoesNotExist:
            raise Http404

    def get(self, request: Request, pk, format=None):
        user = self.get_object(pk)
        user = UserProfileSerializer(user)
        return Response(user.data)

    def put(self, request: Request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserProfileSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
