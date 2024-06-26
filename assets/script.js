var menutoggler = document.getElementById("menutoggler");
var themetoggler = document.getElementById("themetoggler");
var menustate = false;
var currentTheme = "light";

themetoggler.addEventListener("click", () => { toggleTheme() });
menutoggler.addEventListener("click", () => { toggleMobileMenu() });

window.onload = () => {
    var savedTheme = localStorage.getItem("theme");
    if (currentTheme !== savedTheme) { toggleTheme() }
};

function toggleTheme() {
    document.body.classList.toggle("darkmode");
    currentTheme === "light" ? currentTheme = "dark" : currentTheme = "light";
    localStorage.setItem("theme", currentTheme)
};

function toggleMobileMenu() {
    if (menustate === false) {
        document.querySelector("nav").style.opacity = "1";
        document.querySelector("nav").style.visibility = "visible";
        menustate = true
    } else {
        document.querySelector("nav").style.opacity = "0";
        document.querySelector("nav").style.visibility = "hidden";
        menustate = false
    }
}