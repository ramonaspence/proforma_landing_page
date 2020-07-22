from rest_framework import generics, authentication
from .serializers import ContactSerializer
from .models import Contact
from django.conf import settings

import pandas as pd
import json
import os

from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive


class ContactListCreateAPIView(generics.ListCreateAPIView):
    authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


    def create(self, request, *args, **kwargs):
        ## add new entry to csv file
        if os.stat('data.csv').st_size > 0:
            df = pd.read_csv('data.csv')
            vals = list(request.data.values())
            
            if vals[2:3] not in df.values:
                vals_dict = {
                'first_name': vals[0:1], 
                'last_name': vals[1:2],
                'email': vals[2:3],
                'company': vals[3:4],
                'locations': vals[4:],
                }
                new_df = pd.DataFrame(vals_dict)
                new_df.to_csv('data.csv', mode='a', header=False)
            else:
                pass
        elif os.stat('data.csv').st_size == 0:
            vals = list(request.data.values())
            my_dict = {
                'first_name': vals[0:1], 
                'last_name': vals[1:2],
                'email': vals[2:3],
                'company': vals[3:4],
                'locations': vals[4:],
                }
            df = pd.DataFrame(my_dict)
            df.to_csv('data.csv', index=0)

        gauth = GoogleAuth()
        gauth.LocalWebserverAuth() # Creates local webserver and auto handles authentication.

        drive = GoogleDrive(gauth)

        file1 = drive.CreateFile()
        file1.SetContentFile('data.csv')
        file1.Upload()
        


        return super().create(request, *args, **kwargs)