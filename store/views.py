from django.urls import reverse
from django.shortcuts import get_object_or_404, render , redirect
from django.http import HttpResponse , HttpResponseRedirect
from django.template import loader
from .models import LocationCategory , ProductWrapper , ProductCategory ,TypeOfProductsSubCategory ,Image,Cart,CartItem,Order,OrderItem
from .forms import CreateUserForm
#Import Some pack For Login & Register
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate , login , logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User



# Function For Making Product Boxes
def makingItemsOfGridBox(productList , containerlist , howManyItemShouldCreate , starterOfItems):
    counterOfProduct= starterOfItems
    if len(productList) >= howManyItemShouldCreate:
        while counterOfProduct< howManyItemShouldCreate:
            containerlist.append(productList[counterOfProduct])
            counterOfProduct += 1
    else :
        while counterOfProduct< len(productList):
            containerlist.append(productList[counterOfProduct])
            counterOfProduct += 1

# Function For Three Counter
def threeCounter(Imagesall):
        counter = 0
        containerOfPic = []
        if len(Imagesall) >= 3 :
            while counter < 3 :
                containerOfPic.append(Imagesall[counter])
                counter += 1
            return containerOfPic
        else :
            while counter < len(Imagesall) :
                containerOfPic.append(Imagesall[counter])
                counter += 1
            return containerOfPic


# Showing Main Page

