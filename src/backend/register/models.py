from django.db import models
from django.contrib.auth.models import User
from .managers import UserManager


class UserProfile(models.Model):
    objects = UserManager()
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
