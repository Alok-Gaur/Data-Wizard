from rest_framework import serializers
from .models import ResumeModel


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeModel
        fields = '__all__'
