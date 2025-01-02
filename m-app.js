let likeElements = document.querySelectorAll(".like");
likeElements.forEach(function (likeElement) {
    likeElement.addEventListener("click", function () {
        let loveIcon = this.querySelector(".love");
        let dressContainer = this.closest(".dress-container");
        let wishlistContainer = document.querySelector(".wish-container");
        let emptyMessage = document.querySelector(".empty");
        if (loveIcon.classList.contains("fa-solid")) {
            loveIcon.classList.remove("fa-solid");
            let dressGroup = wishlistContainer.querySelector(".wish-flex");
            if (dressGroup) {
                wishlistContainer.removeChild(dressGroup);
            }
        } else {
            loveIcon.classList.add("fa-solid");
            emptyMessage.style.display = "none";
            let dressGroup = wishlistContainer.querySelector(".wish-flex");
            if (dressGroup) {
                let dressClone = dressContainer.cloneNode(true);
                let dress = dressGroup.appendChild(dressClone);
            } else {
                let dressGroup = document.createElement("div");
                dressGroup.classList.add("wish-container-group", "wish-flex");
                let dressClone = dressContainer.cloneNode(true);
                dressGroup.appendChild(dressClone);
                wishlistContainer.appendChild(dressGroup);
            }
        }
    });
});


let loved = document.querySelector(".loved");
let wish1 = document.querySelector(".li-3");

let cart = document.querySelector(".basket");
let cartContainer = document.querySelector(".li-0")

cart.addEventListener("click", carty);
cart.addEventListener('click', function () {
    navItems.forEach(item => item.classList.remove('underline-after'));
    cartContainer.classList.add('underline-after');
    window.scrollTo({
        top: cartContainer.offsetTop,
        behavior: "smooth",
    })
});

loved.addEventListener("click", wish);
loved.addEventListener("mouseover", () => {
    loved.classList.remove("fa-regular");
    loved.classList.add("fa-solid");
    loved.style.color = "red";
});

loved.addEventListener("mouseout", () => {
    loved.classList.remove("fa-solid");
    loved.classList.add("fa-regular");
    loved.style.color = "black";
});
loved.addEventListener('click', function () {
    navItems.forEach(item => item.classList.remove('underline-after'));
    wish1.classList.add('underline-after');
    window.scrollTo({
        top: wish1.offsetTop,
        behavior: "smooth",
    })
});


let wid = 0;
let toggles = document.querySelectorAll(".toggle");
let groups = document.querySelectorAll(".dress-container-group");

toggles.forEach((toggle, index) => {
    toggle.addEventListener("click", () => exp(index));
});

function exp(index) {
    if (wid <= 460) {
        groups[index].style.height = "1400px";
        toggles[index].style.display = "none";
    }
}

let mItem1 = document.querySelector(".pro-cat:nth-child(1)");
let mItem2 = document.querySelector(".pro-cat:nth-child(2)");
let mItem3 = document.querySelector(".pro-cat:nth-child(3)");
let mItem4 = document.querySelector(".pro-cat:nth-child(4)");

mItem1.addEventListener("click",function(){
this.classList.add("border1")
mItem2.classList.remove("border2")
mItem3.classList.remove("border3")
mItem4.classList.remove("border4")
})

mItem2.addEventListener("click",function(){
this.classList.add("border2")
mItem1.classList.remove("border1")
mItem3.classList.remove("border3")
mItem4.classList.remove("border4")
})

mItem3.addEventListener("click",function(){
this.classList.add("border3")
mItem2.classList.remove("border2")
mItem1.classList.remove("border1")
mItem4.classList.remove("border4")
})

mItem4.addEventListener("click",function(){
this.classList.add("border4")
mItem2.classList.remove("border2")
mItem3.classList.remove("border3")
mItem1.classList.remove("border1")
})

let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let mov1 = document.querySelector(".item-img1");

let item3 = document.querySelector(".item3");
let mov2 = document.querySelector(".item-img2");

let item4 = document.querySelector(".item4");
let mov3 = document.querySelector(".item-img3");

let line = document.querySelector(".line");

// ---------profile---------

item1.addEventListener("click", function () {
    mov1.style.top = "-120" + "px";
    mov1.style.transform = "rotate(-80deg)";

    mov2.style.top = "-120" + "px";

    mov3.style.left = "-120" + "px";

    line.style.left = "7.5px";
    line.style.backgroundColor = "#00AAD2";
});

// ---------shoe----------

item2.addEventListener("click", function () {
    mov1.style.top = "0" + "px";
    mov1.style.transform = "rotate(0deg)";

    mov2.style.top = "-120" + "px";

    mov3.style.left = "-120" + "px";

    line.style.left = "calc((100%/4) + 5px)"
    line.style.backgroundColor = "#7F6EA2";
});

