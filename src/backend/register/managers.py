from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from datetime import date, datetime, timedelta
from django.utils import timezone


class UserManager(models.Manager):
    def create_new_user(self, **data):
        return super(UserManager, self).create(**data)

    def get_user_by_email(self, email_data)
        return super(UserManager, self).get_queryset().filter(email=email_data)

    def get_user_by_username(self, username)
        return super(UserManager, self).get_queryset().filter(username=username)
