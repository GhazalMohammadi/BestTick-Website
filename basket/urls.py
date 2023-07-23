from django.urls import path
from . import views

urlpatterns=[
    path('' , views.ShowingBasketPage , name='ShowingBasketPage') ,
    path('add/', views.basket_add , name='basket_add') ,
]