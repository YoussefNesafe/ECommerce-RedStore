//For Menu Toggle
var menuItems = document.querySelector("#menuItems"),
  //For Login and Register form
  loginForm = document.getElementById("log"),
  registerForm = document.querySelector("#regi"),
  indicator = document.getElementById("indicator");
menuItems.style.maxHeight = "0px";
function menutoggle() {
  if ((menuItems.style.maxHeight = "0px")) {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

//For Product Gallery
var productImg = document.querySelector(".productImg"),
  smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};

function register() {
  registerForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  registerForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}
