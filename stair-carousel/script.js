(function main() {
  const htmlElement = document.documentElement;

  function moveToSelected(element) {
    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextSecond");
    $(prevSecond).removeClass().addClass("prevSecond");

    $(nextSecond).nextAll().removeClass().addClass("hideRight");
    $(prevSecond).prevAll().removeClass().addClass("hideLeft");
  }

  // Keyboard events
  $(document).keydown(function (e) {
    e.preventDefault();

    switch (e.which) {
      case 37:
        moveToSelected("prev");
        break;

      case 39:
        moveToSelected("next");
        break;

      default:
        return;
    }
  });

  // Mouse click
  $("#carousel div").click(function () {
    moveToSelected($(this));
  });

  // Buttons events
  $("#prev").click(function () {
    moveToSelected("prev");
  });

  $("#next").click(function () {
    moveToSelected("next");
  });

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");
  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
  }
})();
