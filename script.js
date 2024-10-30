document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("text");
    const toggleButton = document.getElementById("toggleButton");
  
    toggleButton.addEventListener("click", function() {
        content.classList.toggle("expanded");
  
        // Change the text of the button based on the content state
        if (content.classList.contains("expanded")) {
            toggleButton.textContent = "Read Less";
        } else {
            toggleButton.textContent = "Read More";
        }
    });
  });