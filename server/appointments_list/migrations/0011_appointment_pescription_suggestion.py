# Generated by Django 5.2.2 on 2025-07-05 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("appointments_list", "0010_alter_appointment_soap_data"),
    ]

    operations = [
        migrations.AddField(
            model_name="appointment",
            name="pescription_suggestion",
            field=models.TextField(blank=True, null=True),
        ),
    ]
