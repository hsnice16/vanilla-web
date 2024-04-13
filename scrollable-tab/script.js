const slider = document.querySelector(".slider");
const tabLinks = document.querySelectorAll(".tab-link");

const getLeftOffset = (element) => element.getBoundingClientRect().left;

const handleTabLinkClick = (event) => {
  const clickedElementLeft = getLeftOffset(event.target);
  const clickedElementParentLeft = getLeftOffset(event.target.parentNode);
  slider.style.left = `${clickedElementLeft - clickedElementParentLeft}px`;
};

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", handleTabLinkClick);
});
