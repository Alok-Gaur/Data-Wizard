from django.db import models

# Create your models here.
class ResumeData(models.Model):
    role = models.CharField(max_length=200, null=False)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    linkedin = models.URLField()
    github = models.URLField()
    other_links = models.TextField(max_length=500)
    skills = models.TextField()