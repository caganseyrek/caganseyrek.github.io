const themeButton = document.getElementById("themetoggle");
let theme = "light";

const toggleTheme = () => {
  theme === "light"
    ? document.body.classList.add("darkmode")
    : document.body.classList.remove("darkmode");
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
};

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && savedTheme !== theme) toggleTheme();
};

themeButton.addEventListener("click", () => toggleTheme());
