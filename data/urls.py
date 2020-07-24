from django.urls import path
from . import views


app_name = "data"


handler401 = views.handler401
hanlder403 = views.handler403
handler404 = views.handler404
handler500 = views.handler500



urlpatterns = [
    path('contacts/', views.ContactListCreateAPIView.as_view(), name="contacts"),
]