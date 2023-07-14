// Check if the internet connection is available
function isOnline() {
    return window.navigator.onLine;
  }
  
  // Load HTML elements if online, otherwise hide them
  function loadElementsBasedOnConnection() {
    if (isOnline()) {
      // Show or load your HTML elements here
      document.getElementById("myElement").style.display = "block";
    } else {
      // Hide or remove your HTML elements here
      document.getElementById("myElement").style.display = "none";
    }
  }
  
  // Call the function initially to handle the current connection status
  loadElementsBasedOnConnection();
  
  // Add an event listener to detect changes in the connection status
  window.addEventListener("online", loadElementsBasedOnConnection);
  window.addEventListener("offline", loadElementsBasedOnConnection);  