
document.addEventListener("DOMContentLoaded", function() {
  var contextMenu = document.getElementById("contextMenu");
  var buttons = document.querySelectorAll(".taskbar-btn");

  // Show context menu on mouseup event
  buttons.forEach(function(button) {
    button.addEventListener("mouseup", function(event) {
      event.preventDefault(); // Prevent default browser context menu
      if (event.button === 0) { // Check if left mouse button is released
        // Position context menu relative to the button
        contextMenu.style.left = event.clientX + "px";
        contextMenu.style.top = event.clientY + "px";
        contextMenu.classList.remove("hidden");
      }
    });
  });

  // Hide context menu on mousedown event outside of it
  document.addEventListener("mousedown", function(event) {
    if (!contextMenu.contains(event.target)) {
      contextMenu.classList.add("hidden");
    }
  });
});