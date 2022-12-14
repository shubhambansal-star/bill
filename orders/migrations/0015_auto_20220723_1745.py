# Generated by Django 3.2.7 on 2022-07-23 17:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0014_unloading_unloadingorders'),
    ]

    operations = [
        migrations.CreateModel(
            name='LoadingUnloading',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('genes', models.CharField(max_length=255)),
                ('vehicle_number', models.CharField(blank=True, max_length=255, null=True)),
                ('quantity', models.FloatField()),
                ('freight', models.FloatField(blank=True, null=True)),
                ('frieght_paid_at_loading', models.FloatField(blank=True, null=True)),
                ('remarks', models.CharField(blank=True, max_length=255, null=True)),
                ('unloaded', models.BooleanField(default=False)),
                ('loading_from', models.ManyToManyField(to='orders.OrderParty')),
            ],
        ),
        migrations.RemoveField(
            model_name='loading',
            name='loading_from',
        ),
        migrations.RemoveField(
            model_name='unloadingorders',
            name='sales_order',
        ),
        migrations.RemoveField(
            model_name='unloadingorders',
            name='unloading',
        ),
        migrations.AddField(
            model_name='loadingorders',
            name='loading_broker',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='broker', to='orders.orderparty'),
        ),
        migrations.AddField(
            model_name='loadingorders',
            name='loading_party',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='party', to='orders.orderparty'),
        ),
        migrations.AddField(
            model_name='loadingorders',
            name='quantity',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.DeleteModel(
            name='Unloading',
        ),
        migrations.DeleteModel(
            name='UnloadingOrders',
        ),
        migrations.AlterField(
            model_name='loadingorders',
            name='loading',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.loadingunloading'),
        ),
        migrations.DeleteModel(
            name='Loading',
        ),
    ]
