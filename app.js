const login = document.querySelector(".image-div");
const reg = document.querySelector(".reg-link");
const login1 = document.querySelector("#login");
const body = document.querySelector("body");
const shadow = document.querySelector(".shadow");
let pos = 0;
let animationFrameId;
let user = document.querySelector(".user1")

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keyup", () => { 
    localStorage.setItem("value", user.value);
})
})

function animate(frameCallback) {
    cancelAnimationFrame(animationFrameId);
    function step() {
        if (frameCallback()) {
            animationFrameId = requestAnimationFrame(step);
        }
    }
    step();
}

function frame() {
    if (pos < 540) {
        pos += 5;
        login.style.right = pos + 'px';
        return true;
    }
    return false;
}

function reFrame() {
    if (pos > 0) {
        pos -= 5;
        login.style.right = pos + 'px';
        return true;
    }
    return false;
}

reg.addEventListener("click", function () {
    animate(frame);
    body.style.backgroundColor = "#FFF5FD";
    login.style.backgroundColor = "#C7BED9";
    shadow.style.backgroundColor = "#9C95AB";
});

login1.addEventListener("click", function () {
    animate(reFrame);
    body.style.backgroundColor = "#F5FFFD";
    login.style.backgroundColor = "#00BAB0";
    shadow.style.backgroundColor = "#00BAB0";
});

