import uuid
from django.db import models


class Recording(models.Model):
   id = models.UUIDField(
       default=uuid.uuid4, editable=False, unique=True, primary_key=True)
   sound_url = models.URLField()

class Transcription(models.Model):
    id = models.UUIDField(
       default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    body = models.CharField(max_length=20000)
    summary = models.CharField(max_length=2000)
    recording = models.ForeignKey(Recording, on_delete=models.CASCADE)


   