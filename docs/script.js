const themeSwitcher = document.getElementById("theme-switcher-select");
const stylesheet = document.getElementById("theme-stylesheet");

let theme = stylesheet.href;

themeSwitcher.addEventListener("change", (e) => {
  stylesheet.href = e.target.value;
  document.getElementsByTagName("h1")[0].innerText = e.target.value;
});
