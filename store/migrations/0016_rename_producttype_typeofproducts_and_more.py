# Generated by Django 4.1.2 on 2022-10-24 19:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0015_rename_restauranttype_producttype_delete_arttype_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ProductType',
            new_name='TypeOfProducts',
        ),
        migrations.AlterModelOptions(
            name='locationcategory',
            options={'verbose_name_plural': 'LocationCategories'},
        ),
        migrations.AlterModelOptions(
            name='typeofproducts',
            options={'verbose_name_plural': 'TypeOfProducts'},
        ),
    ]
