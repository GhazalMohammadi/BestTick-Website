from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from .models import LocationCategory

class CreateUserForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={"class":"btn inputStyle" , "onkeyup":"return validatingFirstNameInput()" , "id":"fname"}))
    email = forms.CharField(widget=forms.TextInput(attrs={"class":"btn inputStyle" , "id":"email"}))
    password1 = forms.CharField(widget=forms.TextInput(attrs={"class":"btn inputStyle" , "onkeyup":"return validatingPasswordInput('password1')","onclick":"return validatingEmailInput()" , "id":"password1" , "type":"password"}))
    password2 = forms.CharField(widget=forms.TextInput(attrs={"class":"btn inputStyle" , "onkeyup":"return validatingPasswordInput('password2')" , "id":"password2" , "type":"password"}))
    receive_newsletter = forms.BooleanField(widget=forms.CheckboxInput(attrs={"id":"AcceptRules" , "name":"AcceptRules"}))


    # CITY_CHOICES = [
    #     ('tehran','Tehran'),
    #     ('mashhad','Mashhad'),
    # ]
    # city  = forms.ChoiceField(widget=forms.Select(choices=CITY_CHOICES,attrs={"class":"btn Dropdownstyle"}))
    class Meta:
        model = User
        fields = ['username','email', 'password1' ,'password2' , 'receive_newsletter' ]

    
