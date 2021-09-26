# Generated by Django 3.2.7 on 2021-09-16 15:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bills', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='billdetail',
            name='bill_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='bills.billby'),
        ),
        migrations.AddField(
            model_name='billdetail',
            name='bill_to',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='bills.billto'),
        ),
    ]
