# Generated by Django 3.2.7 on 2022-06-14 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_auto_20220614_1136'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderparty',
            name='party_type',
            field=models.CharField(blank=True, choices=[('sale', 'sale'), ('purchase', 'purchase'), ('both', 'both')], max_length=255, null=True),
        ),
    ]
