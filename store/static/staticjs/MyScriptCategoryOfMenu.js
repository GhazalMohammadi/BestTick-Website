"use strict";

//--------------------------------------------------------------
//If S.O SignIn what Happend To SignIn/SignUp Btn
let howToShowSignInSignUpBtn = function (firstName, lastName) {
  let SignBtnStyle = document.getElementById("SignBtnStyle");
  SignBtnStyle.innerHTML = `${firstName} ${lastName}`;
  SignBtnStyle.setAttribute("onclick", "location.href='./UserPanelPage.html'");
};
let whatIsTheStausOfSignIn = false;
let identityOfPersonWhoSignIn = { firstName: "غزال", lastName: "محمدی" };
let howToShowTheShoppingCartPage = function (exactStatus) {
  if (exactStatus) {
    howToShowSignInSignUpBtn(
      identityOfPersonWhoSignIn["firstName"],
      identityOfPersonWhoSignIn["lastName"]
    );
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
//-------------------------------------------------------------------------------
// Slider
var myCounter = 0;
carousel();
function carousel() {
  var i;
  var mySlidesOfProduct = document.getElementsByClassName("mySlidesOfProduct");
  for (i = 0; i < mySlidesOfProduct.length; i++) {
    mySlidesOfProduct[i].style.display = "none";
  }
  myCounter++;
  if (myCounter > mySlidesOfProduct.length) {
    myCounter = 1;
  }
  mySlidesOfProduct[myCounter - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//----------------------------------------------------------------------------
//When I clicked one Of the Category Item of MenuSide What Should Happened
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// let sendingDataOfCategoryToCategoryPage = function (
//   contentOfBtnThatHasClickedOnMenu
// ) {
//   let getTheElementWeClicked = document.getElementById(
//     `${contentOfBtnThatHasClickedOnMenu}`
//   ).innerText;
//   sessionStorage.setItem("getTheElementWeClicked", getTheElementWeClicked);
// };

// let whatHasChosenFromMenuSide = sessionStorage.getItem(
//   "getTheElementWeClicked"`
// );
// //---------------------------------------------------------------------------
// // Datas of Products
// let ourProductWeWantToShow = {
//   رستوران: {
//     resturantOptions: [
//       "همه",
//       "فست فود",
//       "ایرانی و سنتی",
//       "ایتالیایی",
//       "کافی شاپ",
//     ],
//     resturantPhotosSlider: [
//       "./Pic/categoryResturant1.jpg",
//       "./Pic/categoryResturant2.jpg",
//       "./Pic/categoryResturant3.jpg",
//     ],
//     resturantProduct1: {
//       imageOfProduct: "./Pic/resturantProduct1.jpg",
//       nameOfProduct: "نام مکان ایرانی و سنتی 1",
//       infoOfProduct: "توضیحات مکان 1",
//       locationOfProduct: "آدرس مربوط به مکان 1",
//       oldPriceOfProduct: "250000",
//       newPriceOfProduct: "200000",
//       calculateSalesPercentOfProduct: function () {
//         let oldPrice = Number(this.oldPriceOfProduct);
//         let newPrice = Number(this.newPriceOfProduct);
//         let resultOfPercent = Math.round(
//           ((oldPrice - newPrice) * 100) / oldPrice
//         );
//         return resultOfPercent;
//       },
//       typeOfProduct: "ایرانی و سنتی",
//       typeTotal: "همه",
//     },

//     resturantProduct2: {
//       imageOfProduct: "./Pic/resturantProduct2.jpg",
//       nameOfProduct: "نام مکان فست فود 2",
//       infoOfProduct: "توضیحات مکان 2",
//       locationOfProduct: "آدرس مربوط به مکان 2",
//       oldPriceOfProduct: "50000",
//       newPriceOfProduct: "25000",
//       calculateSalesPercentOfProduct: function () {
//         let oldPrice = Number(this.oldPriceOfProduct);
//         let newPrice = Number(this.newPriceOfProduct);
//         let resultOfPercent = Math.round(
//           ((oldPrice - newPrice) * 100) / oldPrice
//         );
//         return resultOfPercent;
//       },
//       typeOfProduct: "فست فود",
//       typeTotal: "همه",
//     },

//     resturantProduct3: {
//       imageOfProduct: "./Pic/resturantProduct3.jpg",
//       nameOfProduct: "نام مکان ایتالیایی 3",
//       infoOfProduct: "توضیحات مکان 3",
//       locationOfProduct: "آدرس مربوط به مکان 3",
//       oldPriceOfProduct: "100000",
//       newPriceOfProduct: "60000",
//       calculateSalesPercentOfProduct: function () {
//         let oldPrice = Number(this.oldPriceOfProduct);
//         let newPrice = Number(this.newPriceOfProduct);
//         let resultOfPercent = Math.round(
//           ((oldPrice - newPrice) * 100) / oldPrice
//         );
//         return resultOfPercent;
//       },
//       typeOfProduct: "ایتالیایی",
//       typeTotal: "همه",
//     },
//   },

//   تفریحی: {
//     entertainmentOptions: ["همه", "شهربازی و مراکز تفریحی", "پارک", "موزه"],
//     entertainmentPhotosSlider: [
//       "./Pic/categoryEntertainment1.jpg",
//       "./Pic/categoryEntertainment2.jpg",
//       "./Pic/categoryEntertainment1.jpg",
//     ],

//     entertainmentProduct1: {
//       imageOfProduct: "./Pic/تفریحی 1.jpg",
//       nameOfProduct: "نام مکان 1",
//       infoOfProduct: "توضیحات مکان 1",
//       locationOfProduct: "آدرس مربوط به مکان 1",
//       oldPriceOfProduct: "250000",
//       newPriceOfProduct: "200000",
//       calculateSalesPercentOfProduct: function () {
//         let oldPrice = Number(this.oldPriceOfProduct);
//         let newPrice = Number(this.newPriceOfProduct);
//         let resultOfPercent = Math.round(
//           ((oldPrice - newPrice) * 100) / oldPrice
//         );
//         return resultOfPercent;
//       },
//       typeOfProduct: "شهربازی و مراکز تفریحی",
//       typeTotal: "همه",
//     },

//     entertainmentProduct2: {
//       imageOfProduct: "./Pic/تفریحی 2.jpg",
//       nameOfProduct: "نام مکان 2",
//       infoOfProduct: "توضیحات مکان 2",
//       locationOfProduct: "آدرس مربوط به مکان 2",
//       oldPriceOfProduct: "170000",
//       newPriceOfProduct: "100000",
//       calculateSalesPercentOfProduct: function () {
//         let oldPrice = Number(this.oldPriceOfProduct);
//         let newPrice = Number(this.newPriceOfProduct);
//         let resultOfPercent = Math.round(
//           ((oldPrice - newPrice) * 100) / oldPrice
//         );
//         return resultOfPercent;
//       },
//       typeOfProduct: "شهربازی و مراکز تفریحی",
//       typeTotal: "همه",
//     },
//   },

//   ورزشی: {
//     exerciseOptions: ["همه", "استخر و ورزشهای آبی", "باشگاه", "سایر موارد"],
//     exercisePhotosSlider: [
//       "./Pic/categoryExercise1.jpg",
//       "./Pic/PoolPic.jpg",
//       "./Pic/categoryExercise1.jpg",
//     ],

//     exerciseProduct1: {
//       imageOfProduct: "./Pic/exerciseProduct1.jpg",
//       nameOfProduct: "نام مکان 1",
//       infoOfProduct: "توضیحات مکان 1",
//       locationOfProduct: "آدرس مربوط به مکان 1",
//       oldPriceOfProduct: "200000",
//       newPriceOfProduct: "180000",
//       calculateSalesPercentOfProduct: function () {
//         let oldPrice = Number(this.oldPriceOfProduct);
//         let newPrice = Number(this.newPriceOfProduct);
//         let resultOfPercent = Math.round(
//           ((oldPrice - newPrice) * 100) / oldPrice
//         );
//         return resultOfPercent;
//       },
//       typeOfProduct: "استخر و ورزشهای آبی",
//       typeTotal: "همه",
//     },

//     exerciseProduct2: {
//       imageOfProduct: "./Pic/exerciseProduct2.jpg",
//       nameOfProduct: "نام مکان 2",
//       infoOfProduct: "توضیحات مکان 2",
//       locationOfProduct: "آدرس مربوط به مکان 2",
//       oldPriceOfProduct: "280000",
//       newPriceOfProduct: "180000",
//       calculateSalesPercentOfProduct: function () {
//         let oldPrice = Number(this.oldPriceOfProduct);
//         let newPrice = Number(this.newPriceOfProduct);
//         let resultOfPercent = Math.round(
//           ((oldPrice - newPrice) * 100) / oldPrice
//         );
//         return resultOfPercent;
//       },
//       typeOfProduct: "باشگاه",
//       typeTotal: "همه",
//     },

//     exerciseProduct3: {
//       imageOfProduct: "./Pic/best tick 1.jpg",
//       nameOfProduct: "نام مکان 3",
//       infoOfProduct: "توضیحات مکان 3",
//       locationOfProduct: "آدرس مربوط به مکان 3",
//       oldPriceOfProduct: "190000",
//       newPriceOfProduct: "180000",
//       calculateSalesPercentOfProduct: function () {
//         let oldPrice = Number(this.oldPriceOfProduct);
//         let newPrice = Number(this.newPriceOfProduct);
//         let resultOfPercent = Math.round(
//           ((oldPrice - newPrice) * 100) / oldPrice
//         );
//         return resultOfPercent;
//       },
//       typeOfProduct: "سایر موارد",
//       typeTotal: "همه",
//     },
//   },
// };
// //--------------------------------------------------------------------------------
// //Function For Creating Box Of Products
// let counterOfBox = 1;
// let creatingBoxOfProducts = function (ourProduct, mainKey, secondKey) {
//   let getTheParentElement = document.getElementsByClassName(
//     "wrapperTotalMainBodyCategory"
//   );
//   // Parent Has One Child : div(wrapperTotalProductBox) ---> Not Appending
//   let createwrapperTotalProductBox = document.createElement("div");
//   createwrapperTotalProductBox.classList.add("wrapperTotalProductBox");
//   //First Child : img(styleForProductPicinProductBox) ---> Not Appending
//   let createstyleForProductPicinProductBox = document.createElement("img");
//   createstyleForProductPicinProductBox.classList.add(
//     "styleForProductPicinProductBox"
//   );
//   createstyleForProductPicinProductBox.setAttribute(
//     "id",
//     `pic${counterOfBox}ForProductBox`
//   );
//   //Second Child : div(wrapperForCol2OfContent) Has 3 Children --->Not Appending
//   let createwrapperForCol2OfContent = document.createElement("div");
//   createwrapperForCol2OfContent.classList.add("wrapperForCol2OfContent");
//   //First Child : p(styleForContentTextOfTitle) :  اسم مکان مورد نظر
//   let createstyleForContentTextOfTitle = document.createElement("p");
//   createstyleForContentTextOfTitle.classList.add("styleForContentTextOfTitle");
//   //Second Child : p(styleForContentTextOfMoreInfo) : توضیحات مربوط به مکان مورد نظر
//   let createstyleForContentTextOfMoreInfo = document.createElement("p");
//   createstyleForContentTextOfMoreInfo.classList.add(
//     "styleForContentTextOfMoreInfo"
//   );
//   //Third Child : p(styleForContentTextOfAddress) : آدرس : مکان مورد نظر
//   let createstyleForContentTextOfAddress = document.createElement("p");
//   createstyleForContentTextOfAddress.classList.add(
//     "styleForContentTextOfAddress"
//   );
//   //Third Child : div(wrapperForCol3OfContent) Has 4 Children
//   let createwrapperForCol3OfContent = document.createElement("div");
//   createwrapperForCol3OfContent.classList.add("wrapperForCol3OfContent");
//   //First Child : div(wrapperOfSalesPercent) has 1 child -->Not Appending
//   let createwrapperOfSalesPercent = document.createElement("div");
//   createwrapperOfSalesPercent.classList.add("wrapperOfSalesPercent");
//   //First Child : div(styleForPercentOfSalesText)
//   let createstyleForPercentOfSalesText = document.createElement("div");
//   createstyleForPercentOfSalesText.classList.add("styleForPercentOfSalesText");
//   //Second Child : p(styleForContentTextOfOldPrice) : قیمت قبلی
//   let createstyleForContentTextOfOldPrice = document.createElement("p");
//   createstyleForContentTextOfOldPrice.classList.add(
//     "styleForContentTextOfOldPrice"
//   );
//   createstyleForContentTextOfOldPrice.setAttribute(
//     "id",
//     `oldPrice${counterOfBox}OfProduct`
//   );
//   //Third Child : p(styleForContentTextOfNewPrice) : قیمت کنونی
//   let createstyleForContentTextOfNewPrice = document.createElement("p");
//   createstyleForContentTextOfNewPrice.classList.add(
//     "styleForContentTextOfNewPrice"
//   );
//   createstyleForContentTextOfNewPrice.setAttribute(
//     "id",
//     `newPrice${counterOfBox}OfProduct`
//   );
//   //Fourth Child : button(StyleForuttonOfShowAndBuy)
//   let createStyleForuttonOfShowAndBuy = document.createElement("button");
//   createStyleForuttonOfShowAndBuy.classList.add("StyleForuttonOfShowAndBuy");
//   createStyleForuttonOfShowAndBuy.classList.add("btn");
//   createStyleForuttonOfShowAndBuy.setAttribute(
//     "id",
//     `buttonOfShopping${counterOfBox}ForProduct`
//   );
//   let createTextFotBtn = document.createTextNode("مشاهده و خرید");
//   createStyleForuttonOfShowAndBuy.appendChild(createTextFotBtn);

//   // Set Some Attributes For Elements
//   createstyleForProductPicinProductBox.setAttribute(
//     "src",
//     `${ourProduct[mainKey][secondKey][`imageOfProduct`]}`
//   );
//   // Create Var
//   let createTextForBox = document.createTextNode(
//     `${ourProduct[mainKey][secondKey][`nameOfProduct`]}`
//   );
//   createstyleForContentTextOfTitle.appendChild(createTextForBox);
//   // Change 1
//   createTextForBox = document.createTextNode(
//     `${ourProduct[mainKey][secondKey][`infoOfProduct`]}`
//   );
//   createstyleForContentTextOfMoreInfo.appendChild(createTextForBox);
//   // Change 2
//   createTextForBox = document.createTextNode(
//     `آدرس : ${ourProduct[mainKey][secondKey][`locationOfProduct`]}`
//   );
//   createstyleForContentTextOfAddress.appendChild(createTextForBox);
//   // Change 3
//   createTextForBox = document.createTextNode(
//     `${ourProduct[mainKey][secondKey].calculateSalesPercentOfProduct()}%`
//   );
//   createstyleForPercentOfSalesText.appendChild(createTextForBox);
//   // Change 4
//   createTextForBox = document.createTextNode(
//     `${ourProduct[mainKey][secondKey][`oldPriceOfProduct`]} تومان`
//   );
//   createstyleForContentTextOfOldPrice.appendChild(createTextForBox);
//   // Change 5
//   createTextForBox = document.createTextNode(
//     `${ourProduct[mainKey][secondKey][`newPriceOfProduct`]} تومان`
//   );
//   createstyleForContentTextOfNewPrice.appendChild(createTextForBox);
//   //Appending
//   createwrapperForCol2OfContent.appendChild(createstyleForContentTextOfTitle);
//   createwrapperForCol2OfContent.appendChild(
//     createstyleForContentTextOfMoreInfo
//   );
//   createwrapperForCol2OfContent.appendChild(createstyleForContentTextOfAddress);
//   createwrapperOfSalesPercent.appendChild(createstyleForPercentOfSalesText);

//   createwrapperForCol3OfContent.appendChild(createwrapperOfSalesPercent);
//   createwrapperForCol3OfContent.appendChild(
//     createstyleForContentTextOfOldPrice
//   );
//   createwrapperForCol3OfContent.appendChild(
//     createstyleForContentTextOfNewPrice
//   );
//   createwrapperForCol3OfContent.appendChild(createStyleForuttonOfShowAndBuy);

//   createwrapperTotalProductBox.appendChild(
//     createstyleForProductPicinProductBox
//   );
//   createwrapperTotalProductBox.appendChild(createwrapperForCol2OfContent);
//   createwrapperTotalProductBox.appendChild(createwrapperForCol3OfContent);
//   getTheParentElement[0].appendChild(createwrapperTotalProductBox);

//   counterOfBox++;
// };
// //--------------------------------------------------------------------------------
// // Logic For Clicking Options Of Filter(همه / سایر موراد / ...)
// let logicForClickingOptionOfFilter = function (
//   btnThatWeClicked,
//   dataThatNeedToProcess
// ) {
//   // Clear All Products
//   let getTheElementwrapperTotalMainBodyCategory =
//     document.getElementsByClassName("wrapperTotalMainBodyCategory");
//   let getTheElementwrapperTotalProductBox = document.getElementsByClassName(
//     "wrapperTotalProductBox"
//   );
//   for (let i = 0; i < getTheElementwrapperTotalProductBox.length; i++) {
//     getTheElementwrapperTotalMainBodyCategory[0].removeChild(
//       getTheElementwrapperTotalProductBox[i]
//     );
//   }

//   //-----------------------------------------------------------------
//   let textOfBtnWeClicked = document.getElementById(
//     `${btnThatWeClicked}`
//   ).innerText;
//   for (const mainKey in dataThatNeedToProcess) {
//     if (mainKey === whatHasChosenFromMenuSide) {
//       let deciderOne = "";
//       if (whatHasChosenFromMenuSide === "رستوران") {
//         deciderOne = "resturant";
//       } else if (whatHasChosenFromMenuSide === "تفریحی") {
//         deciderOne = "entertainment";
//       } else if (whatHasChosenFromMenuSide === "ورزشی") {
//         deciderOne = "exercise";
//       }

//       for (const secondKey in dataThatNeedToProcess[mainKey]) {
//         if (
//           textOfBtnWeClicked ===
//           dataThatNeedToProcess[mainKey][secondKey]["typeOfProduct"]
//         ) {
//           creatingBoxOfProducts(dataThatNeedToProcess, mainKey, secondKey);
//         }

//         if (
//           textOfBtnWeClicked ===
//           dataThatNeedToProcess[mainKey][secondKey]["typeTotal"]
//         ) {
//           creatingBoxOfProducts(dataThatNeedToProcess, mainKey, secondKey);
//         }
//       }
//     }
//   }
// };
// //--------------------------------------------------------------------------------
// //what happen when I clicked option Items Filters
let clickingSubFiltersOfCategory = function (
  itemOptionThatClicked,
  classOfAllOptions
) {
  let subOtionThatHasClicked = document.getElementById(
    `${itemOptionThatClicked}`
  );
  let arrayOfAllSubOptions = document.getElementsByClassName(
    `${classOfAllOptions}`
  );

  for (let i = 0; i < arrayOfAllSubOptions.length; i++) {
    arrayOfAllSubOptions[i].style.background = "none";
    arrayOfAllSubOptions[i].style.color = "#000";
    arrayOfAllSubOptions[i].style.border = "1px solid #003459";
  }
  subOtionThatHasClicked.style.transition = "0.5s";
  subOtionThatHasClicked.style.background = "#16e0bd";
  subOtionThatHasClicked.style.color = "#003459";
  subOtionThatHasClicked.style.border = "1px solid #16e0bd";
};

// //--------------------------------------------------------------------------------
// //Filtering Items
// let showDataFromOurProductOnPage = function (ourProduct) {
//   for (const mainKey in ourProduct) {
//     console.log(whatHasChosenFromMenuSide, "+", mainKey);
//     //----------------Solving Problem -----------------------
//     let getSliderElement = document.getElementsByClassName(
//       "wrapperTotalSliderCategory"
//     );
//     getSliderElement[0].style.display = "";
//     if (mainKey === whatHasChosenFromMenuSide) {
//       let titleTextOfCategoryMenu = document.getElementById(
//         "titleTextOfCategoryMenu"
//       );
//       titleTextOfCategoryMenu.innerHTML = whatHasChosenFromMenuSide;
//       let deciderOne = "";
//       if (whatHasChosenFromMenuSide === "رستوران") {
//         deciderOne = "resturant";
//       } else if (whatHasChosenFromMenuSide === "تفریحی") {
//         deciderOne = "entertainment";
//       } else if (whatHasChosenFromMenuSide === "ورزشی") {
//         deciderOne = "exercise";
//       }
//       for (const secondKey in ourProduct[mainKey]) {
//         //1
//         if (secondKey === `${deciderOne}Options`) {
//           for (let i = 0; i < ourProduct[mainKey][secondKey].length; i++) {
//             // console.log(ourProduct[mainKey][secondKey][i]);
//             let createwrapperOptions = document.createElement("div"); //Has 2 Children : input  & label : Appended
//             createwrapperOptions.classList.add("wrapperOptions");
//             //------------------------------------------------------------
//             let createstyleForRadioInputs = document.createElement("input");
//             createstyleForRadioInputs.classList.add("styleForRadioInputs");
//             createstyleForRadioInputs.setAttribute(
//               "name",
//               "filterForOtherOption"
//             );
//             createstyleForRadioInputs.setAttribute("type", "radio");
//             createstyleForRadioInputs.setAttribute(
//               "id",
//               `filter${i + 1}Option`
//             );
//             //-------------------------------------------------------------
//             let createstyleForLabel = document.createElement("label");
//             createstyleForLabel.classList.add("styleForLabel");
//             createstyleForLabel.setAttribute("for", `filter${i + 1}Option`);
//             createstyleForLabel.setAttribute("id", `label${i + 1}Option`);
//             createstyleForLabel.setAttribute(
//               "onclick",
//               "clickingSubFiltersOfCategory(this.id,'styleForLabel')"
//             );
//             let createTextForLabel = document.createTextNode(
//               `${ourProduct[mainKey][secondKey][i]}`
//             );
//             createstyleForLabel.appendChild(createTextForLabel);
//             //Appending
//             createwrapperOptions.appendChild(createstyleForRadioInputs);
//             createwrapperOptions.appendChild(createstyleForLabel);
//             //--------------------------------------------------------------
//             let getwrapperTotalOtherOptionOfCategory =
//               document.getElementsByClassName(
//                 "wrapperTotalOtherOptionOfCategory"
//               );
//             getwrapperTotalOtherOptionOfCategory[0].appendChild(
//               createwrapperOptions
//             );
//           }
//         }
//         //2
//         if (secondKey === `${deciderOne}PhotosSlider`) {
//           for (let i = 0; i < ourProduct[mainKey][secondKey].length; i++) {
//             // console.log(ourProduct[mainKey][secondKey][i]);
//             let getSpecificSlider = document.getElementById(
//               `picSlider${i + 1}Category`
//             );
//             getSpecificSlider.setAttribute(
//               "src",
//               `${ourProduct[mainKey][secondKey][i]}`
//             );
//           }
//         }

//         //3
//         // let counterOfBox = 1;
//         if (secondKey.includes(`${deciderOne}Product`)) {
//           creatingBoxOfProducts(ourProduct, mainKey, secondKey);
//         }
//       }
//       break;
//     } else if (mainKey !== whatHasChosenFromMenuSide) {
//       getSliderElement[0].style.display = "none";
//       let titleTextOfCategoryMenu = document.getElementById(
//         "titleTextOfCategoryMenu"
//       );
//       titleTextOfCategoryMenu.innerHTML = "هیچ موردی یافت نشد !";
//     }
//   }
// };
// showDataFromOurProductOnPage(ourProductWeWantToShow);
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
// Footer Height
let displayFooterPart = function () {
  let getOfElement = document.getElementsByClassName(
    "wrapperTotalMainBodyCategory"
  );
  let heightOfElement = getOfElement[0].offsetHeight;
  console.log(heightOfElement);
  let footerElements = document.getElementById("footerStyle");
  footerElements.style.bottom = `-290px`;
};
displayFooterPart();

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
