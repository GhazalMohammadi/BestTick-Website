# Generated by Django 4.1.2 on 2022-10-24 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0012_resrauranttype'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ResraurantType',
            new_name='RestaurantType',
        ),
        migrations.AlterModelOptions(
            name='restauranttype',
            options={'verbose_name_plural': 'restauranttype'},
        ),
    ]