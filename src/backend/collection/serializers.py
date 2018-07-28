from rest_framework import serializers

from .models import Collection, Person, PersonImage


class CollectionSerializer(serializers.ModelSerializer):
    class Meta():
        model = Collection
        fields = ('collection_name','created_date')


class PersonSerializer(serializers.ModelSerializer):
    class Meta():
        model = Person
        fields = ('collection_id','person_name')


class PersonImageSerializer(serializers.ModelSerializer):
    class Meta():
        model = PersonImage
        fields = ('person_id','image_file','image_name')
    
