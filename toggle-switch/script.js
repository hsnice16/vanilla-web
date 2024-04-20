(function main() {
  const containerEle = document.getElementsByClassName("container")[0];
  const circleEle = document.getElementsByClassName("circle")[0];
  const htmlElement = document.documentElement;

  const handleClickEvent = () => {
    circleEle.classList.toggle("right-0");
  };

  containerEle.addEventListener("click", handleClickEvent);

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");
  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
  }
})();
