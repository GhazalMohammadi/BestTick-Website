# Generated by Django 4.1.2 on 2022-10-21 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_productwrapper_link_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='productwrapper',
            name='image_three',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
        migrations.AddField(
            model_name='productwrapper',
            name='image_two',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
    ]
