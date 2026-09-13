const button = document.getElementById("share-toggle");
const popover = document.getElementById("share-popover");

button.addEventListener("click", function () {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  //flip attribute
  button.setAttribute("aria-expanded", !isExpanded); // apply styles for color bg and img color
  popover.hidden = isExpanded; // shows div containing the list of items
});

button.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    popover.hidden = true;
    button.setAttribute("aria-expanded", false);
  }
});
