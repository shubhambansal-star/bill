from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bills', '0002_auto_20210927_0805'),
    ]

    operations = [
        migrations.AddField(
            model_name='billby',
            name='invoices_no',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]