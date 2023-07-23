from django.urls import reverse
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse , HttpResponseRedirect ,JsonResponse
from django.template import loader
from store.models import LocationCategory , ProductWrapper , ProductCategory ,TypeOfProductsSubCategory ,Image
from .basket import Basket
# Create your views here.
def ShowingBasketPage(request):
    template = loader.get_template('ShoppingCartPage.html')
    locations = LocationCategory.objects.all()
    categoryOfProductsSideMenu = ProductCategory.objects.all()

    context = {
        'mylocations':locations,
        'categoryOfProductsSideMenu':categoryOfProductsSideMenu,
    }
    return HttpResponse(template.render(context , request))

def basket_add (request):
    basket = Basket(request)
    if request.POST.get('action') == 'post' :
        product_id = int(request.POST.get('productid'))
        product = get_object_or_404( ProductWrapper , id = product_id )
        basket.add(product=product)
        response = JsonResponse({'test':'data'})
        return response

