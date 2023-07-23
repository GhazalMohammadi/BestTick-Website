# Generated by Django 4.1.2 on 2022-10-31 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0030_productwrapper_product_categorytype_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_types', models.CharField(choices=[('BA', 'Banner'), ('SL', 'Slider'), ('TC', 'Topcommercial')], default='SL', max_length=2)),
                ('image_Location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='LocationOfImage', to='store.locationcategory')),
                ('image_ProductCategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='imageProductCategory', to='store.productcategory')),
            ],
            options={
                'verbose_name_plural': 'Images',
            },
        ),
    ]
