from django.shortcuts import render, HttpResponse

# Create your views here.


def build(request, num):
    return HttpResponse("You selected the number {}".format(num))
