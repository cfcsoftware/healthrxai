# Generated by Django 5.1.7 on 2025-06-26 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificate_module', '0004_birthcertificate_deathcertificate_fitnesscertificate_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='birthcertificate',
            name='city',
        ),
        migrations.RemoveField(
            model_name='deathcertificate',
            name='city',
        ),
        migrations.RemoveField(
            model_name='fitnesscertificate',
            name='city',
        ),
        migrations.RemoveField(
            model_name='medicalcertificate',
            name='city',
        ),
        migrations.AddField(
            model_name='birthcertificate',
            name='child_gender',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='birthcertificate',
            name='child_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
