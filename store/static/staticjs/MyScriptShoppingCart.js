"use strict";

//--------------------------------------------------------------
//If S.O SignIn what Happend To SignIn/SignUp Btn
let howToShowSignInSignUpBtn = function (firstName, lastName) {
  let SignBtnStyle = document.getElementById("SignBtnStyle");
  SignBtnStyle.innerHTML = `${firstName} ${lastName}`;
  SignBtnStyle.setAttribute("onclick", "location.href='./UserPanelPage.html'");
};
//--------------------------------------------------------------
//How To Show Shopping Cart Page With SignIn Or WithOut SignIn
var whatIsTheStausOfSignIn = false;
var identityOfPersonWhoSignIn = { firstName: "غزال", lastName: "محمدی" };
let howToShowTheShoppingCartPage = function (exactStatus) {
  if (exactStatus) {
    howToShowSignInSignUpBtn(
      identityOfPersonWhoSignIn["firstName"],
      identityOfPersonWhoSignIn["lastName"]
    );
    let wrapperTotalShoppingBox = document.getElementById(
      "wrapperTotalShoppingBox"
    );
    let wrapperTotalShoppingItems = document.getElementById(
      "wrapperTotalShoppingItems"
    );
    let wrapperTotalFormOfShopping = document.getElementById(
      "wrapperTotalFormOfShopping"
    );
    wrapperTotalShoppingBox.classList.add("wrapperTotalShoppingBoxAfterSignIn");
    wrapperTotalShoppingItems.classList.add(
      "wrapperTotalShoppingItemsAfterSignIn"
    );
    wrapperTotalFormOfShopping.style.display = "none";
  }
};
howToShowTheShoppingCartPage(whatIsTheStausOfSignIn);
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
let dropdownLocationBtn = document.getElementById("dropdownLocationBtn");
function choosingLocation(location) {
  if (statusDropdownIcon === 0) {
    dropdownLocationBtn.innerHTML = `${location}`;
    locationList.style.visibility = "hidden";
    statusDropdownIcon = 1;
  }
}

//--------------------------------------------------------------
//Sticky Menu
let headerWrapper = document.getElementById("headerWrapper");
let wrappeRight = document.getElementById("wrappeRight");
let wrapperLeft = document.getElementById("wrapperLeft");
let MenuSideScrolling = document.getElementById("wrapperMenuSide");
var sticky = headerWrapper.offsetTop;
window.onscroll = function () {
  Scrollingpage();
};
function Scrollingpage() {
  if (window.pageYOffset >= sticky) {
    MenuSideScrolling.style.top = "6rem";
    headerWrapper.style.top = "0";
    wrappeRight.style.transition = "0.5s";
    wrapperLeft.style.transition = "0.5s";
    wrappeRight.style.background = "#003459f0";
    wrapperLeft.style.background = "#003459f0";
  } else {
    MenuSideScrolling.style.top = "9.5rem";
    wrappeRight.style.transition = "0.5s";
    wrapperLeft.style.transition = "0.5s";
    headerWrapper.style.top = "3.5rem";
    wrappeRight.style.background = "#003459";
    wrapperLeft.style.background = "#003459";
  }
}
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

//--------------------------------------------------------------
//Left Part Of web page (Form Part)
let clickingEachForm = function (
  mainBtn,
  mainBackGround,
  secondBtn,
  secondBackGround,
  thirdBtn,
  thirdBackGround
) {
  let btnThatHasClicked = document.getElementById(`${mainBtn}`).style;
  let formthatHasNeeded = document.getElementById(`${mainBackGround}`).style;
  let btnForDownlayersOne = document.getElementById(`${secondBtn}`).style;
  let secondForm = document.getElementById(`${secondBackGround}`).style;
  let btnForDownLayersTwo = document.getElementById(`${thirdBtn}`).style;
  let thirdForm = document.getElementById(`${thirdBackGround}`).style;

  // Styles that we need
  btnThatHasClicked.background = "#0a5e9a";
  btnThatHasClicked.borderBottom = "2.5px solid #16e0bd";
  btnThatHasClicked.borderLeft = "2.5px solid #16e0bd";
  btnThatHasClicked.zIndex = "-3";
  formthatHasNeeded.zIndex = "-3";
  btnForDownlayersOne.background = "rgb(182, 182, 182)";
  btnForDownlayersOne.borderBottom = "2.5px solid #fff";
  btnForDownlayersOne.borderLeft = "2.5px solid #fff";
  btnForDownlayersOne.zIndex = "-4";
  secondForm.zIndex = "-4";
  btnForDownLayersTwo.background = "rgb(182, 182, 182)";
  btnForDownLayersTwo.borderBottom = "2.5px solid #fff";
  btnForDownLayersTwo.borderLeft = "2.5px solid #fff";
  btnForDownLayersTwo.zIndex = "-5";
  thirdForm.zIndex = "-5";
};

