"use strict";
//--------------------------------------------------------------
// //If S.O SignIn what Happend To SignIn/SignUp Btn
// let howToShowSignInSignUpBtn = function (firstName, lastName) {
//   let SignBtnStyle = document.getElementById("SignBtnStyle");
//   SignBtnStyle.innerHTML = `${firstName} ${lastName}`;
//   SignBtnStyle.setAttribute("onclick", "location.href='./UserPanelPage.html'");
// };
// let whatIsTheStausOfSignIn = false;
// let identityOfPersonWhoSignIn = { firstName: "غزال", lastName: "محمدی" };
// let howToShowTheShoppingCartPage = function (exactStatus) {
//   if (exactStatus) {
//     howToShowSignInSignUpBtn(
//       identityOfPersonWhoSignIn["firstName"],
//       identityOfPersonWhoSignIn["lastName"]
//     );
//   }
// };
// howToShowTheShoppingCartPage(whatIsTheStausOfSignIn);

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

//--------------------------------------------------------------------
//Place the UserName In PanelUser
// let placingUserNameInPanel = function () {
//   let userNameStyleTitle = document.getElementById("userNameStyleTitle");
//   userNameStyleTitle.innerHTML = `${identityOfPersonWhoSignIn["firstName"]} ${identityOfPersonWhoSignIn["lastName"]} خوش آمدید!`;
// };
// placingUserNameInPanel();

//--------------------------------------------------------------------------------
//Choosing Each List Option Of User Panel
let clickingOptionOfPanelListShowForms = function (
  activeLayer,
  diactiveLayerOne,
  diactiveLayerTwo
) {
  let getClassOfActiveLayer = document.getElementsByClassName(`${activeLayer}`);
  let getClassOfDiactiveLayerOne = document.getElementsByClassName(
    `${diactiveLayerOne}`
  );
  let getClassOfDiactiveLayerTwo = document.getElementsByClassName(
    `${diactiveLayerTwo}`
  );
  getClassOfActiveLayer[0].classList.remove(`hiddenFormStyle`);
  getClassOfDiactiveLayerOne[0].classList.add(`hiddenFormStyle`);
  getClassOfDiactiveLayerTwo[0].classList.add(`hiddenFormStyle`);
};

//---------------------------------------------------------------------
//Function : When Clicking On UserPanel Item
let clickingPanelItem = function (
  clickedItemId,
  clickedItemText,
  UnclickedBtnOne,
  UnclickedBtnTwo,
  activeLayer,
  diactiveLayerOne,
  diactiveLayerTwo
) {
  let itemBox = document.getElementById(`${clickedItemId}`);
  let itemText = document.getElementById(`${clickedItemText}`);
  let unClickedBtnOneItem = document.getElementById(`${UnclickedBtnOne}`);
  let unClickedBtnTwoItem = document.getElementById(`${UnclickedBtnTwo}`);
  let arrayOfDiActiveBtn = [unClickedBtnOneItem, unClickedBtnTwoItem];
  let wrapperTotalBodyMainPanelStyle = document.getElementsByClassName(
    "wrapperTotalBodyMainPanelStyle"
  );
  itemBox.style.background = "var(--bg-ColorUserPanel)";
  itemBox.style.boxShadow = "none";
  // itemText.style.color = "#fff";
  // wrapperTotalBodyMainPanelStyle[0].style.transition = "0.1s";
  wrapperTotalBodyMainPanelStyle[0].style.background =
    "var(--bg-ColorUserPanel)";
  for (const count in arrayOfDiActiveBtn) {
    arrayOfDiActiveBtn[count].style.background = "#dcdcdc";
    arrayOfDiActiveBtn[count].style.boxShadow = " 0 1px 5px gray";
  }

  clickingOptionOfPanelListShowForms(
    activeLayer,
    diactiveLayerOne,
    diactiveLayerTwo
  );
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
