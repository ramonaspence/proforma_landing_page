from rest_framework import generics, authentication, permissions
from rest_framework.decorators import permission_classes, authentication_classes
from .serializers import ContactSerializer
from .models import Contact
from django.conf import settings

from django.db import connection

import pandas as pd
import json
import os

from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive


class ContactListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    
    def create(self, request, *args, **kwargs):
        ## add new entry to csv file
        if os.stat('./data/data/data.csv').st_size > 0:
            df = pd.read_csv('./data/data/data.csv')
            vals = list(request.data.values())
            if vals[2:3] not in df.values:
                vals_list = [
                    vals[0:1],
                    vals[1:2],
                    vals[2:3],
                    vals[3:4],
                    vals[4:],
                ]
                print(vals)
                vals_dict = {
                'first_name': str(vals[0:1])[2:-2], 
                'last_name': str(vals[1:2])[2:-2],
                'email': str(vals[2:3])[2:-2],
                'company': str(vals[3:4])[2:-2],
                '# of locations': str(vals[4:])[2:-2],
                }
                print(vals_dict)
                new_df = pd.DataFrame(data = [vals_dict])
                # new_df = pd.Dataframe.from_dict(vals_dict, index=)
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
            df = pd.DataFrame(my_dict, index=[0])
            df.to_csv('./data/data/data.csv', mode='w')


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

        if len(fileList) > 0:
            for file in fileList:
                # Get the ID that you want
                if(file['title'] == "contacts"):
                    fileID = file['id']
                    file1 = drive.CreateFile({'id': fileID})
                    file1.SetContentFile('./data/data/data.csv')
                    file1.Upload()
        else:
            file1 = drive.CreateFile({'title': 'contacts'})
            file1.SetContentFile('./data/data/data.csv')
            file1.Upload()

        return super().create(request, *args, **kwargs)

def handler403(request):
    return render(request, '403.html', status=403)

def handler401(request):
    return render(request, '401.html', status=401)

def handler404(request, exception):
    return render(request, '404.html', status=404)

def handler500(request):
    return render(request, '500.html', status=500)