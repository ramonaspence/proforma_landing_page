from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    company = models.CharField(max_length = 255)
    locations = models.PositiveIntegerField()