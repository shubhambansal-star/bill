# Generated by Django 3.2.7 on 2022-07-28 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0018_alter_loadingunloading_unloaded_to'),
    ]

    operations = [
        migrations.AddField(
            model_name='loadingorders',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='loadingunloading',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='orderparty',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='purchaseorder',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='salesorder',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='unloadingorders',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
