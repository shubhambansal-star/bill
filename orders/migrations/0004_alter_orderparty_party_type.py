# Generated by Django 3.2.7 on 2022-06-29 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_orderparty_party_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderparty',
            name='party_type',
            field=models.CharField(blank=True, choices=[('sales', 'sales'), ('purchase', 'purchase'), ('mandi', 'mandi'), ('both', 'both')], default='both', max_length=255, null=True),
        ),
    ]
