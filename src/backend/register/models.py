from django.contrib.auth.models import User, UserManager, AbstractUser
from django.db import models
from django.conf import settings


class UserProfileManager(UserManager):
    pass


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
