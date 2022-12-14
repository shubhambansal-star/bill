# Generated by Django 3.2.7 on 2022-07-05 13:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_alter_orderparty_party_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderparty',
            name='party_type',
            field=models.CharField(blank=True, choices=[('sales', 'sales'), ('purchase', 'purchase'), ('mandi-purchase', 'mandi-purchase'), ('mandi-sales', 'mandi-sales')], default='both', max_length=255, null=True),
        ),
        migrations.CreateModel(
            name='SalesOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sales_type', models.CharField(max_length=255)),
                ('date', models.DateField(blank=True, null=True)),
                ('genes', models.CharField(blank=True, max_length=255, null=True)),
                ('quantity', models.FloatField(blank=True, null=True)),
                ('unit', models.CharField(blank=True, max_length=255, null=True)),
                ('rate', models.FloatField(blank=True, null=True)),
                ('condition', models.CharField(blank=True, max_length=255, null=True)),
                ('po_number', models.CharField(blank=True, max_length=255, null=True)),
                ('remarks', models.CharField(blank=True, max_length=255, null=True)),
                ('pending', models.FloatField()),
                ('broker', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.broker')),
                ('party', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.orderparty')),
            ],
        ),
        migrations.CreateModel(
            name='Purchaseorder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('purchase_type', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('genes', models.CharField(blank=True, max_length=255, null=True)),
                ('quantity', models.FloatField(blank=True, null=True)),
                ('unit', models.CharField(blank=True, max_length=255, null=True)),
                ('rate', models.FloatField(blank=True, null=True)),
                ('condition', models.CharField(blank=True, max_length=255, null=True)),
                ('remarks', models.CharField(blank=True, max_length=255, null=True)),
                ('pending', models.FloatField()),
                ('broker', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.broker')),
                ('party', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.orderparty')),
            ],
        ),
    ]
