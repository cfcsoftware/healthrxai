from django.urls import path
from . views import *

urlpatterns = [
    path("", index, name="index"),
    # path("about", about, name="about"),
    # path("contact", contact, name="contact"),
    path("signup", signup, name="signup"),
    path("privacy", privacy, name="privacy"),
    path("terms_conditions", terms_conditions, name="terms_conditions"),
    
]