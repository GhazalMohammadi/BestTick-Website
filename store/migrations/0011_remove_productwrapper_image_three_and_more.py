# Generated by Django 4.1.2 on 2022-10-21 16:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0010_productwrapper_image_three_productwrapper_image_two'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productwrapper',
            name='image_three',
        ),
        migrations.RemoveField(
            model_name='productwrapper',
            name='image_two',
        ),
    ]