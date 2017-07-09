from django.http import HttpResponse
from django.shortcuts import render_to_response,render

def hello(request):
    return render_to_response('welcomePage.html')