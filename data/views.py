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
        if os.stat('./data/data/data.csv').st_size > 0:
            df = pd.read_csv('./data/data/data.csv')
            vals = list(request.data.values())
            
            if vals[2:3] not in df.values:
                vals_dict = {
                'first_name': str(vals[0:1]), 
                'last_name': str(vals[1:2]),
                'email': str(vals[2:3]),
                'company': str(vals[3:4]),
                '# of locations': str(vals[4:]),
                }
                new_df = pd.DataFrame(vals_dict)
                new_df.to_csv('./data/data/data.csv', mode='a', header=False)
            else:
                pass
        elif os.stat('./data/data/data.csv').st_size == 0:
            vals = list(request.data.values())
            my_dict = {
                'first_name': str(vals[0:1]), 
                'last_name': str(vals[1:2]),
                'email': str(vals[2:3]),
                'company': str(vals[3:4]),
                '# of locations': str(vals[4:]),
                }
            df = pd.DataFrame(my_dict)
            print(df)
            df.to_csv('./data/data/data.csv',)

        # gauth = GoogleAuth()
        # gauth.LocalWebserverAuth() # Creates local webserver and auto handles authentication.

        gauth = GoogleAuth()
        # Try to load saved client credentials
        gauth.LoadCredentialsFile("./data/data/mycreds.txt")
        if gauth.credentials is None:
            # Authenticate if they're not there
            gauth.LocalWebserverAuth()
        elif gauth.access_token_expired:
            # Refresh them if expired
            gauth.Refresh()
        else:
            # Initialize the saved creds
            gauth.Authorize()
        # Save the current credentials to a file
        gauth.SaveCredentialsFile("./data/data/mycreds.txt")

        drive = GoogleDrive(gauth)

        # View all folders and file in your Google Drive
        fileList = drive.ListFile({'q': "'root' in parents and trashed=false"}).GetList()
        for file in fileList:
            # Get the ID that you want
            if(file['title'] == "data.csv"):
                fileID = file['id']

        file1 = drive.CreateFile({'id': fileID})
        file1.SetContentFile('./data/data/data.csv')
        file1.Upload()

        return super().create(request, *args, **kwargs)