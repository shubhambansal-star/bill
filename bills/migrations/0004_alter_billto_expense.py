# Generated by Django 3.2.7 on 2021-09-24 17:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bills', '0003_auto_20210924_0531'),
    ]

    operations = [
        migrations.AlterField(
            model_name='billto',
            name='expense',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='bills.expense'),
        ),
    ]