def renderingMainPage(request ):
    template = loader.get_template('MainWebPage.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()

   
    # Making Boxes Of Datas :
    # FOR BESTOFFER OF WEBSITE
    filteredProducts = ProductWrapper.objects.filter(is_bestOfferOfWebsite = True)
    filteredProductsWith_BestOffer = []
    makingItemsOfGridBox(filteredProducts,filteredProductsWith_BestOffer , 4 , 0)

    #FOR RESTAURANT PART
    counterOfRestaurantProduct = []
    myRestuarantProducts = ProductWrapper.objects.filter(product_category__id = 3)
    counterOfRestaurantProduct.append(len(myRestuarantProducts))
    filteredProductsWith_RestaurantCategoryTopItem = []
    filteredProductsWith_RestaurantCategory=[]
    makingItemsOfGridBox(myRestuarantProducts , filteredProductsWith_RestaurantCategoryTopItem , 1 , 0)
    makingItemsOfGridBox(myRestuarantProducts , filteredProductsWith_RestaurantCategory , 4 , 1)

    #FOR ENTETAINMENT
    counterOfEntertainmentProduct = []
    myEntertainmentProducts = ProductWrapper.objects.filter(product_category__id = 4)
    counterOfEntertainmentProduct.append(len(myEntertainmentProducts))
    filteredProductsWith_EntertainmentCategoryTopItem = []
    filteredProductsWith_EntertainmentCategory=[]
    makingItemsOfGridBox(myEntertainmentProducts , filteredProductsWith_EntertainmentCategoryTopItem , 1 , 0)
    makingItemsOfGridBox(myEntertainmentProducts , filteredProductsWith_EntertainmentCategory , 4 , 1)

    #FOR BESTTICK OF TODAY
    counterOfBestTickOfTodayProduct = []
    filteredProducts = ProductWrapper.objects.filter(is_in_bestTickOfToday = True)
    counterOfBestTickOfTodayProduct.append(len(filteredProducts))
    filteredProductsWith_BestTickOfToday = []
    makingItemsOfGridBox(filteredProducts,filteredProductsWith_BestTickOfToday , 3 , 0)

    #For Slider
    Imagesall = Image.objects.filter(image_types = 'SL')
    threeLastSliderImg = threeCounter(Imagesall)

    #For Top Hits
    Imagesall = Image.objects.filter(image_types = 'TH')
    threeTopHitsImg = threeCounter(Imagesall)

    #For Banner Restaurant
    Imagesall = Image.objects.filter(image_types = 'BA')
    bannersOfRestaurant = []
    myCounter = 0
    if len(Imagesall) >= 1 :
         for item in Imagesall:
            if item.image_ProductCategory.id == 3 :
                bannersOfRestaurant.append(Imagesall[myCounter])
                myCounter += 1
            else :
                myCounter += 1
    else :
        pass
    
    myCounter = 0
    bannerRestaurant = []
    if len(bannersOfRestaurant) >= 1 :
        while myCounter < 1 :
            bannerRestaurant.append(bannersOfRestaurant[myCounter])
            myCounter += 1
    else :
        pass

    #For Banner Entertainment
    Imagesall = Image.objects.filter(image_types = 'BA')
    bannersOfEntertainment = []
    myCounter = 0
    if len(Imagesall) >= 1 : 
        for item in Imagesall:
            if item.image_ProductCategory.id == 4 :
                bannersOfEntertainment.append(Imagesall[myCounter])
                myCounter += 1
            else :
                myCounter += 1
    else :
        pass
    
    myCounter = 0
    bannerEntertainment = []
    if len(bannersOfEntertainment) >= 1:
        while myCounter < 1 :
            bannerEntertainment.append(bannersOfEntertainment[myCounter])
            myCounter += 1
    else :
        pass

    #For Top Commercial
    Imagesall = Image.objects.filter(image_types = 'TC')
    picOfTopCommercial = []
    myCounter = 0
    if len(Imagesall) >= 1 :
        while myCounter < 1:
            picOfTopCommercial.append(Imagesall[myCounter])
            myCounter += 1 
    else :
        pass


    contex = {
    
        'mylocations': locations,
        'categoryOfProducts':categoryOfProducts,
        #BestOffer
        'filteredProductsWith_BestOffer':filteredProductsWith_BestOffer,
        #Restaurant
        'filteredProductsWith_RestaurantCategoryTopItem':filteredProductsWith_RestaurantCategoryTopItem,
        'filteredProductsWith_RestaurantCategory':filteredProductsWith_RestaurantCategory,
        #Entertainment
        'filteredProductsWith_EntertainmentCategoryTopItem':filteredProductsWith_EntertainmentCategoryTopItem,
        'filteredProductsWith_EntertainmentCategory':filteredProductsWith_EntertainmentCategory,
        #BestTickOfToday
        'filteredProductsWith_BestTickOfToday':filteredProductsWith_BestTickOfToday,
        #Counter Of Each Type Of Product
        'counterOfRestaurantProduct':counterOfRestaurantProduct,
        'counterOfEntertainmentProduct':counterOfEntertainmentProduct,
        'counterOfBestTickOfTodayProduct':counterOfBestTickOfTodayProduct,
        #Pic Of TopCommercial
        'picOfTopCommercial':picOfTopCommercial,
        #Pic Of Slider 
        'threeLastSliderImg':threeLastSliderImg,
        #Pic Of Top Hits
        'threeTopHitsImg':threeTopHitsImg,
        #Banner Of Restaurant
        'bannerRestaurant':bannerRestaurant,
        #Banner Of Entertainment
        'bannerEntertainment':bannerEntertainment,
        

    }
    return HttpResponse(template.render(contex,request))


# Showing Individual Product (Product Page)
def indivitualProduct(request , slug):
    product = get_object_or_404( ProductWrapper, slug = slug , in_stock=True )
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    template = loader.get_template('ProductPage.html')

    #For Top Commercial
    allImages = Image.objects.all()
    #Pics Of Page (TC)
    topCommercialPics = []
    myCounter = 0
    if len(allImages) >= 1:
        for item in allImages :
            if item.image_types == 'TC':
                topCommercialPics.append(allImages[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else :
        pass
    #TC
    topCommercial = []
    myCounter = 0 
    if len(topCommercialPics):
        while myCounter < 1:
            topCommercial.append(topCommercialPics[myCounter])
            myCounter += 1


    if request.method=="POST":
        if request.POST.get('add')!=None:
            if request.user.is_authenticated:
                cart=Cart.objects.get(user=request.user)
                cartitem=CartItem(cart=cart,product=product)
                for item in cart.cartitem_set.all():
                    if item.product==product:
                        cartitem=CartItem.objects.get(product=item.product)
                        cartitem.quantityOfProduct+=1
                cartitem.save()
            else:
                return redirect('/customer/login')

        


            return redirect('/Ticket/'+product.slug)

    
    context = {
        'product':product,
        'locations':locations,
        'categoryOfProducts':categoryOfProducts,
        'mainLocation':'مکان شما',
        'topCommercial':topCommercial,
    }
    return HttpResponse(template.render(context , request))

# Showing Individual Product (Product Page)
def indivitualProductWithLocation(request , slug , category_location_slug):
    product = get_object_or_404( ProductWrapper, slug = slug , in_stock=True )
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    template = loader.get_template('ProductPage.html')

    mainLocation = get_object_or_404(LocationCategory ,  slug = category_location_slug )
    mainLocationEnglish = category_location_slug

    if request.method=="POST":
        if request.POST.get('add')!=None:
            if request.user.is_authenticated:
                cart=Cart.objects.get(user=request.user)
                cartitem=CartItem(cart=cart,product=product)
                for item in cart.cartitem_set.all():
                    if item.product==product:
                        cartitem=CartItem.objects.get(product=item.product)
                        cartitem.quantityOfProduct+=1
                cartitem.save()
            else:
                return redirect('/'+category_location_slug+'/customer/login')


    #For Top Commercial
    allImages = Image.objects.filter(image_Location__name = mainLocation)
    #Pics Of Page (TC)
    topCommercialPics = []
    myCounter = 0
    if len(allImages) >= 1:
        for item in allImages :
            if item.image_types == 'TC':
                topCommercialPics.append(allImages[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else :
        pass
    #TC
    topCommercial = []
    myCounter = 0 
    if len(topCommercialPics):
        while myCounter < 1:
            topCommercial.append(topCommercialPics[myCounter])
            myCounter += 1

    
    context = {
        'product':product,
        'locations':locations,
        'categoryOfProducts':categoryOfProducts,
        'mainLocation' : mainLocation ,
        'mainLocationEnglish':mainLocationEnglish,
        'topCommercial':topCommercial,
    }
    return HttpResponse(template.render(context , request))


# Showing Products with location Filtering
def showMainPageWithLocationCategory(request , category_location_slug):
    location_Category_filter = get_object_or_404(LocationCategory ,  slug = category_location_slug ) 
    products = ProductWrapper.objects.filter(location_category__name = location_Category_filter)
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    template = loader.get_template('CategoryLocationMainWebPage.html')
    imageall = Image.objects.filter(image_Location__name = location_Category_filter)

    mainLocation = location_Category_filter
    mainLocationEnglish = category_location_slug
    # Making Boxes Of Datas :
    # FOR BESTOFFER OF WEBSITE
    filteredProducts = []
    myCounter = 0
    for item in products:
        if item.is_bestOfferOfWebsite == True :
            filteredProducts.append(products[myCounter])
            myCounter += 1
        else:
            myCounter += 1

    filteredProductsWith_BestOffer = []
    makingItemsOfGridBox(filteredProducts,filteredProductsWith_BestOffer , 4 , 0)
    
    #FOR RESTAURANT PART
    counterOfRestaurantProduct = []
    myRestuarantProducts = []
    myCounter = 0 
    for item in products:
        if item.product_category.id == 3 :
            myRestuarantProducts.append(products[myCounter])
            myCounter += 1
        else:
            myCounter += 1

    counterOfRestaurantProduct.append(len(myRestuarantProducts))
    filteredProductsWith_RestaurantCategoryTopItem = []
    filteredProductsWith_RestaurantCategory=[]
    makingItemsOfGridBox(myRestuarantProducts , filteredProductsWith_RestaurantCategoryTopItem , 1 , 0)
    makingItemsOfGridBox(myRestuarantProducts , filteredProductsWith_RestaurantCategory , 4 , 1)
    
    #FOR ENTETAINMENT
    counterOfEntertainmentProduct=[]
    myEntertainmentProducts = []
    myCounter = 0 
    for item in products:
        if item.product_category.id == 4 :
            myEntertainmentProducts.append(products[myCounter])
            myCounter += 1
        else:
            myCounter += 1

    counterOfEntertainmentProduct.append(len(myEntertainmentProducts))
    filteredProductsWith_EntertainmentCategoryTopItem = []
    filteredProductsWith_EntertainmentCategory=[]
    makingItemsOfGridBox(myEntertainmentProducts , filteredProductsWith_EntertainmentCategoryTopItem , 1 , 0)
    makingItemsOfGridBox(myEntertainmentProducts , filteredProductsWith_EntertainmentCategory , 4 , 1)

    #FOR BESTTICK OF TODAY
    counterOfBestTickOfTodayProduct=[]
    filteredProducts = []
    myCounter = 0 
    for item in products:
        if item.is_in_bestTickOfToday == True :
            filteredProducts.append(products[myCounter])
            myCounter += 1
        else:
            myCounter += 1

    counterOfBestTickOfTodayProduct.append(len(filteredProducts))
    filteredProductsWith_BestTickOfToday = []
    makingItemsOfGridBox(filteredProducts,filteredProductsWith_BestTickOfToday , 3 , 0)

    #Pic Of LocationCategory Page (TC / SL / TH / BA)
    topCommercials = []
    PicOfSlider = []
    topHits = []
    bannersOfRestaurant = []
    bannersOfEntertainment = []
    myCounter = 0

    if len(imageall) >= 1 :
        for item in imageall:
            if item.image_types == 'SL':
                PicOfSlider.append(imageall[myCounter])
                myCounter += 1
            elif item.image_types == 'TH':
                topHits.append(imageall[myCounter])
                myCounter += 1
            elif item.image_types == 'BA':
                if item.image_ProductCategory.id == 3 :
                    bannersOfRestaurant.append(imageall[myCounter])
                    myCounter += 1
                elif item.image_ProductCategory.id == 4 :
                    bannersOfEntertainment.append(imageall[myCounter])
                    myCounter += 1
            elif item.image_types == 'TC': 
                topCommercials.append(imageall[myCounter])
                myCounter += 1
    else:
        pass

    #Pics Of Slider
    threePicOfSlider = threeCounter(PicOfSlider)
    #Pics Of TopHit
    threePicOfTopHits = threeCounter(topHits)
    #TopCommercial
    picOfTopCommercial = []
    myCounter = 0
    if len(topCommercials):
        while myCounter < 1:
            picOfTopCommercial.append(topCommercials[myCounter])
            myCounter += 1 
    else:
        pass
    
    #Banner Of Restaurant
    bannerOfRestaurant = []
    myCounter = 0
    if len(bannersOfRestaurant) >= 1:
        while myCounter < 1:
            bannerOfRestaurant.append(bannersOfRestaurant[myCounter])
            myCounter += 1 
    else :
        pass

    #Banner Of Entertainment
    bannerOfEntertainment = []
    myCounter = 0
    if len(bannersOfEntertainment):
        while myCounter < 1:
            bannerOfEntertainment.append(bannersOfEntertainment[myCounter])
            myCounter += 1 
    else :
        pass

        
    contex = {
        'location_Category_filter':location_Category_filter,
        'mylocations': locations,
        'categoryOfProducts':categoryOfProducts,
        'mainLocation':mainLocation,
        'mainLocationEnglish':mainLocationEnglish,
        #BestOffer
        'filteredProductsWith_BestOffer':filteredProductsWith_BestOffer,
        #Restaurant
        'filteredProductsWith_RestaurantCategoryTopItem':filteredProductsWith_RestaurantCategoryTopItem,
        'filteredProductsWith_RestaurantCategory':filteredProductsWith_RestaurantCategory,
        #Entertainment
        'filteredProductsWith_EntertainmentCategoryTopItem':filteredProductsWith_EntertainmentCategoryTopItem,
        'filteredProductsWith_EntertainmentCategory':filteredProductsWith_EntertainmentCategory,
        #BestTickOfToday
        'filteredProductsWith_BestTickOfToday':filteredProductsWith_BestTickOfToday,
        #Counter Of Each Type Of Product
        'counterOfRestaurantProduct':counterOfRestaurantProduct,
        'counterOfEntertainmentProduct':counterOfEntertainmentProduct,
        'counterOfBestTickOfTodayProduct':counterOfBestTickOfTodayProduct,
        #Pic Of TopCommercial
        'picOfTopCommercial':picOfTopCommercial,
        #Pic Of Slider 
        'threePicOfSlider':threePicOfSlider,
        #Pic Of TopHit
        'threePicOfTopHits':threePicOfTopHits,
        #Banner Of Restaurant
        'bannerOfRestaurant':bannerOfRestaurant,
        #Banner Of Entertainment
        'bannerOfEntertainment':bannerOfEntertainment,

    }
    return HttpResponse(template.render(contex,request))


# SignIn Page
def renderingSignInPage(request):
    template = loader.get_template('login.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()

    #For Top Commercial
    Imagesall = Image.objects.filter(image_types = 'TC')
    picOfTopCommercial = []
    myCounter = 0
    if len(Imagesall) >= 1 :
        while myCounter < 1:
            picOfTopCommercial.append(Imagesall[myCounter])
            myCounter += 1 
    else :
        pass

    #User Auth
    if request.method == 'POST' :
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate( request , username=username , password=password )
        if user is not None :
            login(request , user)
            return HttpResponseRedirect('/')
        else:
            messages.info(request , "نام کاربری یا رمز عبور اشتباه میباشد .")
    

    context = {
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        #Pic Of Top Commercial
        'picOfTopCommercial':picOfTopCommercial,
        'mainLocation':'مکان شما',
    }
    return HttpResponse(template.render(context , request))

def renderingSignInPageWithLocation(request , category_location_slug):
    template = loader.get_template('login.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    mainLocation = get_object_or_404(LocationCategory ,  slug = category_location_slug ) 
    mainLocationEnglish = category_location_slug

    #For Top Commercial
    allImages = Image.objects.filter(image_Location__name = mainLocation)
    #Pics Of Page (SL , TC)
    topCommercialPics = []
    myCounter = 0
    if len(allImages) >= 1:
        for item in allImages :
            if item.image_types == 'TC':
                topCommercialPics.append(allImages[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else :
        pass


    #TC
    topCommercial = []
    myCounter = 0 
    if len(topCommercialPics):
        while myCounter < 1:
            topCommercial.append(topCommercialPics[myCounter])
            myCounter += 1

    #User Auth
    if request.method == 'POST' :
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate( request , username=username , password=password )
        if user is not None :
            login(request , user)
            return HttpResponseRedirect(f'/{mainLocationEnglish}/' )
        else:
            messages.info(request , "نام کاربری یا رمز عبور اشتباه میباشد .")

    context = {
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        #Pic Of Top Commercial
        'picOfTopCommercial':topCommercial,
        'mainLocation':mainLocation,
        'mainLocationEnglish':mainLocationEnglish,
    }
    return HttpResponse(template.render(context , request))


# SignUp Page
def renderingSignUpPage(request):
    form = CreateUserForm()
    template = loader.get_template('register.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    mainLocation = 'مکان شما'

    

    #For Top Commercial
    Imagesall = Image.objects.filter(image_types = 'TC')
    picOfTopCommercial = []
    myCounter = 0
    if len(Imagesall) >= 1 :
        while myCounter < 1:
            picOfTopCommercial.append(Imagesall[myCounter])
            myCounter += 1 
    else :
        pass

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            cart=Cart(user=User.objects.last())
            cart.save()
            messages.success(request , 'ثبت نام با موفقیت انجام شد')
            return HttpResponseRedirect('/customer/login')



    context = {
        'form':form,
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        #Pic Of Top Commercial
        'picOfTopCommercial':picOfTopCommercial,
        'mainLocation':mainLocation,
    }
    return HttpResponse(template.render(context , request))


def renderingSignUpPageWithLocation(request , category_location_slug ):
    form = CreateUserForm()
    template = loader.get_template('register.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    mainLocation = get_object_or_404(LocationCategory ,  slug = category_location_slug ) 
    mainLocationEnglish = category_location_slug

    #For Top Commercial
    allImages = Image.objects.filter(image_Location__name = mainLocation)
    #Pics Of Page (TC)
    topCommercialPics = []
    myCounter = 0
    if len(allImages) >= 1:
        for item in allImages :
            if item.image_types == 'TC':
                topCommercialPics.append(allImages[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else :
        pass
    #TC
    topCommercial = []
    myCounter = 0 
    if len(topCommercialPics):
        while myCounter < 1:
            topCommercial.append(topCommercialPics[myCounter])
            myCounter += 1

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            cart=Cart(user=User.objects.last())
            cart.save()
            messages.success(request , 'ثبت نام با موفقیت انجام شد')
            return HttpResponseRedirect(f'/{mainLocationEnglish}/customer/login')

    context = {
        'form':form,
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        'mainLocation': mainLocation,
        'mainLocationEnglish':mainLocationEnglish,
        #Pic Of Top Commercial
        'picOfTopCommercial':topCommercial,
    }
    return HttpResponse(template.render(context , request))

#LogOut Function
def logoutUserWithOutLocation(request):
    logout(request)
    return HttpResponseRedirect('/customer/login')

def logoutUserWithLocation(request , category_location_slug):
    logout(request)
    return HttpResponseRedirect('/'+category_location_slug+'/customer/login')

#UserPanel Function
def userPanelWithOutLocation(request):
    template = loader.get_template('UserPanelPage.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    mainLocation = "مکان شما"
    mainLocationEnglish=''

    #For Top Commercial
    Imagesall = Image.objects.filter(image_types = 'TC')
    picOfTopCommercial = []
    myCounter = 0
    if len(Imagesall) >= 1 :
        while myCounter < 1:
            picOfTopCommercial.append(Imagesall[myCounter])
            myCounter += 1 
    else :
        pass

    context = {
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        'mainLocation':mainLocation,
        'picOfTopCommercial':picOfTopCommercial,
        'mainLocationEnglish':mainLocationEnglish,
    }

    return HttpResponse(template.render(context , request))


def userPanelWithLocation(request,category_location_slug):
    template = loader.get_template('UserPanelPage.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    mainLocationEnglish = category_location_slug
    mainLocation = get_object_or_404(LocationCategory ,  slug = category_location_slug ) 

    #For Top Commercial
    allImages = Image.objects.filter(image_Location__name = mainLocation)
    #Pics Of Page (TC)
    topCommercialPics = []
    myCounter = 0
    if len(allImages) >= 1:
        for item in allImages :
            if item.image_types == 'TC':
                topCommercialPics.append(allImages[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else :
        pass
    #TC
    topCommercial = []
    myCounter = 0 
    if len(topCommercialPics):
        while myCounter < 1:
            topCommercial.append(topCommercialPics[myCounter])
            myCounter += 1

    context = {
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        'mainLocationEnglish':mainLocationEnglish,
        'mainLocation':mainLocation,
        'picOfTopCommercial':topCommercial,
    }
    return HttpResponse(template.render(context , request))




# Rendering CategoryOfMenu Page (Without Location Category)
def renderingPageWithProductCategory(request , category_product_slug):
    template = loader.get_template('CategoryOfMenu.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    product_Category_Type = get_object_or_404(ProductCategory , slug = category_product_slug)
    Imageall = Image.objects.filter( image_ProductCategory__name = product_Category_Type )
    createTitleOfCategory = product_Category_Type.name

    if product_Category_Type.slug == 'Restaurant':
        myProducts = ProductWrapper.objects.filter(product_category__id = 3)
        mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 3)
    elif product_Category_Type.slug == 'Entertainment':
        myProducts = ProductWrapper.objects.filter(product_category__id = 4)
        mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 4)
    elif product_Category_Type.slug == 'Exercise':
        myProducts = ProductWrapper.objects.filter(product_category__id = 5)
        mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 5)
    elif product_Category_Type.slug == 'Art':
        myProducts = ProductWrapper.objects.filter(product_category__id = 6)
        mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 6)
    elif product_Category_Type.slug == 'Services':
        myProducts = ProductWrapper.objects.filter(product_category__id = 7)
        mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 7)

    #Pic Of Sliders
    picturesOfSlider = []
    myCounter = 0
    if len(Imageall) >= 1:
        for item in Imageall:
            if item.image_types == 'SL' :
                picturesOfSlider.append(Imageall[myCounter])
                myCounter += 1
            else :
                myCounter += 1
    else :
        pass
    threePicOfSlider = threeCounter(picturesOfSlider)
        

    #For Top Commercial
    Imagesall = Image.objects.filter(image_types = 'TC')
    picOfTopCommercial = []
    myCounter = 0
    if len(Imagesall) >= 1 :
        while myCounter < 1:
            picOfTopCommercial.append(Imagesall[myCounter])
            myCounter += 1 
    else :
        pass


    context = {
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        'myProducts':myProducts,
        'mySubFilters':mySubFilters,
        #Top Commercial
        'picOfTopCommercial':picOfTopCommercial,
        #Pics Of Slider
        'threePicOfSlider' : threePicOfSlider,
        #Create Title Of Category
        'createTitleOfCategory' :createTitleOfCategory,
    }
    return HttpResponse(template.render(context,request))


def renderingPageWithBestTickOfTodayCategory(request):
    template = loader.get_template('CategoryOfMenuDifferent.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    myProducts = ProductWrapper.objects.filter(is_in_bestTickOfToday = True)

    #For Top Commercial
    Imagesall = Image.objects.filter(image_types = 'TC')
    picOfTopCommercial = []
    myCounter = 0
    if len(Imagesall) >= 1 :
        while myCounter < 1:
            picOfTopCommercial.append(Imagesall[myCounter])
            myCounter += 1 
    else :
        pass

    #Pics Of Slider
    Imageall = Image.objects.filter(image_types = 'SL')
    threePicsOfSlider = threeCounter(Imageall)

    titleOfCategory = 'بست تیک های امروز'
    context = {
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        'myProducts':myProducts,
        #Pics Of Slider
        'threePicsOfSlider':threePicsOfSlider,
        'picOfTopCommercial':picOfTopCommercial,
        'titleOfCategory':titleOfCategory,
    }
    return HttpResponse(template.render(context , request))


def renderingPageWithLastMinuteCategory(request):
    template = loader.get_template('CategoryOfMenuDifferent.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    myProducts = ProductWrapper.objects.filter(is_lastMinute = True)

    #For Top Commercial
    Imagesall = Image.objects.filter(image_types = 'TC')
    picOfTopCommercial = []
    myCounter = 0
    if len(Imagesall) >= 1 :
        while myCounter < 1:
            picOfTopCommercial.append(Imagesall[myCounter])
            myCounter += 1 
    else :
        pass

    #Pics Of Slider
    Imageall = Image.objects.filter(image_types = 'SL')
    threePicsOfSlider = threeCounter(Imageall)

    titleOfCategory = 'بست تیک های لحظه آخری'

    context = {
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        'myProducts':myProducts,
        #Pics Of Slider
        'threePicsOfSlider':threePicsOfSlider,
        'titleOfCategory':titleOfCategory,
        'picOfTopCommercial':picOfTopCommercial,
    }

    return HttpResponse(template.render(context,request))



# Rendering CategoryOfMenu Page (Without Location with SubFilters)
# Rendering CategoryOfMenu Page (With Location Category)
def renderingPageWithProductCategoryAndLocation(request , category_location_slug , category_product_slug ):
    template = loader.get_template('CategoryOfMenuLocationCategory.html')
    locations = LocationCategory.objects.all()
    categoryOfProductsSideMenu = ProductCategory.objects.all()
    categoryOfLocation = get_object_or_404( LocationCategory , slug=category_location_slug )
    categoryOfProducts = (get_object_or_404( ProductCategory , slug=category_product_slug )).name
    myProductsSyncedWithLocation = ProductWrapper.objects.filter(location_category__name = categoryOfLocation)
    mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__name = categoryOfProducts)
    allImages = Image.objects.filter(image_Location__name = categoryOfLocation)

    mainLocation = categoryOfLocation
    mainLocationEnglish = category_location_slug

    myProducts = []
    myCounter = 0
    if len(myProductsSyncedWithLocation) >= 1:
        for item in myProductsSyncedWithLocation:
            if item.product_category.name == categoryOfProducts :
                myProducts.append(myProductsSyncedWithLocation[myCounter])
                myCounter += 1
            else :
                myCounter += 1
    else:
        pass


    #Pics Of Page (SL , TC)
    topCommercialPics = []
    sliderPics = []
    myCounter = 0
    if len(allImages) >= 1:
        for item in allImages :
            if item.image_types == 'SL':
                if item.image_ProductCategory.name == categoryOfProducts :
                    sliderPics.append(allImages[myCounter])
                myCounter += 1
            elif item.image_types == 'TC':
                topCommercialPics.append(allImages[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else :
        pass

    #TC
    topCommercial = []
    myCounter = 0 
    if len(topCommercialPics):
        while myCounter < 1:
            topCommercial.append(topCommercialPics[myCounter])
            myCounter += 1
    #SL
    threePicsOfSlider = threeCounter(sliderPics)

    context = {
        'mylocations':locations,
        'categoryOfProductsSideMenu':categoryOfProductsSideMenu,
        'myProducts':myProducts,
        'mySubFilters':mySubFilters,
        #Creating Title Of Category
        'categoryOfProducts':categoryOfProducts,
        #Pic Of Top Commercial
        'topCommercial':topCommercial,
        #Three Pic Of Slider
        'threePicsOfSlider':threePicsOfSlider,
        #Location
        'mainLocation':mainLocation,
        'mainLocationEnglish':mainLocationEnglish,
        
    }
    return HttpResponse(template.render(context , request))


def renderingPageWithLocationAndProductCategoryBestTickOfToday(request , category_location_slug):
    template = loader.get_template('CategoryOfMenuLocationCategoryDifferent.html')
    locations = LocationCategory.objects.all()
    categoryOfProductsSideMenu = ProductCategory.objects.all()
    categoryOfLocation = get_object_or_404( LocationCategory , slug=category_location_slug )
    allProducts = ProductWrapper.objects.filter(location_category__name = categoryOfLocation)
    allImages = Image.objects.filter(image_Location__name = categoryOfLocation)

    mainLocation = categoryOfLocation
    mainLocationEnglish = category_location_slug

    myProducts = []
    myCounter = 0
    if len(allProducts) >= 1 :
        for item in allProducts:
            if item.is_in_bestTickOfToday == True :
                myProducts.append(allProducts[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else:
        pass

        
    #Pics Of Page (SL , TC )
    topCommercialPics = []
    slidersPics = []
    myCounter = 0
    if len(allImages) >=1 :
        for item in allImages :
            if item.image_types == 'SL' :
                slidersPics.append(allImages[myCounter])
                myCounter += 1
            elif item.image_types == 'TC':
                topCommercialPics.append(allImages[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else:
        pass

    #TC
    topCommercial = []
    myCounter = 0 
    if len(topCommercialPics):
        while myCounter < 1:
            topCommercial.append(topCommercialPics[myCounter])
            myCounter += 1
    #SL
    threePicsOfSlider = threeCounter(slidersPics)

    titleOfCategory = 'بست تیک های امروز'

    context = {
        'mylocations':locations,
        'categoryOfProductsSideMenu':categoryOfProductsSideMenu,
        'myProducts':myProducts,
        'mainLocation':mainLocation,
        'mainLocationEnglish':mainLocationEnglish,
        #TC Pics
        'topCommercial':topCommercial,
        #SL Pics
        'threePicsOfSlider':threePicsOfSlider,
        'titleOfCategory':titleOfCategory,
    }

    return HttpResponse(template.render(context , request))

def renderingPageWithLocationAndProductCategoryLastMinutes(request , category_location_slug):
    template = loader.get_template('CategoryOfMenuLocationCategoryDifferent.html')
    locations = LocationCategory.objects.all()
    categoryOfProductsSideMenu = ProductCategory.objects.all()
    categoryOfLocation = get_object_or_404( LocationCategory , slug=category_location_slug )
    allProducts = ProductWrapper.objects.filter(location_category__name = categoryOfLocation)
    allImages = Image.objects.filter(image_Location__name = categoryOfLocation)

    mainLocation = categoryOfLocation
    mainLocationEnglish = category_location_slug

    myProducts = []
    myCounter = 0
    if len(allProducts) >= 1 :
        for item in allProducts:
            if item.is_lastMinute == True :
                myProducts.append(allProducts[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else:
        pass

        
    #Pics Of Page (SL , TC )
    topCommercialPics = []
    slidersPics = []
    myCounter = 0
    if len(allImages) >=1 :
        for item in allImages :
            if item.image_types == 'SL' :
                slidersPics.append(allImages[myCounter])
                myCounter += 1
            elif item.image_types == 'TC':
                topCommercialPics.append(allImages[myCounter])
                myCounter += 1
            else:
                myCounter += 1
    else:
        pass

    #TC
    topCommercial = []
    myCounter = 0 
    if len(topCommercialPics)>=1:
        while myCounter < 1:
            topCommercial.append(topCommercialPics[myCounter])
            myCounter += 1
    #SL
    threePicsOfSlider = threeCounter(slidersPics)
    titleOfCategory = 'بست تیک های لحظه آخری'

    context = {
        'mylocations':locations,
        'categoryOfProductsSideMenu':categoryOfProductsSideMenu,
        'myProducts':myProducts,
        'mainLocation':mainLocation,
        'mainLocationEnglish':mainLocationEnglish,
        #TC Pics
        'topCommercial':topCommercial,
        #SL Pics
        'threePicsOfSlider':threePicsOfSlider,
        'titleOfCategory':titleOfCategory,
    }

    return HttpResponse(template.render(context , request))

#ShoppingCart Page WithOut Location
def renderingShoppingCartPage(request,category_location_slug=None):
    template = loader.get_template('ShoppingCart.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    cart=Cart.objects.get(user=request.user)
    cartitem=CartItem.objects.filter(cart=cart)
    myrange=(1,2,3,4,5,6,7,8,9)

    mainLocationEnglish = category_location_slug

    #Pic Of TC
    if category_location_slug == None:
        mainLocation = 'مکان شما'
        #For Top Commercial
        Imagesall = Image.objects.filter(image_types = 'TC')
        picOfTopCommercial = []
        myCounter = 0
        if len(Imagesall) >= 1 :
            while myCounter < 1:
                picOfTopCommercial.append(Imagesall[myCounter])
                myCounter += 1 
        else :
            pass

    else :
        mainLocation = get_object_or_404(LocationCategory ,  slug = category_location_slug ) 
        # For Top Commercial
        allImages = Image.objects.filter(image_Location__name = mainLocation)
        topCommercialPics = []
        myCounter = 0
        if len(allImages) >= 1:
            for item in allImages :
                if item.image_types == 'TC':
                    topCommercialPics.append(allImages[myCounter])
                    myCounter += 1
                else:
                    myCounter += 1
        else :
            pass
        #TC
        picOfTopCommercial = []
        myCounter = 0 
        while myCounter < 1:
            picOfTopCommercial.append(topCommercialPics[myCounter])
            myCounter += 1


    if request.method=="POST":
        if request.POST.get('pay')!=None:
            order=Order(user=request.user)
            order.save()
            for item in cartitem:
                orderitem=OrderItem(order=order,product=item.product,quantityOfProduct=item.quantityOfProduct)
                orderitem.save()

            cart.delete()
            cart=Cart(user=request.user)
            cart.save()
            if category_location_slug != None:
                return redirect('/'+category_location_slug)
            else :
                return redirect('/')

        else:
            mydict=dict(request.POST)
            mylist=list(mydict.keys())
            deleteitem=CartItem.objects.get(id=mylist[1])
            deleteitem.delete()
            if category_location_slug!=None:
                return redirect("/"+category_location_slug+'/User/ShoppingCart')
            else:
                return redirect('/User/ShoppingCart')


    context ={
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        'cart':cart,
        'cartitem':cartitem,
        'myrange':myrange,
        'picOfTopCommercial':picOfTopCommercial,
        'mainLocation':mainLocation,
        'mainLocationEnglish':mainLocationEnglish,
    }
    return HttpResponse(template.render(context , request))

def renderingSubCategoryPage(request , category_product_slug ,subcategory_product_slug , category_location_slug=None):
    template = loader.get_template('SubCategoryOfMenu.html')
    locations = LocationCategory.objects.all()
    categoryOfProducts = ProductCategory.objects.all()
    product_Category_Type = get_object_or_404(ProductCategory , slug = category_product_slug)
    product_SubCategory_Type = get_object_or_404(TypeOfProductsSubCategory , slug=subcategory_product_slug )
    Imageall = Image.objects.filter( image_ProductCategory__name = product_Category_Type )
    createTitleOfCategory = product_Category_Type.name
    createCategorySlug = product_Category_Type.slug 


    myProductsWithSub = []
    if category_location_slug == None:
        mainLocation = 'مکان شما'
        mainLocationEnglish = category_location_slug
        if product_Category_Type.slug == 'Restaurant':
            myProducts = ProductWrapper.objects.filter(product_category__id = 3)
            mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 3)
            myCounter = 0
            if len(myProducts)>=1 :
                for item in myProducts :
                    if item.product_categorytype.slug == product_SubCategory_Type.slug :
                        myProductsWithSub.append(myProducts[myCounter])
                        myCounter += 1
                    else:
                        myCounter += 1

        elif product_Category_Type.slug == 'Entertainment':
            myProducts = ProductWrapper.objects.filter(product_category__id = 4)
            mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 4)
            myCounter = 0
            if len(myProducts)>=1 :
                for item in myProducts :
                    if item.product_categorytype.slug == product_SubCategory_Type.slug :
                        myProductsWithSub.append(myProducts[myCounter])
                        myCounter += 1
                    else:
                        myCounter += 1
        elif product_Category_Type.slug == 'Exercise':
            myProducts = ProductWrapper.objects.filter(product_category__id = 5)
            mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 5)
            myCounter = 0
            if len(myProducts)>=1 :
                for item in myProducts :
                    if item.product_categorytype.slug == product_SubCategory_Type.slug :
                        myProductsWithSub.append(myProducts[myCounter])
                        myCounter += 1
                    else:
                        myCounter += 1

        elif product_Category_Type.slug == 'Art':
            myProducts = ProductWrapper.objects.filter(product_category__id = 6)
            mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 6)
            myCounter = 0
            if len(myProducts)>=1 :
                for item in myProducts :
                    if item.product_categorytype.slug == product_SubCategory_Type.slug :
                        myProductsWithSub.append(myProducts[myCounter])
                        myCounter += 1
                    else:
                        myCounter += 1
        elif product_Category_Type.slug == 'Services':
            myProducts = ProductWrapper.objects.filter(product_category__id = 7)
            mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__id = 7)

    else :
        mainLocation = get_object_or_404(LocationCategory ,  slug = category_location_slug ) 
        mainLocationEnglish = category_location_slug
        myCounter = 0
        mySubFilters = TypeOfProductsSubCategory.objects.filter(product_MainCategoryKey__slug = category_product_slug)
        categoryOfLocation = get_object_or_404( LocationCategory , slug=category_location_slug )
        myProductsSyncedWithLocation = ProductWrapper.objects.filter(location_category__name = categoryOfLocation)
        if len(myProductsSyncedWithLocation) >= 1:
            for item in myProductsSyncedWithLocation:
                if item.product_category.slug == product_Category_Type.slug and item.product_categorytype.slug == product_SubCategory_Type.slug :
                    myProductsWithSub.append(myProductsSyncedWithLocation[myCounter])
                    myCounter += 1
                else :
                    myCounter += 1
        else:
            pass





    #Pic Of Slider
    picturesOfSlider = []
    myCounter = 0
    if len(Imageall) >= 1:
        for item in Imageall:
            if item.image_types == 'SL' :
                picturesOfSlider.append(Imageall[myCounter])
                myCounter += 1
            else :
                myCounter += 1
    else :
        pass
    threePicOfSlider = threeCounter(picturesOfSlider)

    #For Top Commercial
    Imagesall = Image.objects.filter(image_types = 'TC')
    picOfTopCommercial = []
    myCounter = 0
    if len(Imagesall) >= 1 :
        while myCounter < 1:
            picOfTopCommercial.append(Imagesall[myCounter])
            myCounter += 1 
    else :
        pass
        


    context = {
        'mylocations':locations,
        'categoryOfProducts':categoryOfProducts,
        'mySubFilters':mySubFilters,
        #Create Title Of Category
        'createTitleOfCategory' :createTitleOfCategory,
        'myProductsWithSub':myProductsWithSub,
        #Top Commercial
        'picOfTopCommercial':picOfTopCommercial,
        #Pics Of Slider
        'threePicOfSlider' : threePicOfSlider,
        'createCategorySlug':createCategorySlug,
        'mainLocation':mainLocation,
        'mainLocationEnglish':mainLocationEnglish,

    }
    return HttpResponse(template.render(context , request))








