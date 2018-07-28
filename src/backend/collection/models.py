from django.db import models

class Collection(models.Model):

    collection_name = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now_add=True,blank=True)

    def __str__(self):
        return self.collection_name


class Person(models.Model):
    collection_id = models.ForeignKey(Collection, on_delete=models.CASCADE)
    person_name = models.CharField(max_length=100, unique=True)


class PersonImage(models.Model):
    person_id = models.ForeignKey(Person, on_delete=models.CASCADE)
    image_file = models.FileField(blank=False,null=False)
    image_name = models.CharField(max_length=100, unique=True)
    upload_date = models.DateTimeField(auto_now_add=True,blank=True)
