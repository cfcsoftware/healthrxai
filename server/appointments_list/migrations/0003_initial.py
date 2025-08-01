# Generated by Django 5.2.2 on 2025-06-13 12:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("appointments_list", "0002_initial"),
        ("patients", "0001_initial"),
        ("staff_management", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="appointment",
            name="doctor",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="doctors",
                to="staff_management.employee",
            ),
        ),
        migrations.AddField(
            model_name="appointment",
            name="patient",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="patients",
                to="patients.patient",
            ),
        ),
    ]
