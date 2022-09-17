const dropdowns = document.getElementsByClassName("dropdown");
const dropdownItems = document.getElementsByClassName("dropdown-items");
const dropdownTitles = document.getElementsByClassName("dropdown-title");

const handleDropdownTitleClick = (event, index) => {
  let newState;

  if (event.currentTarget.dataset.state === "close") {
    newState = "open";
  } else {
    newState = "close";
  }

  event.currentTarget.dataset.state = newState;
  dropdownItems[index].classList.toggle("hide");
  index === 0 && dropdowns[1].classList.toggle("dropdown-animate");
};

for (let index = 0; index < dropdownTitles.length; index++) {
  dropdownTitles[index].addEventListener("click", (event) => {
    handleDropdownTitleClick(event, index);
  });
}
