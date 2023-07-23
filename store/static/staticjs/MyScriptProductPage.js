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

//----------------------------------------------------------------------
//Clicking Adding To Shopping Cart
$(document).on("click", "AddingToShoppingCart", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "/basket/MyShoppingCart/",
    data: {
      productid: $("#AddingToShoppingCart").val(),
      csrfmiddlewaretoken: "{{csrf_token}}", //Security
      action: "post",
    },
    success: function (json) {},
    error: function (xhr, errmsg, err) {},
  });
});

//---------------------------------------------------------------------
//When you want to choose your ticket Product Page(chooseYourTicketBtn)
// (For Part : How many Box of Ticket should made but we need it here)
// let quantityOfBoxesOfTicket = 2;
// let statusChoosingTicket = 1;
// let wrapperWithBackBlack = document.getElementById("wrapperWithBackBlack");
// let clickingChooseYourTicketBtn = function () {
//   if (statusChoosingTicket === 1) {
//     wrapperWithBackBlack.classList.add("wrapperTotalModalAfterClickMode");
//     makingboxOfModalTickets(quantityOfBoxesOfTicket);
//     statusChoosingTicket = 0;
//   }
// };
// let clickCrossBtnForChooseTicket = function () {
//   let getAllModalBoxes = document.getElementsByClassName("boxOfModalTickets");
//   if (statusChoosingTicket === 0) {
//     wrapperWithBackBlack.classList.remove("wrapperTotalModalAfterClickMode");
//     for (let i = 0; i < getAllModalBoxes.length; i++) {
//       getAllModalBoxes[i].style.display = "none";
//     }
//     statusChoosingTicket = 1;
//   }
// };

// //----------------------------------------------------------------------
// //How many Box of Ticket should made
// let textOfMoreInfo = [
//   "توضیحات مربوط به لوکیشن سانس 1",
//   "توضیحات مربوط به لوکیشن سانس 2",
// ];
// let quantityOfSoldOutTicket = [40, 100];
// let quantityOfSalesPercent = [20, 45];
// let priceOfTicket = ["120000", "40000"];
// let wrapperTotalModalDiffTickets = document.getElementById(
//   "wrapperWithBackWhite"
// );
// let makingboxOfModalTickets = function (Quantity) {
//   for (let i = 0; i < Quantity; i++) {
//     let myModalBox = document.createElement("div");
//     myModalBox.classList.add("boxOfModalTickets");

//     // Three Children Of modalBox(Not Append)
//     // First Child
//     let myImageProduct = document.createElement("img");
//     myImageProduct.classList.add("imageOfTicketModal");
//     myImageProduct.setAttribute("src", "Pic/Product 3.jpg");

//     //Second Child
//     let contentColumnTwo = document.createElement("div");
//     contentColumnTwo.classList.add("wrapperContentCol2");
//     //Second Child has 2 Children(Append-->contentColumnTwo)
//     //First Child
//     let moreInfoaboutModalTick = document.createElement("p");
//     let textFormoreInfoaboutModalTick = document.createTextNode(
//       `${textOfMoreInfo[i]}`
//     );
//     moreInfoaboutModalTick.classList.add("moreInfoaboutModalTick");
//     moreInfoaboutModalTick.setAttribute(
//       "id",
//       `valueOfTitleOfLocationForShoppingCart${i}Item`
//     );
//     moreInfoaboutModalTick.appendChild(textFormoreInfoaboutModalTick);
//     //Second Child
//     let makeWarpperContentCol2Line2Objects = document.createElement("div");
//     makeWarpperContentCol2Line2Objects.classList.add(
//       "warpperContentCol2Line2Objects"
//     );
//     //Appending
//     contentColumnTwo.appendChild(moreInfoaboutModalTick);
//     contentColumnTwo.appendChild(makeWarpperContentCol2Line2Objects);
//     //Second Child has 2 Children(Append-->makeWarpperContentCol2Line2Objects)
//     //First Child
//     let createIconsSyleForContentCol2 = document.createElement("img");
//     createIconsSyleForContentCol2.classList.add("IconsSyleForContentCol2");
//     createIconsSyleForContentCol2.setAttribute(
//       "src",
//       "./SVG Icon/shopping-cart-svgrepo2-com.svg"
//     );
//     //Second Child
//     let createCommonTextOfBox = document.createElement("p");
//     createCommonTextOfBox.classList.add("CommonTextOfBox");
//     let textOfQuantityOfSoldOut = document.createTextNode(
//       `${quantityOfSoldOutTicket[i]}`
//     );
//     createCommonTextOfBox.appendChild(textOfQuantityOfSoldOut);
//     //Appending
//     makeWarpperContentCol2Line2Objects.appendChild(
//       createIconsSyleForContentCol2
//     );
//     makeWarpperContentCol2Line2Objects.appendChild(createCommonTextOfBox);

