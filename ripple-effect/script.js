(function main() {
  const btnEle = document.getElementsByTagName("button")[0];
  const htmlElement = document.documentElement;

  const handleBtnClick = (event) => {
    const eleWithRippleClass = document.getElementsByClassName("ripple")[0];

    if (eleWithRippleClass) {
      eleWithRippleClass.remove();
    }

    const spanEle = document.createElement("span");
    spanEle.className = "ripple";

    const circleDiameter = Math.max(btnEle.clientWidth, btnEle.clientHeight);
    const circleRadius = circleDiameter / 2;

    spanEle.style.top = `${event.pageY - (btnEle.offsetTop + circleRadius)}px`;
    spanEle.style.left = `${
      event.pageX - (btnEle.offsetLeft + circleRadius)
    }px`;
    spanEle.style.width = spanEle.style.height = `${circleDiameter}px`;

    btnEle.appendChild(spanEle);
  };

  btnEle.addEventListener("click", handleBtnClick);

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");
  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
  }
})();
