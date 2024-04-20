(function main() {
  const htmlElement = document.documentElement;

  // theme initially as system
  const theme = matchMedia("(prefers-color-scheme: dark)");
  if (theme.matches) {
    htmlElement.setAttribute("data-theme", "dark");
  }
})();