//     //Third Child
//     let contentColumnThree = document.createElement("div");
//     contentColumnThree.classList.add("wrapperContentCol3");
//     //Third Child has Three Children (Append)
//     //First Child
//     let createContentCol3RowOne = document.createElement("div");
//     createContentCol3RowOne.classList.add("ContentCol3RowOne");
//     //First Child has two Children (Append)
//     //First Child
//     let createQuantityOfProduct = document.createElement("select");
//     createQuantityOfProduct.classList.add("dropDownBtnQuantity");
//     createQuantityOfProduct.setAttribute(
//       "id",
//       `ValueOfQuantityForShoppingCartPage${i}Item`
//     );
//     createQuantityOfProduct.classList.add("btn");
//     //First Child has 9 children(Append)
//     for (let j = 1; j <= 9; j++) {
//       let createOptionOfQuantity = document.createElement("option");
//       createOptionOfQuantity.setAttribute("value", `${j}`);
//       let textValue = document.createTextNode(`${j}`);
//       createOptionOfQuantity.appendChild(textValue);
//       //Appending
//       createQuantityOfProduct.appendChild(createOptionOfQuantity);
//     }
//     //Second Child
//     let createSalesModalStyle = document.createElement("p");
//     createSalesModalStyle.classList.add("SalesModalStyle");
//     let createtextOfSalesPercent = document.createTextNode(
//       `${quantityOfSalesPercent[i]}%`
//     );
//     createSalesModalStyle.appendChild(createtextOfSalesPercent);
//     //Appending
//     createContentCol3RowOne.appendChild(createQuantityOfProduct);
//     createContentCol3RowOne.appendChild(createSalesModalStyle);
//     //Second Child
//     let createContentCol3RowTwo = document.createElement("p");
//     createContentCol3RowTwo.classList.add("ContentCol3RowTwo");
//     createContentCol3RowTwo.setAttribute(
//       "id",
//       `ValueOfPriceForShoppingCartPage${i}Item`
//     );
//     let createTextOfpriceOfTicket = document.createTextNode(
//       `${priceOfTicket[i]}تومان`
//     );
//     createContentCol3RowTwo.appendChild(createTextOfpriceOfTicket);
//     //Third Child
//     let createbuyingBtnStyle = document.createElement("button");
//     createbuyingBtnStyle.classList.add("buyingBtnStyle");
//     createbuyingBtnStyle.classList.add("btn");
//     createbuyingBtnStyle.setAttribute("type", "submit");
//     createbuyingBtnStyle.setAttribute("id", `btnForShoppingProduct${i}Item`);
//     let textOfBtn = document.createTextNode("افزودن به سبد");
//     createbuyingBtnStyle.appendChild(textOfBtn);
//     //Appending
//     contentColumnThree.appendChild(createContentCol3RowOne);
//     contentColumnThree.appendChild(createContentCol3RowTwo);
//     contentColumnThree.appendChild(createbuyingBtnStyle);
//     //Appending Parent
//     myModalBox.appendChild(myImageProduct);
//     myModalBox.appendChild(contentColumnTwo);
//     myModalBox.appendChild(contentColumnThree);
//     //Appending Grand Parent
//     wrapperTotalModalDiffTickets.appendChild(myModalBox);

//     //Sending Data To Shopping Cart Page
//     createbuyingBtnStyle.setAttribute(
//       "onclick",
//       "getTheIdsOfShoppingBtn(`${this.id}`) "
//     );
//   }
// };

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

//----------------------------------------------------------------------------
//Making Timer For Product
// Set the date we're counting down to
//Nov . 30 , 2022 : Django
//Jan 5, 2024 15:37:25 : Js
var myDate = document.getElementById("day").innerText;
var countDownDate = new Date(`${myDate} 15:37:25`).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = `${days} روز : `;
  document.getElementById("hour").innerHTML = ` ${hours} ساعت : `;
  document.getElementById("minute").innerHTML = ` ${minutes} دقیقه : `;
  document.getElementById("second").innerHTML = ` ${seconds} ثانیه`;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "EXPIRED";
    document.getElementById("day").style.color = "#e34a6f";
    document.getElementById("hour").innerHTML = "";
    document.getElementById("minute").innerHTML = "";
    document.getElementById("second").innerHTML = "";
  }
}, 1000);
