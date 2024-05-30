var darkMode = false

function handle_dark_click() {
  if (darkMode == true) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
  darkMode = !darkMode;
}

document.getElementById('toggle-theme').addEventListener('click', handle_dark_click)