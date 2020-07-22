import os
import logging

from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings

class IndexView(View):
    """
    """

    def get(self, request, *args, **kwargs):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of this app not found')
            return HttpResponse('Please',
                status = 501,
            )
