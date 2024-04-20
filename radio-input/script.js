(function main() {
  const formEle = document.getElementsByTagName("form")[0];
  const innerCircleElements = document.getElementsByClassName("inner-circle");
  const htmlElement = document.documentElement;

  const handleClickEvent = (event) => {
    if (event.target.tagName === "INPUT" && event.target.type === "radio") {
      let clickedInnerCircle;

      Array.from(innerCircleElements).forEach((ele) => {
        ele.classList.remove("checked-state");

        if (ele.dataset.for === event.target.id) {
          clickedInnerCircle = ele;
        }
      });

      clickedInnerCircle.classList.add("checked-state");
    }
  };

  formEle.addEventListener("click", handleClickEvent);

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");
  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
  }
})();
