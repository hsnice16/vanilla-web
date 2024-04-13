const previewFrame = document.getElementsByClassName("preview-frame")[0];
const sidenavActions = document.getElementsByClassName("side-nav-action");
const spinnerElement = document.getElementsByClassName("spinner-container")[0];

function showSpinner() {
  previewFrame.classList.remove("show");
  previewFrame.classList.add("hide");

  spinnerElement.classList.remove("hide");
  spinnerElement.classList.add("show");
}

function hideSpinner() {
  spinnerElement.classList.remove("show");
  spinnerElement.classList.add("hide");

  previewFrame.classList.remove("hide");
  previewFrame.classList.add("show");
}

[...sidenavActions].forEach((sidenavAction) => {
  function handleAnchorClick() {
    showSpinner();

    function handleFrameLoad() {
      hideSpinner();
      previewFrame.removeEventListener("load", handleFrameLoad);
    }

    const href = sidenavAction.dataset.href;
    previewFrame.src = href;
    previewFrame.addEventListener("load", handleFrameLoad);
  }

  sidenavAction.addEventListener("click", handleAnchorClick);
});