// --------bag--------

item3.addEventListener("click", function () {
    mov2.style.top = "0" + "px";


    mov1.style.top = "-120" + "px";
    mov1.style.transform = "rotate(-80deg)";

    mov3.style.left = "-120" + "px";
    line.style.left = "calc(((100%/4)*2) + 5px)"
    line.style.backgroundColor = "#C68500";
});
// ----watch--------

item4.addEventListener("click", function () {
    mov3.style.left = "230" + "px";

    mov1.style.top = "-120" + "px";
    mov1.style.transform = "rotate(-80deg)";

    mov2.style.top = "-120" + "px";

    line.style.left = "calc(((100%/4)*3) + 5px)"
    line.style.backgroundColor = "#005C57";
});

// --------nav-effect-------------

const navItems = document.querySelectorAll('.p-nav li');


navItems.forEach(nav => {
    nav.addEventListener('click', function () {

        navItems.forEach(item => item.classList.remove('underline-after'));


        nav.classList.add('underline-after');
    });
});

$(document).ready(function () {
    $(".li-0").click(function () {
        carty()
        
    })

    $(".li-1").click(function () {
        $(".cart").hide(300);
        $(".wish-container").hide(300);
        $(".addr").hide(300);
        $(".edit-group").show(300);

    })

    $(".li-2").click(function () {
        $(".cart").hide(300);
        $(".edit-group").hide(300);
        $(".addr").show(300);
        $(".wish-container").hide(300);
    })

    $(".li-3").click(function () {
        wish();
    });
});

function wish() {
    $(".cart").hide(300);
    $(".edit-group").hide(300);
    $(".addr").hide(300);
    $(".wish-container,.empty-wish").show(300);
}
function carty(){
    $(".cart").show(300);
        $(".wish-container").hide(300);
        $(".addr").hide(300);
        $(".edit-group").hide(300);
}


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

$(document).ready(function () {

    $(".item1").click(function () {
        $(".profile-container").show(300);
        $(".shoe-container").hide(300);
        $(".bag-container").hide(300);
        $(".watch-container").hide(300);
        $(".offer-container").hide(300);
    })

    $(".item2,.pro-cat:nth-child(2)").click(function () {
        $(".shoe-container").show(300);
        $(".bag-container").hide(300);
        $(".watch-container").hide(300);
        $(".profile-container").hide(300);
        $(".offer-container").hide(300);
    })

    $(".item3,.pro-cat:nth-child(3)").click(function () {
        $(".shoe-container").hide(300);
        $(".bag-container").show(300);
        $(".watch-container").hide(300);
        $(".profile-container").hide(300);
        $(".offer-container").hide(300);
    })

    $(".item4,.pro-cat:nth-child(4)").click(function () {
        $(".shoe-container").hide(300);
        $(".bag-container").hide(300);
        $(".watch-container").show(300);
        $(".profile-container").hide(300);
        $(".offer-container").hide(300);
    })

    //mobile
    $(".pro-cat:nth-child(1)").click(function () {
        $(".profile-container").hide(300);
        $(".shoe-container").hide(300);
        $(".bag-container").hide(300);
        $(".watch-container").hide(300);
        $(".offer-container").show(300);
    })

})
let userid = document.querySelector(".userid");

let loginUser = localStorage.getItem("value");

if (loginUser) {
    loginUser = loginUser.toUpperCase();
    userid.innerHTML = `<b>${loginUser}</b>`;
} else {
    console.error("No user is logged in.");
    userid.innerHTML = `<b>User not found</b>`;
}

const images = document.querySelectorAll(".image-down");
images.forEach(image => {
    image.addEventListener("click", () => {
        updateNew(image.src,
            image.alt,
            image.getAttribute('data-main-image1'),
            image.getAttribute('data-main-image2'),
            image.getAttribute('data-main-image3'),
            image.getAttribute('data-main-image4'),
            image.getAttribute('data-description'));
    });
});

