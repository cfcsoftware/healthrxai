# Generated by Django 5.2.2 on 2025-06-13 12:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("patients", "0002_initial"),
        ("staff_management", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Surgery",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("age", models.IntegerField(blank=True, null=True)),
                ("gender", models.CharField(blank=True, max_length=255, null=True)),
                ("assistant_surgeon_details", models.JSONField(default=[])),
                (
                    "anesthesiologist_name",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "surgery_type",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "surgery_code",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("surgery_description", models.TextField(blank=True, null=True)),
                (
                    "surgery_department",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("scheduled_datetime", models.DateTimeField(blank=True, null=True)),
                (
                    "expected_duration",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "surgery_room",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("pre_surgery_notes", models.TextField(blank=True, null=True)),
                ("post_surgery_notes", models.TextField(blank=True, null=True)),
                ("required_equipment", models.TextField(blank=True, null=True)),
                ("required_tests", models.TextField(blank=True, null=True)),
                ("medications_prescribed", models.TextField(blank=True, null=True)),
                ("follow_up_date", models.DateField(blank=True, null=True)),
                ("surgery_images", models.JSONField(default=[])),
                ("created_at", models.DateField(auto_now_add=True, null=True)),
                ("updated_at", models.DateField(auto_now=True, null=True)),
                (
                    "doctor",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="surgery",
                        to="staff_management.employee",
                    ),
                ),
                (
                    "patient",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="surgery",
                        to="patients.patient",
                    ),
                ),
            ],
            options={
                "db_table": "Surgery",
            },
        ),
    ]
