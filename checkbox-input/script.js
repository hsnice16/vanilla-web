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
