# Generated by Django 5.2.2 on 2025-06-16 07:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("patients", "0006_patient_patient_recordings"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="patient",
            name="patient_recordings",
        ),
    ]