//-------------------------------------------------------------------------
//Making SweetAlert instead Of Using Alert Function
let whatYouShouldAlert = "";
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

//----------------------------------------------------------------
//Validation of Fast Shopping
//Validaion Of Mobile Phone
let validatingPhoneInput = function (phoneNumberTarget) {
  let valuesThatShouldCompare = /[^0-9]/;
  let getTheValueOfInputPhone = document.getElementById(
    `${phoneNumberTarget}`
  ).value;
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
//Validation Of Email
let validatingEmailInput = function () {
  let valuesThatShouldCompare = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let getTheValuesOfInputEmail = document.getElementById(`emailFastShop`).value;
  if (!getTheValuesOfInputEmail.match(valuesThatShouldCompare)) {
    sweetAlertForWrongDataOpening("ایمیل بدرستی وارد نشده است");
  }
};
//----------------------------------------------------------------
//Validation Of SignIn Shopping
//Validation Of Phone Number : I Just declare that function on line 242
//Validation Of PassWord
let validatingPasswordInput = function (passwordTarget) {
  let valuesThatShouldCompare = /[^a-zA-Z0-9@]/;
  let getTheValueOfInputPass = document.getElementById(
    `${passwordTarget}`
  ).value;
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

//-------------------------------------------------------------------
//Validation Of SignUp Shopping
//Validatio Of FirstName
let validatingFirstNameInput = function (firstnameTarget) {
  let valuesThatShouldCompare = /[^a-zA-Zآ-ی]/;
  let getTheValueOfInputName = document.getElementById(
    `${firstnameTarget}`
  ).value;
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
let validatingLastNameInput = function (lastnameTarget) {
  let valuesThatShouldCompare = /[^a-zA-Zآ-ی]/;
  let getTheValueOfInputLastName = document.getElementById(
    `${lastnameTarget}`
  ).value;
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
//Validation Of Phone Number : I Just declare that function on line 242
//Validation Of Password : I Just declare that function on line 262

//--------------------------------------------------------------------------
// Check if the checkBox is checked or not
let checkingCheckBox = function () {
  let getTheCheckBox = document.querySelector("#AcceptRules:checked");
  if (getTheCheckBox === null) {
    sweetAlertForWrongDataOpening("قوانین و مقررات را نپذیرفته اید");
  }
};
// checkingCheckBox();
//---------------------------------------------------------------------------
//Checking Empty Inputs Of Fast Shopping
let checkingNullInputsOfFastShopping = function () {
  let getTheValueOfMobile = document.getElementById("phoneFastShop").value;
  let getTheValueOfEmail = document.getElementById("emailFastShop").value;
  if (getTheValueOfMobile == "" || getTheValueOfMobile.length != 11) {
    whatYouShouldAlert = "فیلد موبایل را بدرستی پر کنید ";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  } else if (getTheValueOfEmail == "") {
    whatYouShouldAlert = "فیلد ایمیل را پر کنید.";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  }
  validatingEmailInput();
};

//---------------------------------------------------------------------------
//Checking Empty Inputs Of SignIn Shopping
let checkingNullInputsOfSignIn = function () {
  let getTheValueOfMobile = document.getElementById("phoneSignIn").value;
  let getTheValueOfPassword = document.getElementById("passSignIn").value;
  if (getTheValueOfMobile == "" || getTheValueOfMobile.length != 11) {
    whatYouShouldAlert = "فیلد موبایل را بدرستی پر کنید ";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  } else if (
    getTheValueOfPassword == "" ||
    getTheValueOfPassword.length < 4 ||
    getTheValueOfPassword.length > 10
  ) {
    whatYouShouldAlert = "فیلد پسورد را بدرستی وارد کنید (بین 4 تا 10 رقم)";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  }
};

//---------------------------------------------------------------------------
//Checking Empty Inputs Of SignUp Shopping
let checkingNullInputsOfSignUp = function () {
  let getTheValueOfLocation = document.getElementById("city").value;
  let getTheValueOfFname = document.getElementById("fname").value;
  let getTheValueOfLname = document.getElementById("lname").value;
  let getTheValueOfPhone = document.getElementById("phoneSignUp").value;
  let getTheValueOfPassword = document.getElementById("passSignUp").value;
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
    getTheValueOfPassword.length < 4 ||
    getTheValueOfPassword.length > 10
  ) {
    whatYouShouldAlert = "فیلد پسورد را بدرستی وارد کنید (بین 4 تا 10 رقم)";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  } else if (getTheValueOfLocation == "محل سکونت") {
    whatYouShouldAlert = "فیلد محل سکونت را پر کنید .";
    sweetAlertForWrongDataOpening(whatYouShouldAlert);
  }
  checkingCheckBox();
};

//-----------------------------------------------------------------------------
//creating Box Of Products You want to buy
// let makingBoxOfShoppingItems = function () {
//   let priceOfProductTransferToShoppingCart = sessionStorage.getItem(
//     "priceOfProductTransferToShoppingCart"
//   );
//   //Turning String to Array
//   priceOfProductTransferToShoppingCart =
//     priceOfProductTransferToShoppingCart.split(",");
//   console.log(priceOfProductTransferToShoppingCart);
//   let quantityOfProductTransferToShoppingCart = sessionStorage.getItem(
//     "quantityOfProductTransferToShoppingCart"
//   );
//   //Turning String to Array
//   quantityOfProductTransferToShoppingCart =
//     quantityOfProductTransferToShoppingCart.split(",");
//   console.log(quantityOfProductTransferToShoppingCart);
//   let nameOfLocationTransferToShoppingCart = sessionStorage.getItem(
//     "nameOfLocationTransferToShoppingCart"
//   );
//   //Turning String to Array
//   nameOfLocationTransferToShoppingCart =
//     nameOfLocationTransferToShoppingCart.split(",");
//   console.log(nameOfLocationTransferToShoppingCart);
//   let statusOfClickingBuyingTicket = sessionStorage.getItem(
//     "statusOfClickingProductTobuy"
//   );
//   if (statusOfClickingBuyingTicket) {
//     for (let i = 0; i < priceOfProductTransferToShoppingCart.length; i++) {
//       //First & Only Child has 2 children : (img : .styleForProductPicItem) & (div : .wrapperSecondColumn) ----> Append
//       let createShoppingItems = document.createElement("div");
//       createShoppingItems.classList.add("ShoppingItems");
//       //First Child(img : .styleForProductPicItem)
//       let createstyleForProductPicItem = document.createElement("img");
//       createstyleForProductPicItem.classList.add("styleForProductPicItem");
//       createstyleForProductPicItem.setAttribute("src", "./Pic/best tick 1.jpg");

//       //Second Child(div : .wrapperSecondColumn) has 2 Children : (div : .wrapperSecondColumnFristRow) & (div : .wrapperSecondColumnSecondRow) ----> Append
//       let createwrapperSecondColumn = document.createElement("div");
//       createwrapperSecondColumn.classList.add("wrapperSecondColumn");
//       //First Child(div : .wrapperSecondColumnFristRow) has 2 children : (p : .titleOfPlaceProduct) & (img : .trashIconStyle) ----> Append
//       let createwrapperSecondColumnFristRow = document.createElement("div");
//       createwrapperSecondColumnFristRow.classList.add(
//         "wrapperSecondColumnFristRow"
//       );
//       //First Child(p : .titleOfPlaceProduct)
//       let createtitleOfPlaceProduct = document.createElement("p");
//       createtitleOfPlaceProduct.classList.add("titleOfPlaceProduct");
//       let createContentTextOfTitle = document.createTextNode(
//         `${nameOfLocationTransferToShoppingCart[i]}`
//       );
//       createtitleOfPlaceProduct.appendChild(createContentTextOfTitle);
//       //Second Child(img : .trashIconStyle)
//       let createtrashIconStyle = document.createElement("img");
//       createtrashIconStyle.classList.add("trashIconStyle");
//       createtrashIconStyle.setAttribute(
//         "src",
//         "./SVG Icon/trash-svgrepo-com.svg"
//       );
//       //Appending
//       createwrapperSecondColumnFristRow.appendChild(createtitleOfPlaceProduct);
//       createwrapperSecondColumnFristRow.appendChild(createtrashIconStyle);

//       //Second Child(div : .wrapperSecondColumnSecondRow) has 3 Children : (select : .dropdownBtnQuantity & .btn ) & (p : .priceOfOneTicketStyle) & (p : .totalPriceTextStyles)---->Append
//       let createwrapperSecondColumnSecondRow = document.createElement("div");
//       createwrapperSecondColumnSecondRow.classList.add(
//         "wrapperSecondColumnSecondRow"
//       );
//       //First Child(select : .dropdownBtnQuantity & .btn )
//       let createdropdownBtnQuantity = document.createElement("select");
//       createdropdownBtnQuantity.classList.add("dropdownBtnQuantity");
//       createdropdownBtnQuantity.classList.add("btn");
//       //Value Doesnt work--------------------------------------------------
//       // createdropdownBtnQuantity.setAttribute(
//       //   "value",
//       //   `${quantityOfProductTransferToShoppingCart}`
//       // );
//       for (let j = 1; j < 10; j++) {
//         let createOptionsForSelectTag = document.createElement("option");
//         let createTextOfValues = document.createTextNode(`${j}`);
//         createOptionsForSelectTag.appendChild(createTextOfValues);
//         createOptionsForSelectTag.setAttribute("value", `${j}`);
//         createdropdownBtnQuantity.appendChild(createOptionsForSelectTag);
//         if (j == quantityOfProductTransferToShoppingCart[i]) {
//           createOptionsForSelectTag.setAttribute("selected", true);
//         }
//       }
//       //Second Child(p : .priceOfOneTicketStyle)
//       let createpriceOfOneTicketStyle = document.createElement("p");
//       createpriceOfOneTicketStyle.classList.add("priceOfOneTicketStyle");
//       let createTextOfpriceOfOneTicketStyle = document.createTextNode(
//         `${priceOfProductTransferToShoppingCart[i]}`
//       );
//       createpriceOfOneTicketStyle.appendChild(
//         createTextOfpriceOfOneTicketStyle
//       );
//       //Third Child(p : .totalPriceTextStyles)
//       let createtotalPriceTextStyles = document.createElement("p");
//       createtotalPriceTextStyles.classList.add("totalPriceTextStyle");
//       let createTextOftotalPriceTextStyles = document.createTextNode(
//         `${
//           Number(priceOfProductTransferToShoppingCart[i].replace("تومان", "")) *
//           Number(quantityOfProductTransferToShoppingCart[i])
//         }تومان`
//       );
//       createtotalPriceTextStyles.appendChild(createTextOftotalPriceTextStyles);
//       //Appending
//       createwrapperSecondColumnSecondRow.appendChild(createdropdownBtnQuantity);
//       createwrapperSecondColumnSecondRow.appendChild(
//         createpriceOfOneTicketStyle
//       );
//       createwrapperSecondColumnSecondRow.appendChild(
//         createtotalPriceTextStyles
//       );

//       //Appending
//       createwrapperSecondColumn.appendChild(createwrapperSecondColumnFristRow);
//       createwrapperSecondColumn.appendChild(createwrapperSecondColumnSecondRow);

//       //Appending
//       createShoppingItems.appendChild(createstyleForProductPicItem);
//       createShoppingItems.appendChild(createwrapperSecondColumn);

//       //Last Appending to GrandParent
//       //Grandparent Element has one child called : (div : .ShoppingItems) ---->Append
//       let parentwrapperTotalShoppingItems = document.getElementById(
//         "wrapperTotalShoppingItems"
//       );
//       parentwrapperTotalShoppingItems.appendChild(createShoppingItems);
//     }
//   }
// };
// makingBoxOfShoppingItems();
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

//-------------------------------------------------------------------------------
//Calculating Total Price Of Each Product
let calculatingTotalPrice = function () {
  let allItems = document.getElementsByClassName("ShoppingItems");
  let totalPayment = 0;
  for (let i = 0; i < allItems.length; i++) {
    let findIdOfProduct = allItems[i].id;
    let valueOfQuantityOptionTag = Number(
      document.getElementById(`QuantityOfEachProduct${findIdOfProduct}`)
        .innerText
    );
    let priceOfItem = document.getElementById(
      `EachPrice${findIdOfProduct}`
    ).innerText;
    priceOfItem = Number(priceOfItem.replace(".", ""));

    let totalPrice = priceOfItem * valueOfQuantityOptionTag;
    document.getElementById(
      `totalPriceOfEachProduct${findIdOfProduct}`
    ).innerText = `${totalPrice}تومان`;
    totalPayment += totalPrice;
    document.getElementById(
      "totalPricePayment"
    ).innerText = `${totalPayment}تومان`;
  }
};
calculatingTotalPrice();
