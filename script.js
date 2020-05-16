const themeSwitcher = document.getElementById("theme-switcher-select");
const stylesheet = document.getElementById("theme-stylesheet");

const defaultThemeUrl = stylesheet.href.split("/");
const defaultTheme = defaultThemeUrl[defaultThemeUrl.length - 1];

setTheme(defaultTheme);

function setTheme(theme) {
  stylesheet.href = theme;
  document.getElementsByTagName("h1")[0].innerText = theme;
}

themeSwitcher.addEventListener("change", (e) => setTheme(e.target.value));

const tabs = document.querySelectorAll(".tabs");

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];

  const tabButtons = tab.querySelectorAll("button.tab-title");

  tabButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      tabButtons.forEach((button) => {
        if (button.id === e.target.id) {
          button.classList.add("active");
          openTab(e, tab);
        } else {
          button.classList.remove("active");
        }
      });
    })
  );
}

function openTab(event, tab) {
  const articles = tab.querySelectorAll("article");
  articles.forEach((art) => art.classList.remove("active"));
  const article = tab.querySelector(`[for=${event.target.id}]`);
  article.classList.add("active");
}
