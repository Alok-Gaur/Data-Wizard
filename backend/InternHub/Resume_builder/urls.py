from django.urls import path
from . import views
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('get-resume/<int:num>', views.get_resume), 
    path('create-resume/<int:num>', views.create_resume)
]
