from django.urls import path

from django.http import HttpResponse

def index(response):
    return HttpResponse('Hello World')

url_patterns= [
    path('/gameBreakout', index, name='index')

]
