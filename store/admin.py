from .models import ProductCategory , LocationCategory , ProductWrapper ,TypeOfProductsSubCategory ,Image,Cart,CartItem,Order,OrderItem
from django.contrib import admin

# Register your models here.

@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    prepopulated_fields = {'slug':('name',)}

@admin.register(LocationCategory)
class LocationCategoryAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    prepopulated_fields = {'slug':('name',)}

@admin.register(TypeOfProductsSubCategory)
class TypeOfProductsSubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    prepopulated_fields = {'slug':('name',)}

@admin.register(ProductWrapper)
class ProductWrapperAdmin(admin.ModelAdmin):
    categoryLocation = LocationCategory()
    list_display = ['title','old_Price','new_Price','tick_Presenter','create_Date','updated_Date','in_stock','is_active','is_in_bestTickOfToday','is_bestOfferOfWebsite','is_lastMinute','slug']
    list_filter = ['in_stock','is_active']
    list_editable = ['in_stock' , 'new_Price','old_Price' , 'is_in_bestTickOfToday','is_bestOfferOfWebsite','is_lastMinute']
    prepopulated_fields = {'slug':('title',)}
    # filter_horizontal=['product_category']

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id','image_types','image_Location']



class CartItemAdmin(admin.StackedInline):
    model=CartItem
    fields=['product','quantityOfProduct']
    extra=0

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display=['user']
    inlines=[CartItemAdmin]


class OrderItemAdmin(admin.StackedInline):
    model=OrderItem
    fields=['product','quantityOfProduct']
    extra=0

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display=['user']
    inlines=[OrderItemAdmin]