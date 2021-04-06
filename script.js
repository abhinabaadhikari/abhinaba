function home() {
    location.replace("index.html");
}

function photos() {
    location.replace("photos.html");
}
function contact() {
    location.replace("contact.html");
}
function facebook() {
  location.href="https://www.facebook.com/abhinaba.adhikari.fb";
}
function github() {
  location.href="https://github.com/";
}
function instagram() {
  location.href="https://www.instagram.com/abhinaba_adhikari/";
}
function linkedin() {
  location.href="https://www.linkedin.com/in/abhinaba-adhikari";
}

function navView() {
    if (document.getElementById("nav").style.overflow == "visible") {
        document.getElementById("nav").style.overflow = "hidden";
    } else {
        document.getElementById("nav").style.overflow = "visible";
    }
}
