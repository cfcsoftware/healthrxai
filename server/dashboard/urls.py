from django.urls import path
from .views import *

urlpatterns = [
    path("dashboard/", dashboard, name="dashboard"),
    
    path("healthrx-chat/", healthrx_ai, name="healthrx_ai"),
    # path("healthrx-chat/<str:session_id>/", healthrx_ai, name="healthrx_ai_session"),
    path("get-history/<str:session_id>/", get_history_sessionwise, name="get_history_sessionwise"),
]
