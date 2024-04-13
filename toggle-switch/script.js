const containerEle = document.getElementsByClassName("container")[0];
const circleEle = document.getElementsByClassName("circle")[0];

const handleClickEvent = () => {
  circleEle.classList.toggle("right-0");
};

containerEle.addEventListener("click", handleClickEvent);
