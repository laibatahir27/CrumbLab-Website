
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var email = document.querySelector("#email");
var message = document.querySelector("#message");
var form = document.querySelector(".contact-form");

firstName.addEventListener("change", checkFirstName);
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
message.addEventListener("change", checkMessage);
form.addEventListener("submit", validateForm);
function checkFirstName() {
    if (this.value.length < 3) {
        this.style.backgroundColor = "lightcoral";
    } else {
        this.style.backgroundColor = "white";
    }
}
function checkLastName() {
    if (this.value.length < 3) {
        this.style.backgroundColor = "lightcoral";
    } else {
        this.style.backgroundColor = "white";
    }
}
function checkEmail() {
    var reg = /[^@]+@[^\.]+\.+[^\.]+/; 
    if (!reg.test(this.value)) {
        this.style.backgroundColor = "lightcoral";
    } else {
        this.style.backgroundColor = "white";
    }
}
function checkMessage() {
    if (this.value.length < 5) {
        this.style.backgroundColor = "lightcoral";
    } else {
        this.style.backgroundColor = "white";
    }
}
function validateForm(e) {
    var reg = /[^@]+@[^\.]+\.+[^\.]+/;
    if (
        firstName.value.length < 3 ||
        lastName.value.length < 3 ||
        !reg.test(email.value) ||
        message.value.length < 5
    ) {
        e.preventDefault(); 
        alert("Please fill all fields correctly.");
    }
}
function lazyLoadImages() {
    const images = document.querySelectorAll("img");
    for (let img of images) {
        if (img.dataset.src) {
            if (img.offsetTop < (window.innerHeight + window.pageYOffset)) {
                img.src = img.dataset.src; 
                img.removeAttribute("data-src"); 
            }
        }
    }
}
document.addEventListener("scroll", lazyLoadImages);
window.addEventListener("resize", lazyLoadImages);
window.addEventListener("orientationchange", lazyLoadImages);
lazyLoadImages();
