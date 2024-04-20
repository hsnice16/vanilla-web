(function main() {
  const htmlElement = document.documentElement;
  const list = document.getElementsByClassName("list")[0];
  let lastDraggedXPosition = 0;
  let draggedEle = null;

  list.addEventListener("drag", (event) => {
    if (event.target.classList.contains("draggable")) {
      draggedEle = event.target;
      draggedEle.style.opacity = 0;
    }
  });

  list.addEventListener("dragstart", () => {
    draggedEle && draggedEle.classList.add("dragging");
  });

  list.addEventListener("dragend", () => {
    draggedEle.style.opacity = 1;
    draggedEle.classList.remove("dragging");
  });

  list.addEventListener("dragover", (event) => {
    event.preventDefault();
    lastDraggedXPosition = event.clientX;
  });

  list.addEventListener("dragenter", (event) => {
    if (
      event.target.classList.contains("draggable") &&
      event.target !== draggedEle
    ) {
      if (event.target.getBoundingClientRect().left > lastDraggedXPosition) {
        const previousParentNode =
          event.target.parentNode.previousElementSibling;
        previousParentNode.innerHTML = "";
        previousParentNode.appendChild(event.target);
      } else {
        const nextParentNode = event.target.parentNode.nextElementSibling;
        nextParentNode.innerHTML = "";
        nextParentNode.appendChild(event.target);
      }
    }
  });

  list.addEventListener("drop", (event) => {
    if (event.target.classList.contains("list-item")) {
      draggedEle.style.opacity = 1;

      event.target.innerHTML = "";
      event.target.appendChild(draggedEle);
    } else if (event.target.classList.contains("draggable")) {
      draggedEle.style.opacity = 1;

      const parentNode = event.target.parentNode;
      parentNode.innerHTML = "";
      parentNode.appendChild(draggedEle);
    }
  });

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");
  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
  }
})();
