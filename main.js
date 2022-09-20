// VARIABLES

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

// FUNCTION

const navToggle = () => {
  if (btn.classList.contains("open")) {
    btn.classList.remove("open");
  } else {
    btn.classList.add("open");
  }
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
};

// EVENT LISTENER

btn.addEventListener("click", navToggle);
