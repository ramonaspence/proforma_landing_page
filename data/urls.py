from django.urls import path
from . import views


app_name = "data"


urlpatterns = [
    path('contacts/', views.ContactListCreateAPIView.as_view(), name="contacts"),
]