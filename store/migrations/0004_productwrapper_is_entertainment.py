# Generated by Django 4.1.2 on 2022-10-14 09:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_productwrapper_is_bestofferofwebsite_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='productwrapper',
            name='is_Entertainment',
            field=models.BooleanField(default=False),
        ),
    ]
