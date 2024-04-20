(function main() {
  const slider = document.querySelector(".slider");
  const tabLinks = document.querySelectorAll(".tab-link");
  const htmlElement = document.documentElement;

  const getLeftOffset = (element) => element.getBoundingClientRect().left;

  const handleTabLinkClick = (event) => {
    event.stopPropagation();
    const clickedElementLeft = getLeftOffset(event.target);
    const clickedElementParentLeft = getLeftOffset(event.target.parentNode);
    slider.style.left = `${clickedElementLeft - clickedElementParentLeft}px`;
  };

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", handleTabLinkClick);
  });

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");
  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
  }
})();
