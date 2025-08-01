# Generated by Django 5.1.7 on 2025-06-26 12:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificate_module', '0003_initial'),
        ('patients', '0009_rename_social_security_number_patient_social_security_no'),
        ('staff_management', '0002_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BirthCertificate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patient_name', models.CharField(blank=True, max_length=255, null=True)),
                ('date_of_birth', models.DateField(blank=True, null=True)),
                ('place_of_birth', models.CharField(blank=True, max_length=255, null=True)),
                ('mother_name', models.CharField(blank=True, max_length=255, null=True)),
                ('father_name', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('birth_certificate', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('patient', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.patient')),
                ('tenant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='birth_certificates', to='users.tenant')),
            ],
            options={
                'verbose_name': 'Birth Certificate',
                'verbose_name_plural': 'Birth Certificates',
                'db_table': 'Birth-Certificates',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='DeathCertificate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patient_name', models.CharField(blank=True, max_length=255, null=True)),
                ('date_of_death', models.DateField(blank=True, null=True)),
                ('place_of_death', models.CharField(blank=True, max_length=255, null=True)),
                ('cause_of_death', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('death_certificate', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('patient', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.patient')),
                ('tenant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='death_certificates', to='users.tenant')),
            ],
            options={
                'verbose_name': 'Death Certificate',
                'verbose_name_plural': 'Death Certificates',
                'db_table': 'Death-Certificates',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='FitnessCertificate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctor_name', models.CharField(blank=True, max_length=20, null=True)),
                ('patient_mobile', models.CharField(blank=True, max_length=15, null=True)),
                ('patient_name', models.CharField(blank=True, max_length=255, null=True)),
                ('examination_date', models.DateField(blank=True, null=True)),
                ('fitness_status', models.CharField(blank=True, max_length=32, null=True)),
                ('remarks', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('fitness_certificate', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('doctor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='staff_management.employee')),
                ('patient', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.patient')),
                ('tenant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fitness_certificates', to='users.tenant')),
            ],
            options={
                'verbose_name': 'Fitness Certificate',
                'verbose_name_plural': 'Fitness Certificates',
                'db_table': 'Fitness-Certificates',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='MedicalCertificate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctor_name', models.CharField(blank=True, max_length=20, null=True)),
                ('patient_mobile', models.CharField(blank=True, max_length=15, null=True)),
                ('patient_name', models.CharField(blank=True, max_length=255, null=True)),
                ('examination_date', models.DateField(blank=True, null=True)),
                ('health_status', models.CharField(blank=True, max_length=32, null=True)),
                ('purpose', models.CharField(blank=True, max_length=10, null=True)),
                ('validity', models.CharField(blank=True, max_length=100, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('medical_certificate', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('doctor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='staff_management.employee')),
                ('patient', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.patient')),
                ('tenant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='medical_certificates', to='users.tenant')),
            ],
            options={
                'verbose_name': 'Medical Certificate',
                'verbose_name_plural': 'Medical Certificates',
                'db_table': 'Medical-Certificates',
                'ordering': ['-created_at'],
            },
        ),
    ]
