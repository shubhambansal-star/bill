# Generated by Django 3.2.7 on 2022-07-10 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0012_loading_remarks'),
    ]

    operations = [
        migrations.AddField(
            model_name='loading',
            name='unloaded',
            field=models.BooleanField(default=False),
        ),
    ]