function updateNew(imgsrc, imgAlt, img1, img2, img3, img4, price) {
    sessionStorage.setItem("imgnew", imgsrc);
    sessionStorage.setItem("imgtxt", imgAlt);
    sessionStorage.setItem("img1", img1);
    sessionStorage.setItem("img2", img2);
    sessionStorage.setItem("img3", img3);
    sessionStorage.setItem("img4", img4);
    sessionStorage.setItem("price", price);
    window.open('product.html', '_blank');
}
document.addEventListener('DOMContentLoaded', function () {
    const cartBtn = document.querySelectorAll(".dress-cart");


    function updateCartSubtotal() {
        const subtotals = document.querySelectorAll('.product-div1 p:last-of-type');
        let total = 0;
        subtotals.forEach(subtotal => {
            const value = subtotal.textContent.replace('₹', '');
            total += parseFloat(value) || 0;
        });
        let cart = document.querySelector('.cart-sub-total');
        cart.textContent = `₹${total.toFixed(2)}`;
        let totalCart = document.querySelector(".total1");
        totalCart.textContent = cart.textContent;





        let couponInput = document.querySelector(".coupon").value;
        let couponBtn = document.querySelector(".coupon-btn");
        couponBtn.addEventListener("click", () => {
            if (couponInput == "welcome") {

                let discount = total * 0.10;
                let discountedTotal = total - discount;
                totalCart.textContent = `₹${discountedTotal.toFixed(2)}`;
            }
        })
    }
    document.querySelector(".return").addEventListener("click", () => {

        window.location.href = "#body-section"

    })

    cartBtn.forEach(button => {
        button.addEventListener("click", function () {
            const dressContainer = this.closest('.dress-container');
            const dressImg = dressContainer.querySelector(".image-down");
            const dressName = dressContainer.querySelector('.dress-name').textContent;
            const dressPrice = parseFloat(dressContainer.querySelector('.d-price span').textContent.replace('₹', ''));

            const cartItem = document.createElement('div');
            cartItem.classList.add('product-div1');

            const imageProduct = document.createElement('div');
            imageProduct.classList.add('image-product');

            const cartImage = dressImg.cloneNode(true);
            cartImage.setAttribute('width', '47');
            cartImage.setAttribute('height', '50');
            imageProduct.appendChild(cartImage);

            const cartText = document.createElement('p');
            cartText.textContent = dressName;
            imageProduct.appendChild(cartText);

            cartItem.appendChild(imageProduct);

            const priceElement = document.createElement('p');
            priceElement.textContent = `₹${dressPrice.toFixed(2)}`;
            cartItem.appendChild(priceElement);

            const countDiv = document.createElement('div');
            countDiv.classList.add('count');
            const cartCount = document.createElement('input');
            cartCount.setAttribute("type", "number");
            cartCount.setAttribute("value", "1");
            cartCount.setAttribute("min", "1");
            countDiv.appendChild(cartCount);
            cartItem.appendChild(countDiv);

            const subtotalElement = document.createElement('p');
            subtotalElement.textContent = `₹${dressPrice.toFixed(2)}`;
            cartItem.appendChild(subtotalElement);

            const cartContainer = document.querySelector('.product-group');
            cartContainer.appendChild(cartItem);


            updateCartSubtotal();

            cartCount.addEventListener('input', function () {
                const quantity = parseInt(this.value, 10) || 1;
                subtotalElement.textContent = `₹${(dressPrice * quantity).toFixed(2)}`;


                updateCartSubtotal();
            });

            this.disabled = true;
        });
    });
});

let totalCart = document.querySelector(".total1");



document.querySelector("#check-btn1").addEventListener("click", () => {
    
    let total = totalCart.textContent.replace('₹', '');
    sessionStorage.setItem("total", total);
    window.location.href = 'payment.html';
});


let editButtons = document.querySelectorAll(".edit");
let inputFields = document.querySelectorAll(".input");
let saveButtons = document.querySelectorAll(".save");

inputFields.forEach(input => {
    input.disabled = true;
    input.classList.add("disabled");
});

editButtons.forEach((editButton, index) => {
    editButton.addEventListener("click", function () {
        inputFields[index].disabled = false;
        inputFields[index].classList.remove("disabled");
        saveButtons[index].style.display = "block";
    });
});

saveButtons.forEach((saveButton, index) => {
    saveButton.addEventListener("click", function () {
        inputFields[index].placeholder = inputFields[index].value;
        inputFields[index].disabled = true;
        inputFields[index].classList.add("disabled");
        saveButton.style.display = "none";
    });
});

document.querySelectorAll(".r-add span:nth-child(2)").forEach(del => {
    del.addEventListener("click", function() {
       
        let address = del.closest(".add");
        if (address) {
            address.style.display = "none";
            document.querySelector(".l-line").style.display = "none";
        }
    });
});
window.onload = function(){
    let loader = document.querySelector(".container");
    let white = document.querySelector(".white");
    setTimeout(function(){
        loader.style.display = "none";
        white.style.display = "none";
    },1000);
}
let profileUser = document.querySelector(".peru");
let profile = document.querySelector(".thala");
profile.addEventListener("click",function(){
    profileUser.style.display="block";
    profileUser.textContent = `Hi ${loginUser}`;
})
console.log(mItem1, mItem2, mItem3, mItem4);
