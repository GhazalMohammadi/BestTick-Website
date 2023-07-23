from django.urls import path
from . import views

urlpatterns = [
    path('', views.renderingMainPage , name='renderingMainPage'),
    path('Ticket/<slug:slug>/' , views.indivitualProduct , name='indivitualProduct'),
    path('<slug:category_location_slug>/Ticket/<slug:slug>/' , views.indivitualProductWithLocation , name='indivitualProductWithLocation'),
    path('<slug:category_location_slug>/' , views.showMainPageWithLocationCategory , name='showMainPageWithLocationCategory'),
   
    path('customer/login/' , views.renderingSignInPage , name='renderingSignInPage'),
    path('customer/register/' , views.renderingSignUpPage , name='renderingSignUpPage'),
    path('customer/logout/' , views.logoutUserWithOutLocation , name='logoutUserWithOutLocation') ,
    path('<slug:category_location_slug>/customer/logout/' , views.logoutUserWithLocation , name='logoutUserWithLocation') ,
    path('<slug:category_location_slug>/customer/login/' , views.renderingSignInPageWithLocation , name='renderingSignInPageWithLocation'),
    path('<slug:category_location_slug>/customer/register/' , views.renderingSignUpPageWithLocation , name='renderingSignUpPageWithLocation'),

    path('User/Dashboard/' , views.userPanelWithOutLocation , name='userPanelWithOutLocation'),
    path('<slug:category_location_slug>/User/Dashboard/' , views.userPanelWithLocation , name='userPanelWithLocation'),
    

    path('Category/<slug:category_product_slug>/' , views.renderingPageWithProductCategory , name='renderingPageWithProductCategory'),
    path('Categories/BestTickOfToday/', views.renderingPageWithBestTickOfTodayCategory , name='renderingPageWithBestTickOfTodayCategory'),
    path('Categories/LastMinutes/' , views.renderingPageWithLastMinuteCategory , name='renderingPageWithLastMinuteCategory'),
    
    path('<slug:category_location_slug>/Category/<slug:category_product_slug>/' , views.renderingPageWithProductCategoryAndLocation , name='renderingPageWithProductCategoryAndLocation'),
    path('<slug:category_location_slug>/Categories/BestTickOfToday/' , views.renderingPageWithLocationAndProductCategoryBestTickOfToday , name = 'renderingPageWithLocationAndProductCategoryBestTickOfToday'),
    path('<slug:category_location_slug>/Categories/LastMinutes/' , views.renderingPageWithLocationAndProductCategoryLastMinutes , name = 'renderingPageWithLocationAndProductCategoryLastMinutes'),

    path('User/ShoppingCart' , views.renderingShoppingCartPage , name='renderingShoppingCartPage'),
    path('<slug:category_location_slug>/User/ShoppingCart' , views.renderingShoppingCartPage , name='renderingShoppingCartPage'),

    path('Category/<slug:category_product_slug>/<slug:subcategory_product_slug>' , views.renderingSubCategoryPage , name='renderingSubCategoryPage'),
    path('<slug:category_location_slug>/Category/<slug:category_product_slug>/<slug:subcategory_product_slug>' , views.renderingSubCategoryPage , name='renderingSubCategoryPageWithLocation'),
    
]