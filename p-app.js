const containers = document.querySelectorAll('.scrollable-container');

containers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
});
let mainImg = document.querySelector(".pro-img");
window.onload = () => {
    let newImg = sessionStorage.getItem("imgnew");
    let newTxt = sessionStorage.getItem("imgtxt");
    let img1 = sessionStorage.getItem("img1");
    let img2 = sessionStorage.getItem("img2");
    let img3 = sessionStorage.getItem("img3");
    let img4 = sessionStorage.getItem("img4");
    let price = sessionStorage.getItem("price");
    if (newImg) {
        mainImg.src = newImg;
    }
    if (newTxt) {
        document.querySelector('.p-1').textContent = newTxt;

    }
    if (img1) {
        document.querySelector('.mini1').src = img1;
    }
    if (img2) {
        document.querySelector('.mini2').src = img2;
    }
    if (img3) {
        document.querySelector('.mini3').src = img3;
    }
    if (img4) {
        document.querySelector('.mini4').src = img4;
    }
    if (price) {
        document.querySelector('.pr').textContent = price;
    }

    let loader = document.querySelector(".container");
    let white = document.querySelector(".white");
    setTimeout(function(){
        loader.style.display = "none";
        white.style.display = "none";
    },1000);
}

let mini1 = document.querySelector(".mini1");
let mini2 = document.querySelector(".mini2");
let mini3 = document.querySelector(".mini3");
let mini4 = document.querySelector(".mini4");
let temp;
function swapImage() {
    temp = mainImg.src;
    mainImg.src = this.src;
    this.src = temp;
    this.style.width = "106.51px";
    this.style.height = "137px";
}

mini1.addEventListener("click",swapImage);
mini2.addEventListener("click",swapImage);
mini3.addEventListener("click",swapImage);
mini4.addEventListener("click",swapImage);


document.querySelector(".back-home").addEventListener("click", function () {
    window.open("main.html", "_blank")
  })
  document.querySelector(".back-products").addEventListener("click", function () {
    window.open("main.html#dress1", "_blank")
  })
  let totalCart = document.querySelector(".pr span");
  document.querySelector(".bt-4").addEventListener("click", () => {
    
    let total = totalCart.textContent.replace('₹', '');
    sessionStorage.setItem("total1", total);
    window.location.href = 'payment.html';
});

  