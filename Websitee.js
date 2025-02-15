// script.js

// Optional: Add a confirmation dialog before leaving the page
window.onbeforeunload = function () {
    return "Are you sure you want to leave?";
  };
  
  // Example: Log which link was clicked
  document.querySelectorAll('.link-item').forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Clicked on ${link.querySelector('span').textContent}`);
    });
  });