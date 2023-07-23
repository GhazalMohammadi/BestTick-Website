"use strict";
//--------------------------------------------------------------
//If S.O SignIn what Happend To SignIn/SignUp Btn
let howToShowSignInSignUpBtn = function (firstName, lastName) {
  let SignBtnStyle = document.getElementById("SignBtnStyle");
  SignBtnStyle.innerHTML = `${firstName} ${lastName}`;
  SignBtnStyle.setAttribute("onclick", "location.href='./UserPanelPage.html'");
};
var whatIsTheStausOfSignIn = false;
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
// Animating Picture Slider
let SliderCounter = 0;
let SLiderPicturesClass = document.getElementsByClassName("picOfSlider");
let animatingSliderRight = function () {
  if (SliderCounter !== SLiderPicturesClass.length) {
    SLiderPicturesClass[SliderCounter].style.display = "none";
    SliderCounter++;
  }
  if (SliderCounter === SLiderPicturesClass.length) {
    for (let i = 0; i < SLiderPicturesClass.length; i++) {
      SLiderPicturesClass[i].style.display = "block";
    }
    SliderCounter = 0;
  }
};
let animatingSliderLeft = function () {
  if (SliderCounter === 0) {
    for (let i = 0; i < SLiderPicturesClass.length - 1; i++) {
      SLiderPicturesClass[i].style.display = "none";
    }
    SliderCounter = SLiderPicturesClass.length - 1;
  } else {
    SLiderPicturesClass[SliderCounter - 1].style.display = "block";
    SliderCounter--;
  }
};

// Autamatic Slider
//  function animatingSliderAutomatic () {
//   for (let i = 0; i < SLiderPicturesClass.length; i++) {
//     if(SliderCounter!==SLiderPicturesClass.length){
//       SLiderPicturesClass[i].style.display = "none";
//       await sleep(20);
//       SliderCounter++;
//     }
//     if (SliderCounter === SLiderPicturesClass.length) {
//       for (let j = 0; j < SLiderPicturesClass.length; j++) {
//         SLiderPicturesClass[j].style.display = "block";
//       }
//       SliderCounter = 0;
//     }
//   }
// };
// while(true){
//   animatingSliderAutomatic();
// }
//--------------------------------------------------------------
//Clicking Menu Button
let wrapperMenuSide = document.getElementById("wrapperMenuSide");
let ArrowRightIcon = document.getElementById("ArrowRightIcon");
let crossIconStyle = document.getElementById("crossIconStyle");
let menuIconStyle = document.getElementById("menuIconStyle");
let statusMenuButtton = 1;
let screenSize = window.innerWidth;

let clickingmenuButton = function () {
  //Opening Menu
  screenSize = window.innerWidth;
  if (statusMenuButtton === 1 && screenSize > 1000) {
    crossIconStyle.style.visibility = "visible";
    menuIconStyle.style.visibility = "hidden";
    wrapperMenuSide.style.transition = "1s";
    wrapperMenuSide.style.right = "0";
    for (let i = 0; i < SLiderPicturesClass.length; i++) {
      SLiderPicturesClass[i].style.transition = "0.95s";
      SLiderPicturesClass[i].style.width = "76.8%";
    }
    ArrowRightIcon.style.transition = "0.95s";
    ArrowRightIcon.style.right = "22.5vw";
    statusMenuButtton = 0;
  }
  // if our screen become less than 1000
  else if (statusMenuButtton === 1 && screenSize <= 1000) {
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
    for (let i = 0; i < SLiderPicturesClass.length; i++) {
      SLiderPicturesClass[i].style.transition = "1.1s";
      SLiderPicturesClass[i].style.width = "95.8%";
    }
    ArrowRightIcon.style.transition = "1.1s";
    ArrowRightIcon.style.right = "3.2vw";
    statusMenuButtton = 1;
  }
};

//-----------------------------------------------------------------
// Making Locations ....
let LocationStyle = document.getElementsByClassName("LocationStyle");
let SplitingChars = [];
let newLocation = "";
let abriviationOfLocation = function () {
  for (let i = 0; i < LocationStyle.length; i++) {
    for (const t in LocationStyle[i].innerHTML) {
      SplitingChars.push(LocationStyle[i].innerHTML[t]);
    }
    if (SplitingChars.length > 11) {
      for (let j = 10; j < 12; j++) {
        SplitingChars[j] = ".";
      }
      let oldLengthOfSplitingChars = SplitingChars.length;
      for (let z = 12; z < oldLengthOfSplitingChars; z++) {
        SplitingChars.pop();
      }
      for (const key in SplitingChars) {
        newLocation += SplitingChars[key];
      }
      LocationStyle[i].innerHTML = newLocation;
      newLocation = "";
      SplitingChars = [];
    } else {
      newLocation = "";
      SplitingChars = [];
      continue;
    }
  }
};
abriviationOfLocation();

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//When I clicked one Of the Category Item of MenuSide What Should Happened
let sendingDataOfCategoryToCategoryPage = function (
  contentOfBtnThatHasClickedOnMenu,
  typeOfElementWeClicked
) {
  let arrayOfMenuSideOption = [
    "بست تیک های امروز",
    "لحظه آخری",
    "رستوران",
    "تفریحی",
    "ورزشی",
    "هنر",
    "خدمات",
    "کد تخفیف",
  ];
  let getTheElementWeClicked = document.getElementById(
    `${contentOfBtnThatHasClickedOnMenu}`
  ).value;
  // alert(getTheElementWeClicked);
  for (let i = 0; i < arrayOfMenuSideOption.length; i++) {
    if (getTheElementWeClicked == i + 1) {
      getTheElementWeClicked = arrayOfMenuSideOption[i];
    }
  }
  if (typeOfElementWeClicked == "img") {
    let getAltOfPictures = document.getElementById(
      `${contentOfBtnThatHasClickedOnMenu}`
    ).alt;
    for (let i = 0; i < arrayOfMenuSideOption.length; i++) {
      if (getAltOfPictures == i + 1) {
        getTheElementWeClicked = arrayOfMenuSideOption[i];
      }
    }
  }
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
