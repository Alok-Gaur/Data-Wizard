from rest_framework import serializers
from .models import Resume_model


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume_model
        fields = '__all__'
