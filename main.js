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

// close when click outside
const shareIcon = document.querySelector(".article-preview__share");
document.addEventListener("click", function (e) {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  const clickOutside = !shareIcon.contains(e.target);
  if (isExpanded && clickOutside) {
    popover.hidden = true;
    button.setAttribute("aria-expanded", !isExpanded);
  }
});
