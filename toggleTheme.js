const toggleThemeBtn = document.getElementById("toggleTheme");
const html = document.documentElement;

const themes = {
    white:'<ion-icon class="icon" name="moon-outline"></ion-icon>',
    dark:'<ion-icon class="icon" name="sunny-outline"></ion-icon>',
}

function getStoredTheme() {
  return localStorage.getItem("theme");
}

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
}

function toggleTheme() {
  const storedTheme = getStoredTheme();

  const newTheme = storedTheme === "white" ? "dark" : "white";

  localStorage.setItem("theme", newTheme);

  applyTheme(newTheme);

  toggleThemeBtn.innerHTML=`${themes[newTheme]}`
}

const initialTheme = getStoredTheme() || "white";

localStorage.setItem("theme", initialTheme);

applyTheme(initialTheme);

toggleThemeBtn.addEventListener("click", () => {
  toggleTheme();
});

