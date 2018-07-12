from django.contrib.auth.models import User, UserManager, AbstractUser
from django.db import models
from django.conf import settings


class UserProfileManager(UserManager):
    def create_user(self, username, email, password, **extra_fields):
        UserManager.create_user(self, username=username,
                                email=email, password=password, **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        UserManager.create_superuser(self, username=username,
                                     email=email, password=password, **extra_fields)


class UserProfile(AbstractUser):
    objects = UserManager()
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    REQUIRED_FIELDS = ['email', 'password']

    class Meta:
        ordering = ['username', 'email']
        db_table = 'tlt_user'
        indexes = [
            models.Index(fields=['email'], name='email_idx'),
            models.Index(fields=['username'], name='user_name_idx')
        ]
