document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      // Toggle the active class on the accordion link
      this.classList.toggle("active");

      // Get the next sibling element, which should be the panel
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
