from rest_framework import generics
from .serializers import ContactSerializer
from .models import Contact
from django.conf import settings

import pandas as pd
import json
import os


class ContactListCreateAPIView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        # This section of this method takes the input data to format it and send it to a .csv file

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


        return super().create(request, *args, **kwargs)