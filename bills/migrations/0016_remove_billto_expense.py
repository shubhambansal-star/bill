# Generated by Django 3.2.7 on 2022-06-12 13:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bills', '0015_auto_20220612_0851'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='billto',
            name='expense',
        ),
    ]
