from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view, schema
from rest_framework.response import Response
from rest_framework import status
from .models import ResumeModel
from .serializer import ResumeSerializer
import json


# Create your views here.

@api_view(['GET'])
def get_resume(request, id):
    resume_obj = ResumeModel.objects.filter(id=id).first()
    if not resume_obj:
        return Response('No data found!', status=status.HTTP_404_NOT_FOUND)
    serializer = ResumeSerializer(resume_obj)
    print(serializer.data)
    return Response(serializer.data)


@api_view(['POST'])
def create_resume(request):
    data = ResumeSerializer(data=request.data)
    if data.is_valid():
        data.save()
        return Response("Data Saved Successfully!", status.HTTP_201_CREATED)
    else:
        print(data)
        return Response("Invalid Format", status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_resume(request, id):
    check = ResumeModel.objects.check(id=id)
    if check:
        data = ResumeSerializer(data=request.data)
        if data.is_valid():
            data.update()
            return Response("Data Updated Successfully!", status.HTTP_200_OK)
        else:
            return Response("Invalid Schema!", status.HTTP_400_BAD_REQUEST)
    else:
        return Response("Data Does Not Exists!", status.HTTP_404_NOT_FOUND)


@api_view(['DELETE'])
def delete_resume(request, id):
    check = ResumeModel.objects.check(id=id)
    if check:
        ResumeModel.objects.filter(id=id).delete()
        return Response("Deleted Successfully!", status.HTTP_200_OK)
    else:
        return Response("Data Not Found!", status.HTTP_404_NOT_FOUND)
