"use strict";
//--------------------------------------------------------------
// SearchBox Animation
let SearchBox = document.getElementById("SearchBox");
// this variable is global (for searchbox animation & searchingProcess)
let wrapperTotalListSearch = document.getElementById("wrapperTotalListSearch");
let StatusSearchBox = 1;
function clickingSearchBtn() {
  if (StatusSearchBox === 1) {
    SearchBox.style.transition = "0.7s";
    SearchBox.style.width = "16vw";
    SearchBox.style.right = "33.2vw";
    StatusSearchBox = 0;
    wrapperTotalListSearch.style.display = "none";
  } else {
    SearchBox.style.transition = "0.7s";
    SearchBox.style.width = "0%";
    SearchBox.style.right = "30.5vw";
    StatusSearchBox = 1;
    wrapperTotalListSearch.style.display = "none";
  }
}

//--------------------------------------------------------------
// Dropdown Icon Animation
let dropdownIcon = document.getElementById("dropdownIcon");
let locationList = document.getElementById("locationList");
let statusDropdownIcon = 1;
function clickingdropdownLocationBtn() {
  if (statusDropdownIcon === 1) {
    dropdownIcon.style.transition = "0.5s";
    dropdownIcon.style.transform = "rotate(180deg)";
    locationList.style.visibility = "visible";
    statusDropdownIcon = 0;
  } else {
    dropdownIcon.style.transition = "0.5s";
    dropdownIcon.style.transform = "rotate(0deg)";
    locationList.style.visibility = "hidden";
    statusDropdownIcon = 1;
  }
}

//--------------------------------------------------------------
// When Choosing a Location

//--------------------------------------------------------------
//Sticky Menu

//--------------------------------------------------------------
// Searching Process Of Search Box
let myObjectOfSearch = {
  Entertainment: ["سینما", "اتاق فرار", "تئاتر", "شهربازی", "موزه", "پارک"],
  Excersice: ["شنا و استخر", "باشگاه ورزشی", "پیست اسکیت"],
  Resturant: ["غذای ایرانی", "فست فود", "کافی شاپ"],
};

let arrayOfMyValuesOfSearch = [];
for (const key in myObjectOfSearch) {
  for (const k in myObjectOfSearch[key]) {
    arrayOfMyValuesOfSearch.push(myObjectOfSearch[key][k].toUpperCase());
  }
}
let listOfLiTagsSearch = [];
wrapperTotalListSearch.style.display = "none";
let searchingProcess = function () {
  let InputSelector = document.getElementById("SearchBox");
  let valueOfInput = InputSelector.value.toUpperCase();
  erasingList();
  // console.log(valueOfInput);
  for (let i = 0; i < arrayOfMyValuesOfSearch.length; i++) {
    if (arrayOfMyValuesOfSearch[i].indexOf(valueOfInput) > -1) {
      wrapperTotalListSearch.style.display = "";
      let finalResult = document.createTextNode(
        `${arrayOfMyValuesOfSearch[i]}`
      );
      // console.log(finalResult);
      let listBoxSearchItem = document.createElement("li");
      let listSearchItem = document.createElement("a");
      listBoxSearchItem.appendChild(listSearchItem);
      listSearchItem.appendChild(finalResult);
      listSearchItem.setAttribute("href", `www.Hichi`);
      wrapperTotalListSearch.appendChild(listBoxSearchItem);
      listBoxSearchItem.classList.add("listBoxSearchItem");
      listSearchItem.classList.add("listSearchItem");
    }
    if (valueOfInput == "") {
      wrapperTotalListSearch.style.display = "none";
    }
    if (valueOfInput != "") {
      wrapperTotalListSearch.style.display = "";
    }
  }
};
let erasingList = function () {
  listOfLiTagsSearch = document.getElementsByClassName("listBoxSearchItem");
  for (let i = 0; i < listOfLiTagsSearch.length; i++) {
    listOfLiTagsSearch[i].style.display = "none";
  }
};
//--------------------------------------------------------------
//Animating Picture Of Side Menu
let rotationDegreeCounter = 1;
function animatingPics(idOfElement) {
  let onMouseOverOfPic = document.getElementById(`${idOfElement}`);
  onMouseOverOfPic.style.transition = "1s";
  onMouseOverOfPic.style.transform = `rotateY(${
    rotationDegreeCounter * 180
  }deg)`;
  rotationDegreeCounter++;
  if (rotationDegreeCounter === 5) {
    rotationDegreeCounter = 1;
  }
}

