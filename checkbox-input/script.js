(function main() {
  const htmlElement = document.documentElement;
  const formEle = document.getElementsByTagName("form")[0];
  const innerRectElements = document.getElementsByClassName("inner-rect");

  const handleClickEvent = (event) => {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
      const clickedInnerRect = Array.from(innerRectElements).find(
        (ele) => ele.dataset.for === event.target.id
      );

      clickedInnerRect.classList.toggle("checked-state");
    }
  };

  formEle.addEventListener("click", handleClickEvent);

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");
  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
  }
})();
