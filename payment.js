let cardnumber = document.querySelector("#cardNumber");
cardnumber.addEventListener("input", function () {
  let number = cardnumber.value;
  let newNum = document.querySelector("#card-num");

  number = this.value.replace(/\D/g, '');
  if (number.length > 16) {
    number = value.substring(0, 16);
  }
  let formattedValue = number.replace(/(.{4})/g, '$1 ').trim();
  this.value = formattedValue;
  newNum.innerText = formattedValue || " ";
})

let holderInput = document.querySelector(".Holder-input");
holderInput.addEventListener("input", function () {
  let holder = document.querySelector(".holder")
  holder.innerHTML = holderInput.value
})

let exp = document.querySelector(".exp1");
exp.addEventListener("input", function () {
  let expValue = this.value.replace(/\D+/g, '');
  let formattedExp = '';
  if (expValue.length > 2) {
    formattedExp = expValue.slice(0, 2) + '/' + expValue.slice(2);
  } else {
    formattedExp = expValue;
  }
  document.querySelector(".exp0").textContent = formattedExp;
});
let atm = document.querySelector(".atm");
let upi = document.querySelector(".upi");
let cod = document.querySelector(".cod");
let emi = document.querySelector(".emi");
let pay = document.querySelectorAll(".card-details, .card-group");
let upiContainer = document.querySelector(".upi-container");
let codContainer = document.querySelector(".cod-container")

upi.addEventListener("click", function () {
  upi.classList.add("active")
  atm.classList.remove("active")
  cod.classList.remove("active")
  emi.classList.remove("active")

  pay.forEach(element => element.style.display = "none");
  upiContainer.style.display = "block";
  upiContainer.style.display = "flex";
  upiContainer.style.gap = "30px";
  upiContainer.style.marginLeft = "290px";
  codContainer.style.display = "none";

})
cod.addEventListener("click", function () {
  upi.classList.remove("active")
  atm.classList.remove("active")
  cod.classList.add("active")
  emi.classList.remove("active")

  pay.forEach(element => element.style.display = "none");
  upiContainer.style.display = "none";
  codContainer.style.display = "block";
})
emi.addEventListener("click", function () {
  upi.classList.remove("active")
  atm.classList.remove("active")
  cod.classList.remove("active")
  emi.classList.add("active")

  pay.forEach(element => element.style.display = "block");
  upiContainer.style.display = "none";
  codContainer.style.display = "none";
})
atm.addEventListener("click", function () {
  upi.classList.remove("active")
  atm.classList.add("active")
  cod.classList.remove("active")
  emi.classList.remove("active")

  pay.forEach(element => element.style.display = "block");
  upiContainer.style.display = "none";
  codContainer.style.display = "none";
})


let inputNumber = document.querySelector(".con");
let tester = document.querySelector(".cona");
let error = document.querySelector(".error");
tester.addEventListener("click", function () {
  if (inputNumber.value !== "252") {
    document.querySelector(".cod-bottom p").style.display = "block";
  } else {
    document.querySelector(".cod-bottom p").style.display = "none";

  }
});
let totalPrice = document.querySelector(".total-price")
let subTotal = document.querySelector(".sub");
let payBtns = document.querySelectorAll(".pay-btn span");
let priceBtns = document.querySelectorAll(".pay-btn");
let newDate1 = document.querySelector(".pay-s-2 .p2");

window.onload = () => {
  let total = null;
  let total1 = null;
   total = sessionStorage.getItem("total");
   total1 = sessionStorage.getItem("total1");

  if (total !== null) {
    totalPrice.textContent = subTotal.textContent = total;
    payBtns.forEach(btn => btn.textContent = total);
    price.textContent = total;
  } else if (total1 !== null) {
    totalPrice.textContent = subTotal.textContent = total1;
    payBtns.forEach(btn => btn.textContent = total1);
    price.textContent = total1;
  }

  let loginUser = localStorage.getItem("value");
  console.log(loginUser);
  let user = document.querySelector(".name");
  user.textContent = loginUser;



  newDate1.textContent = new Date().toDateString();

  let loader = document.querySelector(".container");
  let white = document.querySelector(".white");
  setTimeout(function () {
    loader.style.display = "none";
    white.style.display = "none";
  }, 1000);

}
let price = document.querySelector(".pay-s-price h1");
let priceDetails = document.querySelector(".p-s-main");
let back = document.querySelector(".bt-1");


priceBtns.forEach(button => button.addEventListener("click", function () {


  priceDetails.style.display = "block";


}))
back.addEventListener("click", function () {
  priceDetails.style.display = "none";
})

let home = document.querySelector(".bt-2");
home.addEventListener("click", function () {
  window.open("main.html", "_blank")
})

document.querySelector(".back-home").addEventListener("click", function () {
  window.open("main.html", "_blank")
})
document.querySelector(".back-products").addEventListener("click", function () {
  window.open("main.html#dress1", "_blank")
})