//--------------------------------------------------------------
//Clicking Menu Button
let wrapperMenuSide = document.getElementById("wrapperMenuSide");
let crossIconStyle = document.getElementById("crossIconStyle");
let menuIconStyle = document.getElementById("menuIconStyle");
let statusMenuButtton = 1;

let clickingmenuButton = function () {
  //Opening Menu
  if (statusMenuButtton === 1) {
    crossIconStyle.style.visibility = "visible";
    menuIconStyle.style.visibility = "hidden";
    wrapperMenuSide.style.transition = "1s";
    wrapperMenuSide.style.right = "0";
    statusMenuButtton = 0;
  }
  //Closing Menu
  else {
    crossIconStyle.style.visibility = "hidden";
    menuIconStyle.style.visibility = "visible";
    wrapperMenuSide.style.transition = "1s";
    wrapperMenuSide.style.right = "-25%";
    statusMenuButtton = 1;
  }
};

//-------------------------------------------------------------------------
//Making SweetAlert instead Of Using Alert Function
let statusOfSweetAlert = 1;
let sweetAlertForWrongDataOpening = function (textShouldBeAlert) {
  let wrapperTotalSweetAlert = document.getElementsByClassName(
    "wrapperTotalSweetAlert"
  );

  let styleOfSweetAlertText = document.getElementById("styleOfSweetAlertText");
  if (statusOfSweetAlert === 1) {
    wrapperTotalSweetAlert[0].classList.add(
      "wrapperTotalSweetAlertAfterOpenning"
    );
    styleOfSweetAlertText.innerHTML = `${textShouldBeAlert}`;
    statusOfSweetAlert = 0;
  }
};

let sweetAlertForWrongDataClosing = function () {
  let wrapperTotalSweetAlert = document.getElementsByClassName(
    "wrapperTotalSweetAlert"
  );
  if (statusOfSweetAlert === 0) {
    wrapperTotalSweetAlert[0].classList.remove(
      "wrapperTotalSweetAlertAfterOpenning"
    );
    statusOfSweetAlert = 1;
  }
};

//-------------------------------------------------------------------------
//Making Random String For Captcha
// let lengthOfCaptcha = 4;
// let captchaCodeMade = "";
// let storingCaptcha = "";
// let allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// let makingRandomString = function (length) {
//   for (var i = 0; i < length; i++) {
//     captchaCodeMade += allChars.charAt(
//       Math.floor(Math.random() * allChars.length)
//     );
//   }

//   document.querySelector("#captchaPlace").value = captchaCodeMade;
//   storingCaptcha = captchaCodeMade;
//   captchaCodeMade = "";
// };
// makingRandomString(lengthOfCaptcha);

//--------------------------------------------------------------------------
//Validation Of Form
let whatYouShouldAlert = "";
//Validation Of Captcha
// let validatingCaptchaInput = function () {
//   let getTheValueOfCaptcha = document.getElementById("writeCaptchaHere").value;
//   if (getTheValueOfCaptcha != storingCaptcha) {
//     whatYouShouldAlert = "کد کپچا بدرستی وارد نشده است .";
//     sweetAlertForWrongDataOpening(whatYouShouldAlert);
//   }
// };

//Validation Of FirstName
let validatingFirstNameInput = function () {
  let valuesThatShouldCompare = /[^0-9a-zA-Zآ-ی]/;
  let getTheValueOfInputName = document.getElementById("fname").value;
  let resultOfComparingFname = getTheValueOfInputName.match(
    valuesThatShouldCompare
  );
  if (resultOfComparingFname == null) {
    return true;
  } else {
    sweetAlertForWrongDataOpening("کاراکتر وارد شده مجاز نمیباشد");
    return false;
  }
};

//Validation Of LastName
let validatingLastNameInput = function () {
  let valuesThatShouldCompare = /[^a-zA-Zآ-ی]/;
  let getTheValueOfInputLastName = document.getElementById("lname").value;
  let resultOfComparingLname = getTheValueOfInputLastName.match(
    valuesThatShouldCompare
  );
  if (resultOfComparingLname == null) {
    return true;
  } else {
    sweetAlertForWrongDataOpening("کاراکتر وارد شده مجاز نمیباشد");
    return false;
  }
};

//Validaion Of Mobile Phone
let validatingPhoneInput = function () {
  let valuesThatShouldCompare = /[^0-9]/;
  let getTheValueOfInputPhone = document.getElementById("phone").value;
  let resultOfComparingPhone = getTheValueOfInputPhone.match(
    valuesThatShouldCompare
  );
  if (resultOfComparingPhone == null) {
    return true;
  } else {
    sweetAlertForWrongDataOpening("کاراکتر وارد شده مجاز نمیباشد");
    return false;
  }
};

