from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.models import User
import math

# Create your models here.
class ProductCategory(models.Model):
    name = models.CharField(max_length=255 , db_index =True)
    slug = models.SlugField(max_length = 255 , unique=True)
    image = models.ImageField(upload_to='images/')

    class Meta():
        verbose_name_plural = 'productcategories'

    def __str__(self):
        return self.name


class LocationCategory(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255 , unique=True)

    class Meta():
        verbose_name_plural = 'LocationCategories'

    def __str__(self):
        return self.name


class TypeOfProductsSubCategory(models.Model):
    #Foreign Key
    product_MainCategoryKey = models.ForeignKey( ProductCategory , related_name = 'ProductSubCategory' , on_delete = models.CASCADE , blank=True , null=True)
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255 , unique=True)

    class Meta():
        verbose_name_plural = 'TypeOfProductsSubCategory'

    def __str__(self):
        return self.name



class ProductWrapper(models.Model):
    #Foreign Key
    product_category = models.ForeignKey( ProductCategory , related_name = 'Product' , on_delete=models.CASCADE , default=3)
    location_category = models.ForeignKey( LocationCategory , related_name='ProductLocation' , on_delete=models.CASCADE)
    created_by = models.ForeignKey( User , related_name='productCreator' , on_delete = models.CASCADE)
    product_categorytype = models.ForeignKey( TypeOfProductsSubCategory , related_name='TypeOfProductsSubCategory' , on_delete = models.CASCADE , blank=True , null=True)

    #Attributes
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='images/')
    old_Price = models.DecimalField(max_digits = 7 , decimal_places = 3)
    new_Price = models.DecimalField(max_digits = 7 , decimal_places = 3)
    tick_Presenter = models.CharField(max_length=255 , default='Admin' )
    create_Date = models.DateTimeField(auto_now_add=True)
    updated_Date = models.DateTimeField(auto_now = True)
    slug = models.SlugField(max_length=255)
    timer_ForSales = models.DateField()
    location = models.TextField(blank=True)
    in_stock = models.BooleanField(default = True)
    is_active = models.BooleanField(default = True)
    is_in_bestTickOfToday = models.BooleanField(default = False)
    is_bestOfferOfWebsite = models.BooleanField(default = False)
    is_lastMinute = models.BooleanField(default=False)
    link_Address = models.TextField(blank=True)
    class Meta():
        verbose_name_plural = 'ProductsWrapper'
        ordering = ('-create_Date',)


    def calculatingSalesPercent(self) :
        salesPercent = math.ceil(((self.old_Price - self.new_Price) * 100 ) / self.old_Price)
        return salesPercent
    
    def __str__(self):
        return self.title



class Image(models.Model):
    #Foreign Keys
    image_Location = models.ForeignKey(LocationCategory , related_name='LocationOfImage' , on_delete = models.CASCADE )
    image_ProductCategory = models.ForeignKey(ProductCategory , related_name='imageProductCategory' , on_delete = models.CASCADE)

    class TypeImages(models.TextChoices):
        BANNER = 'BA', _('Banner')
        SLIDER = 'SL', _('Slider')
        TOPCOMMERCIAL = 'TC', _('Topcommercial')
        TOPHIT = 'TH' , _('Tophit')

    image_types = models.CharField(
        max_length=2,
        choices=TypeImages.choices,
        default=TypeImages.SLIDER,
    )
    image = models.ImageField(upload_to='images/' , default='mypic.jpg')

    class Meta():
        verbose_name_plural = 'Images'

   

class Cart(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)


class CartItem(models.Model):
    cart=models.ForeignKey(Cart,on_delete=models.CASCADE)
    product=models.ForeignKey(ProductWrapper,on_delete=models.CASCADE)
    quantityOfProduct=models.IntegerField(default=1)


class Order(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)


class OrderItem(models.Model):
    order=models.ForeignKey(Order,on_delete=models.CASCADE)
    product=models.ForeignKey(ProductWrapper,on_delete=models.CASCADE)
    quantityOfProduct=models.IntegerField()



