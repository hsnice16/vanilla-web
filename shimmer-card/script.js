(function main() {
  const btnTheme = document.getElementsByClassName("btn-theme")[0];
  const moonDiv = document.getElementsByClassName("moon")[0];
  const sunDiv = document.getElementsByClassName("sun")[0];
  const htmlElement = document.documentElement;

  const handleBtnThemeClick = () => {
    if (!htmlElement.hasAttribute("data-theme")) {
      htmlElement.setAttribute("data-theme", "dark");

      sunDiv.classList.remove("hide");
      moonDiv.classList.add("hide");
    } else {
      htmlElement.removeAttribute("data-theme");

      moonDiv.classList.remove("hide");
      sunDiv.classList.add("hide");
    }
  };

  btnTheme.addEventListener("click", handleBtnThemeClick);

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");

  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
    moonDiv.classList.add("hide");
  } else {
    sunDiv.classList.add("hide");
  }
})();
