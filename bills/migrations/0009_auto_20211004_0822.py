# Generated by Django 3.2.7 on 2021-10-04 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bills', '0008_dara'),
    ]

    operations = [
        migrations.AlterField(
            model_name='billdetail',
            name='vehicle_no',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='dara',
            name='loading_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='dara',
            name='purchase_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]