//Validation Of Password
let validatingPasswordInput = function (idOfInput) {
  let valuesThatShouldCompare = /[^a-zA-Z0-9@]/;
  let getTheValueOfInputPass = document.getElementById(`${idOfInput}`).value;
  let resultOfComparingPass = getTheValueOfInputPass.match(
    valuesThatShouldCompare
  );
  if (resultOfComparingPass == null) {
    return true;
  } else {
    sweetAlertForWrongDataOpening("کاراکتر وارد شده مجاز نمیباشد");
    return false;
  }
};

//Validation Of Email
let validatingEmailInput = function () {
  let valuesThatShouldCompare = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let getTheValuesOfInputEmail = document.getElementById(`email`).value;
  console.log(getTheValuesOfInputEmail);
  if (!getTheValuesOfInputEmail.match(valuesThatShouldCompare)) {
    sweetAlertForWrongDataOpening("ایمیل بدرستی وارد نشده است");
  }
};

//--------------------------------------------------------------------------
// Check if the checkBox is checked or not
let checkingCheckBox = function () {
  let getTheCheckBox = document.querySelector("#AcceptRules:checked");
  if (getTheCheckBox === null) {
    sweetAlertForWrongDataOpening("قوانین و مقررات را نپذیرفته اید");
  }
};
//Checking that Inputs are Null

let checkingNullInputs = function () {
  let getTheValueOfLocation = document.getElementById("city").value;
  let getTheValueOfFname = document.getElementById("fname").value;
  let getTheValueOfLname = document.getElementById("lname").value;
  let getTheValueOfPhone = document.getElementById("phone").value;
  let getTheValueOfPassword = document.getElementById("password").value;
  let getTeValueOfCaptcha = document.getElementById("writeCaptchaHere").value;
  let getTheValueOfEmail = document.getElementById("email").value;
  if (getTheValueOfFname == "") {
    whatYouShouldAlert = "فیلد نام را پر کنید";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  } else if (getTheValueOfLname == "") {
    whatYouShouldAlert = "فیلد نام خانوادگی را پر کنید";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  } else if (getTheValueOfPhone == "" || getTheValueOfPhone.length != 11) {
    whatYouShouldAlert = "فیلد موبایل را بدرستی پر کنید ";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  } else if (
    getTheValueOfPassword == "" ||
    getTheValueOfPassword.length < 8 ||
    getTheValueOfPassword.length > 100
  ) {
    whatYouShouldAlert = "فیلد پسورد را بدرستی وارد کنید (بین 8 تا 100 رقم)";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  } else if (getTheValueOfLocation == "محل سکونت") {
    whatYouShouldAlert = "فیلد محل سکونت را پر کنید .";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  }
  // else if (getTeValueOfCaptcha == "") {
  //   whatYouShouldAlert = "فیلد کپچا را وارد کنید";
  //   sweetAlertForWrongDataOpening(whatYouShouldAlert);
  // } else if (getTeValueOfCaptcha != "") {
  //   validatingCaptchaInput();
  // }
  else if (getTheValueOfEmail == "") {
    whatYouShouldAlert = "فیلد ایمیل را پر کنید.";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  }
  checkingCheckBox();
};

//----------------------------------------------------------------------------
//When I clicked one Of the Category Item of MenuSide What Should Happened
let sendingDataOfCategoryToCategoryPage = function (
  contentOfBtnThatHasClickedOnMenu
) {
  let getTheElementWeClicked = document.getElementById(
    `${contentOfBtnThatHasClickedOnMenu}`
  ).innerText;
  sessionStorage.setItem("getTheElementWeClicked", getTheElementWeClicked);
};

//-----------------------------------------------------------------------------
//Activating Red Circle Of Shopping Btn
let addingRedIconToShoppingBtnMainPage = sessionStorage.getItem(
  "addingRedIconToShoppingBtn"
);
let howManyTimesPurchaseBtnHasClickedMainPage = sessionStorage.getItem(
  "howManyTimesPurchaseBtnHasClicked"
);

let activatingRedCircleOfShoppingCartBtn = function (
  statusOfPurchaseBtn,
  quantityOfProducts
) {
  if (statusOfPurchaseBtn) {
    let getTheCircleElement = document.getElementById("quantityOfProductAdded");
    getTheCircleElement.style.display = "block";
    getTheCircleElement.innerHTML = `${quantityOfProducts}`;
  }
};
activatingRedCircleOfShoppingCartBtn(
  addingRedIconToShoppingBtnMainPage,
  howManyTimesPurchaseBtnHasClickedMainPage
);
